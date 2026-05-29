import os

clean_app_path = "scratch/app_old.js"
with open(clean_app_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# Reconstruct segments:
# 1. Start up to routes definition (line 42, index 41)
# lines[:17] is up to const REGIONS = [
# We replace REGIONS with the new one:
regions_def = """const REGIONS = [
    { id: '北アメリカ', label: '北アメリカ' },
    { id: '南アメリカ', label: '南アメリカ' },
    { id: 'アジア', label: 'アジア' },
    { id: 'ロシア', label: 'ロシア' },
    { id: 'アフリカ', label: 'アフリカ' },
    { id: 'ヨーロッパ', label: 'ヨーロッパ' },
    { id: '日本', label: '日本' },
    { id: '海洋', label: '海洋' }
];
"""

segment_start = "".join(lines[:17]) + regions_def + "".join(lines[26:42])

# 2. Add the updated routes:
routes_def = """// --- ROUTER CONFIG ---
const routes = {
  home: renderHome,
  dictionary: renderDictionary,
  'dictionary/:id': renderDetail,
  'topics': renderTopics,
  'glossary': renderGlossary,
  'my-collection': renderMyCollection,
  'world-map': renderWorldMap
};
"""

# 3. Add handleRouteChange:
# Clean lines 52 to 78 are APP_STATE and init definition.
# We want clean lines 52 to 78 + the new handleRouteChange.
# handleRouteChange is clean lines 79 to 146.
handle_route_change = """function handleRouteChange() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const appContainer = document.getElementById('app-container');
  
  // Update Nav Active State
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-link') === hash.split('/')[0]);
  });

  let content = '';
  let meta = { title: '', desc: '' };

  // Simple dynamic route matching
  if (hash.startsWith('dictionary/')) {
    const id = hash.split('/')[1];
    const d = DINOSAURS.find(item => item.id === id);
    if (d) {
      content = renderDetail(id);
      meta = {
        title: `${d.name} | Dino-Nexus Specimen Analysis`,
        desc: `${d.name}（${d.scientificName}）の詳細データ。${d.description.slice(0, 80)}...`,
        schema: generateDinoSchema(d)
      };
    } else {
      content = `<p>SPECIMEN NOT FOUND</p>`;
    }
  } else if (hash.startsWith('topics/')) {
    const id = hash.split('/')[1];
    const t = typeof TOPICS !== 'undefined' ? TOPICS.find(item => item.id === id) : null;
    if (t) {
      content = renderTopicDetail(id);
      meta = {
        title: `${t.title} | Dino-Nexus トピックス`,
        desc: t.summary
      };
    } else {
      content = `<p>TOPIC NOT FOUND</p>`;
    }
  } else {
    const routeKey = hash;
    if (routes[routeKey]) {
      content = routes[routeKey]();
      // Set titles for main pages
      const titles = {
        'home': 'コマンドセンター | Dino-Nexus',
        'dictionary': '生物学的アーカイブ | Dino-Nexus',
        'topics': '恐竜トピックス | Dino-Nexus',
        'glossary': '用語集 | Dino-Nexus',
        'my-collection': 'マイ・アーカイブ | Dino-Nexus',
        'world-map': 'グローバル・パレオ・マッピング | Dino-Nexus'
      };
      const descs = {
        'home': 'Dino-Nexusのメインコンソール。最新の発見と本日のピックアップ標本。',
        'dictionary': '150種以上の恐竜データを網羅したデジタル・アーカイブ。',
        'topics': '恐竜の生態推測や歴史的変化などの詳細なトピック記事。',
        'glossary': '恐竜の分類学や専門用語を解説する用語集。',
        'my-collection': '保存した恐竜データのアーカイブ。',
        'world-map': '立体地図インターフェースによる古生物地域分布探索シミュレーター。'
      };
      meta = { title: titles[routeKey], desc: descs[routeKey] };
    } else {
      content = renderHome();
      meta = { title: 'COMMAND CENTER | Dino-Nexus', desc: 'Dino-Nexusのメインコンソール。' };
    }
  }

  appContainer.innerHTML = content;
  updateMetadata(meta.title, meta.desc, meta.schema);

  // Active link marking for My Collection and others
  document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-link') === hash.split('/')[0]);
  });

  // Scroll to top
  appContainer.scrollTop = 0;
  
  // Re-attach page specific events
  if (hash === 'dictionary') attachDictionaryEvents();
  if (hash === 'vs-sim') attachVsSimEvents();
  if (hash === 'world-map') attachWorldMapEvents();
}
"""

middle_segment_1 = "".join(lines[51:78]) + handle_route_change + "".join(lines[146:253])

# 4. renderHome (NEWS replaced with TOPICS):
render_home_def = """function renderHome() {
  const randomIndex = Math.floor(Math.random() * DINOSAURS.length);
  const pickupDino = DINOSAURS[randomIndex];
  const topicItems = typeof TOPICS !== 'undefined' ? TOPICS.slice(0, 2) : [];

  return `
    <section class="page-header">
      <h2 class="page-title">コマンドセンター</h2>
      <p class="page-subtitle">システムステータス: 全アーカイブアクセス可能</p>
    </section>

    <div class="home-layout">
        <div class="dino-day-hero hud-panel">
            <div class="hud-corner top-left"></div>
            <div class="hud-corner bottom-right"></div>
            <div class="hero-img-container" style="background-image: url('${pickupDino.image}')"></div>
            <div class="hero-content">
                <span class="hero-label">【本日のピックアップ標本】</span>
                <h3 class="hero-name" style="font-size: 32px; margin: 10px 0;">${pickupDino.name}</h3>
                <p class="hero-desc" style="color: var(--text-dim); line-height: 1.6; margin-bottom: 20px;">${pickupDino.description}</p>
                <a href="#dictionary/${pickupDino.id}" class="nav-link" style="display: inline-block; width: fit-content;">詳細データを閲覧</a>
            </div>
        </div>

        <div class="news-summary-sidebar hud-panel">
            <h4 style="margin-bottom: 20px; border-bottom: 1px solid var(--panel-border); padding-bottom: 10px;">最新トピックス</h4>
            ${topicItems.map(item => `
                <div class="news-item-sm" style="margin-bottom: 20px; cursor: pointer;" onclick="location.hash='#topics/${item.id}'">
                    <span style="font-size: 10px; color: var(--primary-neon);">${item.date}</span>
                    <h5 style="margin: 5px 0;">${item.title}</h5>
                    <p style="font-size: 12px; color: var(--text-dim);">${item.summary.slice(0, 50)}...</p>
                </div>
            `).join('')}
            <a href="#topics" style="font-size: 12px; color: var(--primary-neon);">[ トピックス一覧にアクセス ]</a>
        </div>

        <div class="author-summary hud-panel">
            <h4 style="margin-bottom: 20px; border-bottom: 1px solid var(--panel-border); padding-bottom: 10px;">キュレーター情報</h4>
            ${renderAuthorProfile()}
        </div>
    </div>
  `;
}
"""

# middle_segment_2 contains lines 298 to 1030 (except we need to update matchesRegion in dictionary)
# clean_app.js line 298 is index 297.
# we take lines 298 to 540:
lines_298_to_540 = "".join(lines[297:540])

# Updated matchesRegion in updateList:
dictionary_matches_region = """            const matchesRegion = !regionVal || 
                (regionVal === '海洋' ? 
                    (d.region.includes('海') && !d.region.includes('北海道')) : 
                    (regionVal === 'アジア' ? 
                        (d.region.includes('アジア') && !d.region.includes('ロシア')) :
                        d.region.includes(regionVal)));"""

# lines 545 to 1030:
lines_545_to_1030 = "".join(lines[544:1030])

# we skip lines 1030 to 1060 (renderNews).
# lines 1061 to 1164:
# index 1060 is line 1061.
lines_1061_to_1164 = "".join(lines[1060:1164])

# topics and world map code to append:
topics_and_world_map_code = """
// --- DINO TOPICS FUNCTIONS ---
function renderTopics() {
    return `
        <section class="page-header">
            <h2 class="page-title">恐竜トピックス</h2>
            <p class="page-subtitle">古生物学における最新の研究と歴史的推移</p>
        </section>
        
        <div class="topic-list">
            ${TOPICS.map(topic => `
                <div class="topic-card hud-panel" onclick="location.hash='#topics/${topic.id}'">
                    <img src="${topic.image}" class="topic-thumb" alt="${topic.title}">
                    <div class="topic-summary">
                        <div class="topic-meta">
                            [ ${topic.category} ] ${topic.date} | ${topic.securityLevel}
                        </div>
                        <h3 class="topic-title">${topic.title}</h3>
                        <p class="topic-desc">${topic.summary}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderTopicDetail(id) {
    const topic = TOPICS.find(item => item.id === id);
    if (!topic) return `<p>TOPIC NOT FOUND</p>`;

    return `
        <article class="topic-article hud-panel">
            <div class="topic-detail-header">
                <div class="topic-meta">
                    [ ${topic.category} ] ${topic.date} | ${topic.securityLevel}
                </div>
                <h1 class="topic-title" style="font-size: 28px; color: var(--primary-neon);">${topic.title}</h1>
            </div>
            
            <img src="${topic.image}" class="topic-detail-img" alt="${topic.title}">
            
            <div class="topic-content">
                ${topic.content}
            </div>
            
            ${topic.relatedSpecimens && topic.relatedSpecimens.length > 0 ? `
            <section class="related-specimens" style="margin-top: 60px;">
                <h3 class="related-title">関連するアーカイブデータ</h3>
                <div class="related-grid">
                    ${topic.relatedSpecimens.map(specimenId => {
                        const d = DINOSAURS.find(item => item.id === specimenId);
                        if (!d) return '';
                        return `
                        <div class="related-card hud-panel" onclick="location.hash='#dictionary/${d.id}'">
                            <div class="related-img-wrap">
                                <img src="${d.image}" alt="${d.name}" loading="lazy" decoding="async">
                            </div>
                            <h4 class="related-name">${d.name}</h4>
                            <div class="related-meta">${d.era} / ${d.region}</div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </section>
            ` : ''}
            
            <div style="margin-top: 40px; border-top: 1px solid var(--panel-border); padding-top: 20px;">
                <a href="#topics" class="nav-link" aria-label="トピックス一覧に戻る">[ トピックス一覧に戻る ]</a>
            </div>
        </article>
    `;
}

// --- 3D TACTICAL WORLD MAP CONFIGURATION ---
const WORLD_MAP_PATHS = {
  '北アメリカ': 'M 60,80 L 120,60 L 180,40 L 260,30 L 320,60 L 330,90 L 310,120 L 270,125 L 260,150 L 220,160 L 250,190 L 220,220 L 195,225 L 185,250 L 180,230 L 140,220 L 120,195 L 90,195 L 80,150 L 105,130 L 95,95 Z',
  '南アメリカ': 'M 225,235 L 255,230 L 285,240 L 315,250 L 325,275 L 310,330 L 295,370 L 275,420 L 265,445 L 260,430 L 250,390 L 230,330 L 220,270 Z',
  'ユーラシア': 'M 410,110 L 450,80 L 530,60 L 610,55 L 690,55 L 770,60 L 850,70 L 890,85 L 900,105 L 890,140 L 900,175 L 860,210 L 840,240 L 810,250 L 790,270 L 740,270 L 690,295 L 630,270 L 600,250 L 585,210 L 550,205 L 510,210 L 470,210 L 450,190 L 450,150 L 430,120 Z',
  'アフリカ': 'M 450,205 L 500,205 L 530,215 L 575,200 L 595,220 L 605,260 L 645,300 L 650,320 L 610,370 L 580,400 L 570,400 L 540,350 L 510,325 L 485,300 L 460,275 L 445,225 Z',
  'オセアニア': 'M 750,300 L 790,290 L 840,305 L 855,320 L 845,360 L 810,375 L 760,360 Z',
  '日本': 'M 835,130 L 845,125 L 855,135 L 865,145 L 870,160 L 865,165 L 855,165 L 845,155 L 835,145 Z'
};

const WORLD_MAP_GLOW_PATHS = {
  '北アメリカ': 'M 60,40 L 290,40 L 320,180 L 250,220 L 180,240 L 80,180 Z',
  '南アメリカ': 'M 230,220 L 320,220 L 300,360 L 270,440 L 220,380 Z',
  'ヨーロッパ': 'M 440,80 L 580,70 L 590,170 L 450,190 Z',
  'アジア': 'M 580,70 L 890,60 L 920,240 L 740,280 L 620,250 L 590,170 Z',
  'アフリカ': 'M 460,190 L 590,180 L 640,280 L 570,390 L 480,350 Z',
  'オセアニア': 'M 750,280 L 890,290 L 870,380 L 760,370 Z',
  '日本': 'M 830,120 L 880,120 L 880,170 L 830,170 Z'
};

const REGION_MAP = {
  '北アメリカ': ['北アメリカ'],
  '南アメリカ': ['南アメリカ'],
  'ヨーロッパ': ['ヨーロッパ'],
  'ロシア': ['ロシア'],
  'アジア': ['アジア'],
  'アフリカ': ['アフリカ'],
  'オセアニア': ['オセアニア'],
  '日本': ['日本'],
  '海洋': ['海洋']
};

const REGION_CENTERS = {
  '北アメリカ': { x: 700, y: 520 },
  '南アメリカ': { x: 700, y: 1060 },
  'ヨーロッパ': { x: 1300, y: 500 },
  'ロシア': { x: 1950, y: 400 },
  'アジア': { x: 1950, y: 700 },
  'アフリカ': { x: 1400, y: 990 },
  'オセアニア': { x: 2250, y: 1140 },
  '日本': { x: 2390, y: 590 }
};

const REGION_FRAMES = {
  '北アメリカ': { x: 170, y: 220, width: 920, height: 590 },
  '南アメリカ': { x: 700, y: 740, width: 400, height: 570 },
  'ヨーロッパ': { x: 1250, y: 210, width: 400, height: 390 },
  'ロシア': { x: 1700, y: 90, width: 1080, height: 360 },
  'アジア': { x: 1670, y: 430, width: 700, height: 400 },
  'アフリカ': { x: 1200, y: 580, width: 590, height: 570 },
  'オセアニア': { x: 2200, y: 890, width: 400, height: 300 },
  '日本': { x: 2340, y: 460, width: 160, height: 190 }
};

const REGION_METADATA = {
  '北アメリカ': { danger: 85, specimens: 34, description: '白亜紀の大型獣脚類（ティラノサウルス等）や角竜類が多く発掘される巨大セクター。', era: '白亜紀・ジュラ紀' },
  '南アメリカ': { danger: 90, specimens: 22, description: 'ギガノトサウルスやアルゼンチノサウルスなど、超巨大種が跋扈した恐るべきセクター。', era: '白亜紀' },
  'ヨーロッパ': { danger: 70, specimens: 18, description: 'イグアノドンやバリオニクスなど、湿潤な森林や水辺に適応した多様な古生物が繁栄したセクター。', era: 'ジュラ紀・白亜紀' },
  'ロシア': { danger: 75, specimens: 5, description: 'オロロティタンやイノストランケビアなど、極北の過酷な気候や変動する環境を生き抜いた屈強な古生物セクター。', era: 'ペルム紀・白亜紀' },
  'アジア': { danger: 82, specimens: 36, description: 'ヴェロキラプトルやテリジノサウルスなど、高い知性や特殊な捕食形態を遂げた種が多く発掘される広大セクター。', era: '三畳紀・ジュラ紀・白亜紀' },
  'アフリカ': { danger: 88, specimens: 25, description: 'カルノタウルスやスピノサウルスなど、極限環境に適応した捕食者が多く見られる赤道セクター。', era: '白亜紀' },
  'オセアニア': { danger: 50, specimens: 12, description: 'オーストラリアなどの孤立した大陸で独自進化を遂げた、ユニークな種が登録されているセクター。', era: '白亜紀' },
  '日本': { danger: 55, specimens: 15, description: 'カムイサウルス（むかわ竜）やフクイラプトルなど、日本列島特有 of 貴重な古生物が登録された重要セクター。', era: '白亜紀' },
  '海洋': { danger: 95, specimens: 28, description: 'モササウルスやプレシオサウルスなど、太古の海を支配した巨大爬虫類や魚竜が漂う危険なセクター。', era: '古生代・三畳紀・ジュラ紀・白亜紀' }
};

const matchesRegion = (dinoRegion, targetRegion) => {
    if (targetRegion === '海洋') {
        return dinoRegion.includes('海洋') || dinoRegion.includes('海');
    }
    if (targetRegion === 'アジア') {
        // Exclude Russian specimens from general Asia scans to keep them distinct
        return dinoRegion.includes('アジア') && !dinoRegion.includes('ロシア');
    }
    const mapped = REGION_MAP[targetRegion];
    if (!mapped) return false;
    return mapped.some(r => dinoRegion.includes(r));
};

// --- CYBER WORLD MAP INTERACTION HELPERS ---

function getScannedDinoListHtml(regionName) {
    const list = DINOSAURS.filter(d => matchesRegion(d.region, regionName));
    const meta = REGION_METADATA[regionName] || { danger: 50, specimens: 0, description: '', era: '' };
    
    let dangerColor = 'var(--secondary-neon)';
    if (meta.danger > 80) dangerColor = 'var(--alert-neon)';
    else if (meta.danger > 60) dangerColor = '#ffaa00';
    
    return `
        <div class="scan-meta-details" style="animation: scan-info-fade 0.5s ease forwards; margin-bottom: 25px; border: none; background: none; padding: 0;">
            <h3 style="color: var(--text-main); margin-bottom: 12px; font-size: 18px; font-family: var(--font-sans); font-weight: bold; border-bottom: none; text-shadow: none; letter-spacing: 0.5px;">選択エリア：${regionName}</h3>
            <p style="font-size: 14px; line-height: 1.6; color: var(--text-main); margin-bottom: 20px; font-family: var(--font-sans); font-weight: normal;">${meta.description}</p>
            
            <div style="font-size: 16px; font-weight: bold; color: var(--secondary-neon); font-family: 'Inter', sans-serif; margin-bottom: 10px;">
                登録数: ${list.length} 種類
            </div>
        </div>
        
        <div class="dino-grid">
            ${renderDinoCards(list)}
        </div>
    `;
}

function renderWorldMap() {
  return `
    <section class="page-header">
      <h2 class="page-title">ワールドマップ</h2>
      <p class="page-subtitle">地図上の地域をクリックして登録標本データをスキャン</p>
    </section>

    <div class="world-map-layout">
        <div class="map-3d-stage">
            <!-- マップコンテナ -->
            <div class="cyber-map-container" id="map-3d-container">
                <svg viewBox="0 0 2816 1336" class="cyber-world-map" id="map-hotspots-svg">
                    <image href="images/cyber_world_map.png" x="0" y="0" width="2816" height="1536" />
                    <!-- 地域ごとのホットスポット矩形（緑の枠と同じ領域） -->
                    ${Object.keys(REGION_FRAMES).map(region => {
                        const frame = REGION_FRAMES[region];
                        return `<rect class="map-region-hotspot" data-region="${region}" fill="transparent" stroke="transparent" x="${frame.x}" y="${frame.y}" width="${frame.width}" height="${frame.height}" />`;
                    }).join('')}
                    
                    <!-- エリア選択枠（四角） -->
                    <g id="selected-region-frame" style="display: none; pointer-events: none;">
                        <!-- 外枠ダッシュ線 -->
                        <rect id="selector-rect" x="0" y="0" width="0" height="0" fill="rgba(0, 255, 102, 0.02)" stroke="var(--secondary-neon)" stroke-width="2.5" stroke-dasharray="10 8" rx="6" style="filter: drop-shadow(0 0 10px rgba(0, 255, 102, 0.25));" />
                        <!-- 左上コーナー -->
                        <g id="bracket-tl">
                            <path d="M 0,20 L 0,0 L 20,0" fill="none" stroke="var(--secondary-neon)" stroke-width="4.5" />
                        </g>
                        <!-- 右上コーナー -->
                        <g id="bracket-tr">
                            <path d="M -20,0 L 0,0 L 0,20" fill="none" stroke="var(--secondary-neon)" stroke-width="4.5" />
                        </g>
                        <!-- 左下コーナー -->
                        <g id="bracket-bl">
                            <path d="M 0,-20 L 0,0 L 20,0" fill="none" stroke="var(--secondary-neon)" stroke-width="4.5" />
                        </g>
                        <!-- 右下コーナー -->
                        <g id="bracket-br">
                            <path d="M -20,0 L 0,0 L 0,-20" fill="none" stroke="var(--secondary-neon)" stroke-width="4.5" />
                        </g>
                    </g>

                    <!-- 各セクターの生物数バッジ -->
                    ${Object.keys(REGION_CENTERS).map(region => {
                        const center = REGION_CENTERS[region];
                        const count = DINOSAURS.filter(d => matchesRegion(d.region, region)).length;
                        
                        const engLabels = {
                            '北アメリカ': 'NORTH AMERICA',
                            '南アメリカ': 'SOUTH AMERICA',
                            'ヨーロッパ': 'EUROPE',
                            'ロシア': 'RUSSIA',
                            'アジア': 'ASIA',
                            'アフリカ': 'AFRICA',
                            'オセアニア': 'OCEANIA',
                            '日本': 'JAPAN'
                        };
                        
                        const label = engLabels[region] || region.toUpperCase();
                        const badgeY = center.y - 70;
                        const badgeX = region === '日本' ? center.x + 240 : center.x;
                        
                        return `
                            <g class="map-badge-group" transform="translate(${badgeX}, ${badgeY})" style="pointer-events: none;">
                                <rect x="-120" y="-35" width="240" height="70" rx="6" fill="rgba(4, 8, 12, 0.92)" stroke="var(--panel-border)" stroke-width="2" style="filter: drop-shadow(0 0 10px rgba(0, 242, 255, 0.15));" />
                                <line x1="-115" y1="-25" x2="-115" y2="25" stroke="var(--primary-neon)" stroke-width="4" />
                                <text x="-95" y="-8" text-anchor="start" fill="var(--text-dim)" font-size="16" font-family="var(--font-mono)" letter-spacing="1">${label}</text>
                                <text x="-95" y="20" text-anchor="start" fill="var(--secondary-neon)" font-size="22" font-weight="bold" font-family="var(--font-mono)">${count} 種の登録</text>
                            </g>
                        `;
                    }).join('')}
                </svg>
            </div>
            
            <div class="map-scan-beam" id="scan-beam-el" style="display: none;"></div>
        </div>

        <div class="scan-terminal">
            <div class="terminal-header-bar">
                <span>スキャンデータ</span>
                <div class="terminal-status-light"></div>
            </div>
            <div class="terminal-main-content" id="terminal-content">
                <div class="scan-init-msg">
                    <div class="scan-radar-icon">☵</div>
                    <p style="font-size: 14px; letter-spacing: 1.5px;">地図上のエリアをクリックしてデータをスキャンしてください。</p>
                </div>
            </div>
        </div>
    </div>
  `;
}

function attachWorldMapEvents() {
    const container = document.getElementById('map-3d-container');
    const hotspotsSvg = document.getElementById('map-hotspots-svg');
    const scanBeam = document.getElementById('scan-beam-el');
    const terminalContent = document.getElementById('terminal-content');
    
    if (!container || !hotspotsSvg) return;
    
    let isScanning = false;
    
    // Click scan interaction
    hotspotsSvg.addEventListener('click', (e) => {
        const hotspot = e.target.closest('.map-region-hotspot');
        if (hotspot && !isScanning) {
            const region = hotspot.getAttribute('data-region');
            const center = REGION_CENTERS[region];
            if (!center) return;
            
            isScanning = true;
            
            // Show and move region frame
            const frame = REGION_FRAMES[region];
            const frameGroup = document.getElementById('selected-region-frame');
            if (frame && frameGroup) {
                const selectorRect = document.getElementById('selector-rect');
                const bracketTl = document.getElementById('bracket-tl');
                const bracketTr = document.getElementById('bracket-tr');
                const bracketBl = document.getElementById('bracket-bl');
                const bracketBr = document.getElementById('bracket-br');
                
                selectorRect.setAttribute('x', frame.x);
                selectorRect.setAttribute('y', frame.y);
                selectorRect.setAttribute('width', frame.width);
                selectorRect.setAttribute('height', frame.height);
                
                bracketTl.setAttribute('transform', `translate(${frame.x}, ${frame.y})`);
                bracketTr.setAttribute('transform', `translate(${frame.x + frame.width}, ${frame.y})`);
                bracketBl.setAttribute('transform', `translate(${frame.x}, ${frame.y + frame.height})`);
                bracketBr.setAttribute('transform', `translate(${frame.x + frame.width}, ${frame.y + frame.height})`);
                
                frameGroup.style.display = 'block';
            }
            
            // Scan beam effect
            if (scanBeam) {
                scanBeam.style.display = 'block';
                scanBeam.style.top = '0%';
                
                let start = null;
                const duration = 1200;
                
                function animateScanBeam(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percent = Math.min(100, (progress / duration) * 100);
                    scanBeam.style.top = `${percent}%`;
                    
                    if (progress < duration) {
                        requestAnimationFrame(animateScanBeam);
                    } else {
                        scanBeam.style.display = 'none';
                    }
                }
                requestAnimationFrame(animateScanBeam);
            }
            
            // Terminal scanning indicator
            terminalContent.innerHTML = `
                <div class="scan-init-msg">
                    <div class="scan-radar-icon" style="color: var(--secondary-neon);">☲</div>
                    <h3 style="color: var(--secondary-neon); font-family: var(--font-mono); letter-spacing: 2px;">DECODING SECTOR MATRIX...</h3>
                    <p style="font-family: var(--font-mono); font-size: 11px; color: var(--text-dim);">[SECTOR: ${region.toUpperCase()}]<br>ESTABLISHING TELEMETRY CONNECTION</p>
                    <div style="width: 100%; height: 6px; background: rgba(0, 242, 255, 0.05); border: 1px solid var(--panel-border); overflow: hidden; width: 200px; margin-top: 10px; margin-left: auto; margin-right: auto;">
                        <div id="decoder-progress-fill" style="width: 0%; height: 100%; background: var(--secondary-neon); box-shadow: 0 0 10px var(--secondary-neon);"></div>
                    </div>
                </div>
            `;
            
            const progressFill = document.getElementById('decoder-progress-fill');
            let progressVal = 0;
            const progressInterval = setInterval(() => {
                progressVal += 10;
                if (progressFill) progressFill.style.width = `${progressVal}%`;
                if (progressVal >= 100) {
                    clearInterval(progressInterval);
                }
            }, 100);
            
            setTimeout(() => {
                terminalContent.innerHTML = getScannedDinoListHtml(region);
                isScanning = false;
            }, 1300);
        }
    });
}
"""

rebuilt_content = (
    segment_start
    + routes_def
    + middle_segment_1
    + render_home_def
    + lines_298_to_540
    + dictionary_matches_region
    + lines_545_to_1030
    + lines_1061_to_1164
    + topics_and_world_map_code
    + "\n\ninit();\n"
)

with open("app.js", "w", encoding="utf-8") as out:
    out.write(rebuilt_content)
print("Rebuilt app.js successfully with correct index slices!")
