
// --- PHYSICAL CONSTANTS (HUD GOLDEN RULES) ---
const HUD_CONFIG = {
    PANEL_HEIGHT: 400,
    BASELINE_PX: 100,
    get SAFE_ZONE_H() { return this.PANEL_HEIGHT - this.BASELINE_PX; }, // 300px
    SAFE_ZONE_W: 600
};

// --- DATA CONSTANTS ---
const ERAS = [
    { id: '古生代', label: '古生代', period: '5億4100万 - 2億5100万年前' },
    { id: '三畳紀', label: '三畳紀', period: '2億5100万 - 2億0100万年前' },
    { id: 'ジュラ紀', label: 'ジュラ紀', period: '2億0100万 - 1億4500万年前' },
    { id: '白亜紀', label: '白亜紀', period: '1億4500万 - 6600万年前' }
];

const REGIONS = [
    { id: '北アメリカ', label: '北アメリカ' },
    { id: '南アメリカ', label: '南アメリカ' },
    { id: 'アジア', label: 'アジア' },
    { id: 'ロシア', label: 'ロシア' },
    { id: 'アフリカ', label: 'アフリカ' },
    { id: 'ヨーロッパ', label: 'ヨーロッパ' },
    { id: '日本', label: '日本' },
    { id: '海洋', label: '海洋' }
];

const GROUPS = [
    { id: '獣脚類', label: '獣脚類' },
    { id: '竜脚類', label: '竜脚類' },
    { id: '鳥脚類', label: '鳥脚類' },
    { id: '剣竜類', label: '剣竜類' },
    { id: '堅頭竜類', label: '堅頭竜類' },
    { id: 'よろい竜類', label: 'よろい竜類' },
    { id: '角竜類', label: '角竜類' },
    { id: '翼竜', label: '翼竜' },
    { id: '首長竜', label: '首長竜' },
    { id: '魚竜', label: '魚竜' },
    { id: 'その他', label: 'その他' }
];

// --- ROUTER CONFIG ---
// --- ROUTER CONFIG ---
const routes = {
  home: renderHome,
  dictionary: renderDictionary,
  'dictionary/:id': renderDetail,
  'topics': renderTopics,
  'glossary': renderGlossary,
  'my-collection': renderMyCollection,
  'world-map': renderWorldMap
};

// --- STATE MANAGEMENT ---
const APP_STATE = {
    COLLECTION_KEY: 'dino_nexus_saved_observations',
    getCollection() {
        const saved = localStorage.getItem(this.COLLECTION_KEY);
        return saved ? JSON.parse(saved) : [];
    },
    toggleCollection(id) {
        let current = this.getCollection();
        if (current.includes(id)) {
            current = current.filter(item => item !== id);
        } else {
            current.push(id);
        }
        localStorage.setItem(this.COLLECTION_KEY, JSON.stringify(current));
        return current.includes(id);
    }
};

// --- INITIALIZATION ---
function init() {
  window.addEventListener('hashchange', handleRouteChange);
  handleRouteChange(); // Handle initial load
  setupGlobalEvents();
}

function handleRouteChange() {
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
function updateMetadata(title, desc, schema) {
    if (title) document.title = title;
    if (desc) {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', desc);
    }
    const schemaEl = document.getElementById('dynamic-schema');
    if (schemaEl) {
        schemaEl.textContent = schema ? JSON.stringify(schema) : '';
    }
}

function generateDinoSchema(d) {
    const faqs = generateDynamicFAQs(d);
    
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": d.name,
                "description": d.description,
                "image": d.image,
                "author": {
                    "@type": "Person",
                    "name": AUTHOR_DATA.name,
                    "jobTitle": AUTHOR_DATA.role,
                    "description": AUTHOR_DATA.bio,
                    "url": "https://dino-nexus.example.com/"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.a
                    }
                }))
            }
        ]
    };
}

function generateDynamicFAQs(d) {
    const faqs = [];
    
    // Trait based FAQ (Unique to each dino)
    if (d.bioTraits && d.bioTraits.length > 0) {
        const primaryTrait = d.bioTraits[0];
        faqs.push({
            q: `${d.name}の持つ「${primaryTrait.trait}」とはどのような能力ですか？`,
            a: `${primaryTrait.trait}は解析値で「${primaryTrait.value}」と評価されています。詳細は：${primaryTrait.detail}`
        });
    }

    // Diet based FAQ
    faqs.push({
        q: `${d.name}はどのような食性を持っていましたか？`,
        a: `${d.name}は「${d.diet}」でした。`
    });

    // Region/Era based FAQ
    faqs.push({
        q: `${d.name}はどこで、いつ頃生息していましたか？`,
        a: `${d.era}の${d.region}に生息していました。`
    });

    return faqs;
}


function setupGlobalEvents() {
    // Universal typing footer effect
    const footerText = document.querySelector('.typing-text');
    const texts = ["遺伝子配列を解析中...", "古生物データベースを更新中...", "アーカイブと同期中...", "新しい発見をスキャン中..."];
    let i = 0;
    setInterval(() => {
        footerText.innerText = texts[i];
        i = (i + 1) % texts.length;
    }, 4000);
}

// --- STATE MANAGEMENT ---
const STATE_KEYS = {
    DICT_FILTERS: 'dino_nexus_dict_filters'
};

function getDictState() {
    const saved = localStorage.getItem(STATE_KEYS.DICT_FILTERS);
    return saved ? JSON.parse(saved) : {
        search: '',
        era: '',
        region: '',
        group: '',
        sort: 'kana'
    };
}

function saveDictState(state) {
    localStorage.setItem(STATE_KEYS.DICT_FILTERS, JSON.stringify(state));
}

// --- RENDERERS ---

function renderHome() {
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
function renderAuthorProfile() {
    return `
        <div class="author-profile-card">
            <div class="author-header">
                <div class="author-avatar">🦕</div>
                <div class="author-meta">
                    <span class="author-name">${AUTHOR_DATA.name}</span>
                    <span class="author-title">${AUTHOR_DATA.role}</span>
                </div>
            </div>
            <p class="author-bio">${AUTHOR_DATA.bio}</p>
            <div class="author-mission">MISSION: ${AUTHOR_DATA.mission}</div>
        </div>
    `;
}

function renderTimeline(activeEra) {
    return `
        <div class="timeline-container">
            <div class="timeline-label-fixed" style="padding: 0 30px; font-family: var(--font-mono); font-size: 12px; color: var(--primary-neon); border-right: 1px solid var(--panel-border); height: 100%; display: flex; align-items: center; white-space: nowrap; background: rgba(0, 242, 255, 0.05);">
                年代フィルタ
            </div>
            <div class="timeline-track">
                <div class="timeline-era ${!activeEra ? 'active' : ''}" data-era="">
                    <div class="era-marker"></div>
                    <span class="era-label">すべて</span>
                    <span class="era-period">ALL ERAS</span>
                </div>
                ${ERAS.map((e, index) => `
                    <div class="timeline-era ${activeEra === e.id ? 'active' : ''} ${index < ERAS.length - 1 ? 'has-arrow' : ''}" data-era="${e.id}">
                        <div class="era-marker"></div>
                        <span class="era-label">${e.label}</span>
                        <span class="era-period">${e.period}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderMap(activeRegion) {
    return `
        <div class="timeline-container region-timeline">
            <div class="timeline-label-fixed" style="padding: 0 30px; font-family: var(--font-mono); font-size: 12px; color: var(--primary-neon); border-right: 1px solid var(--panel-border); height: 100%; display: flex; align-items: center; white-space: nowrap; background: rgba(0, 242, 255, 0.05);">
                地域フィルタ
            </div>
            <div class="timeline-track">
                <div class="timeline-region ${!activeRegion ? 'active' : ''}" data-region="">
                    <div class="era-marker"></div>
                    <span class="era-label">すべて</span>
                </div>
                ${REGIONS.map(r => `
                    <div class="timeline-region ${activeRegion === r.id ? 'active' : ''}" data-region="${r.id}">
                        <div class="era-marker"></div>
                        <span class="era-label">${r.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderGroupFilter(activeGroup) {
    return `
        <div class="timeline-container group-timeline">
            <div class="timeline-label-fixed" style="padding: 0 30px; font-family: var(--font-mono); font-size: 12px; color: var(--primary-neon); border-right: 1px solid var(--panel-border); height: 100%; display: flex; align-items: center; white-space: nowrap; background: rgba(0, 242, 255, 0.05);">
                系統フィルタ
            </div>
            <div class="timeline-track">
                <div class="timeline-group ${!activeGroup ? 'active' : ''}" data-group="">
                    <div class="era-marker"></div>
                    <span class="era-label">すべて</span>
                </div>
                ${GROUPS.map(g => `
                    <div class="timeline-group ${activeGroup === g.id ? 'active' : ''}" data-group="${g.id}">
                        <div class="era-marker"></div>
                        <span class="era-label">${g.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderDictionary() {
  const state = getDictState();
  
  return `
    <section class="page-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
        <div>
            <h2 class="page-title" style="margin-bottom: 5px;">古生物アーカイブ</h2>
            <p class="page-subtitle">標本リスト : 総数 ${DINOSAURS.length}</p>
        </div>
        <div class="search-header-wrap" style="display: flex; gap: 10px; align-items: center; flex-shrink: 0;">
            <select id="sort-order" class="search-input" style="width: auto; margin-bottom: 0; padding: 10px 15px; font-size: 14px; border-color: var(--primary-neon); background: rgba(0, 242, 255, 0.05); height: 43px;" aria-label="リストの並び替え">
                <option value="kana" ${state.sort === 'kana' ? 'selected' : ''}>並び順: かな順</option>
                <option value="size" ${state.sort === 'size' ? 'selected' : ''}>並び順: サイズ順</option>
            </select>
            <input type="text" id="dino-search" class="search-input" placeholder="アーカイブ内を検索..." value="${state.search}" 
                   style="width: 300px; margin-bottom: 0; padding: 12px 15px; font-size: 14px; border-color: var(--primary-neon); background: rgba(0, 242, 255, 0.05); height: 43px;"
                   aria-label="恐竜の名前で検索">
        </div>
    </section>

    <!-- Filter Toggle & Active Chips -->
    <div class="filter-controls-header hud-panel" style="margin-bottom: 20px; padding: 10px 20px; display: flex; align-items: center; gap: 20px; justify-content: space-between; cursor: pointer;" id="filter-accordion-toggle">
        <div style="display: flex; align-items: center; gap: 15px; overflow-x: auto; scrollbar-width: none;" id="active-filter-chips">
            <span style="font-family: var(--font-mono); font-size: 11px; color: var(--primary-neon); white-space: nowrap;">// フィルタ設定:</span>
            <div class="filter-chips-container" style="display: flex; gap: 8px;">
                ${state.era ? `<span class="filter-chip">${state.era}</span>` : ''}
                ${state.region ? `<span class="filter-chip">${state.region}</span>` : ''}
                ${state.group ? `<span class="filter-chip">${state.group}</span>` : ''}
                ${(!state.era && !state.region && !state.group) ? '<span style="font-size: 11px; color: var(--text-dim);">未設定</span>' : ''}
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; color: var(--primary-neon); font-family: var(--font-mono); font-size: 12px; white-space: nowrap;">
            <span id="accordion-label">フィルタを展開</span>
            <span id="accordion-icon" style="transition: transform 0.3s ease;">[ + ]</span>
        </div>
    </div>

    <!-- Collapsible Filter Content -->
    <div id="filter-accordion-content" style="display: none; margin-bottom: 30px;">
        <div class="hud-panel" style="padding: 10px 0; border-top: none;">
            <!-- Temporal Navigation -->
            <div class="timeline-wrapper" style="margin-bottom: 10px;">
                ${renderTimeline(state.era)}
            </div>

            <!-- Spatial Navigation -->
            <div class="timeline-wrapper" style="margin-bottom: 10px;">
                ${renderMap(state.region)}
            </div>

            <!-- Taxonomic Navigation -->
            <div class="timeline-wrapper">
                ${renderGroupFilter(state.group)}
            </div>
        </div>
    </div>

    <input type="hidden" id="filter-era" value="${state.era}">
    <input type="hidden" id="filter-region" value="${state.region}">
    <input type="hidden" id="filter-group" value="${state.group}">

    <div class="dino-grid" id="dino-grid-content">
        <!-- Initial content will be updated by attachDictionaryEvents -->
        ${renderDinoCards(DINOSAURS)}
    </div>
  `;
}

function renderDinoCards(list) {
    const collected = APP_STATE.getCollection();
    return list.map(d => {
        const isCollected = collected.includes(d.id);
        return `
            <div class="dino-card hud-panel ${isCollected ? 'is-collected' : ''}" onclick="location.hash='#dictionary/${d.id}'">
                <div class="card-img-wrap">
                    <img src="${d.image}" alt="${d.name}" loading="lazy" decoding="async" width="400" height="225">
                    ${isCollected ? '<div class="collected-badge">OBSERVED</div>' : ''}
                </div>
                <div class="card-info">
                    <h3 class="card-title">${d.name}</h3>
                    <div class="card-tags" style="display: flex; gap: 5px; flex-wrap: wrap;">
                        <span class="card-tag group-tag">${d.group || '未分類'}</span>
                        <span class="card-tag">${d.era}</span>
                        <span class="card-tag">${d.diet}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function attachDictionaryEvents() {
    const search = document.getElementById('dino-search');
    const era = document.getElementById('filter-era');
    const region = document.getElementById('filter-region');
    const group = document.getElementById('filter-group');
    const sort = document.getElementById('sort-order');

    const hiraToKata = (str) => str.replace(/[\u3041-\u3096]/g, m => String.fromCharCode(m.charCodeAt(0) + 0x60));
    const kataToHira = (str) => str.replace(/[\u30a1-\u30f6]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x60));

    const extractNumber = (str) => {
        if (!str) return 0;
        const match = str.match(/[0-9.]+/);
        return match ? parseFloat(match[0]) : 0;
    };

    const updateFilterChips = (eraVal, regionVal, groupVal) => {
        const chipContainer = document.querySelector('.filter-chips-container');
        if (!chipContainer) return;
        
        let html = '';
        if (eraVal) html += `<span class="filter-chip">${eraVal}</span>`;
        if (regionVal) html += `<span class="filter-chip">${regionVal}</span>`;
        if (groupVal) html += `<span class="filter-chip">${groupVal}</span>`;
        if (!html) html = '<span style="font-size: 11px; color: var(--text-dim);">未設定</span>';
        
        chipContainer.innerHTML = html;
    };

    const updateList = () => {
        const rawSearchVal = search.value.trim();
        const searchVal = rawSearchVal.toLowerCase();
        const searchKata = hiraToKata(rawSearchVal);
        const searchHira = kataToHira(rawSearchVal);
        
        const eraVal = era.value;
        const regionVal = region.value;
        const sortVal = sort.value;

        // Save state
        saveDictState({
            search: rawSearchVal,
            era: eraVal,
            region: regionVal,
            group: group.value,
            sort: sortVal
        });

        // Sync timeline and map active states if they changed via dropdown
        document.querySelectorAll('.timeline-era').forEach(t => {
            t.classList.toggle('active', t.getAttribute('data-era') === eraVal);
        });
        document.querySelectorAll('.timeline-region').forEach(r => {
            r.classList.toggle('active', r.getAttribute('data-region') === regionVal);
        });
        document.querySelectorAll('.timeline-group').forEach(g => {
            g.classList.toggle('active', g.getAttribute('data-group') === group.value);
        });

        updateFilterChips(eraVal, regionVal, group.value);

        let filtered = DINOSAURS.filter(d => {
            const matchesSearch = 
                d.name.startsWith(searchKata) || 
                d.kana.startsWith(searchHira) || 
                d.id.includes(searchVal) ||
                (d.scientificName && d.scientificName.toLowerCase().includes(searchVal));
            const matchesEra = !eraVal || d.era.includes(eraVal);
            const matchesRegion = !regionVal || 
                (regionVal === '海洋' ? 
                    (d.region.includes('海') && !d.region.includes('北海道')) : 
                    (regionVal === 'アジア' ? 
                        (d.region.includes('アジア') && !d.region.includes('ロシア')) :
                        d.region.includes(regionVal)));            const matchesGroup = !group.value || d.group === group.value;
            return matchesSearch && matchesEra && matchesRegion && matchesGroup;
        });

        // Sorting
        if (sortVal === 'kana') {
            filtered.sort((a, b) => a.kana.localeCompare(b.kana, 'ja'));
        } else if (sortVal === 'size') {
            filtered.sort((a, b) => extractNumber(b.length) - extractNumber(a.length));
        }

        document.getElementById('dino-grid-content').innerHTML = renderDinoCards(filtered);
    };

    if (search) search.addEventListener('input', updateList);
    if (era) era.addEventListener('change', updateList);
    if (region) region.addEventListener('change', updateList);
    if (group) group.addEventListener('change', updateList);
    if (sort) sort.addEventListener('change', updateList);

    // Timeline clicks
    document.querySelectorAll('.timeline-era').forEach(el => {
        el.addEventListener('click', () => {
            const eraVal = el.getAttribute('data-era');
            era.value = eraVal;
            // Update active state visually immediately for better UX
            document.querySelectorAll('.timeline-era').forEach(t => t.classList.remove('active'));
            el.classList.add('active');
            updateList();
        });
    });

    // Region map clicks
    document.querySelectorAll('.timeline-region').forEach(el => {
        el.addEventListener('click', () => {
            const regionVal = el.getAttribute('data-region');
            region.value = regionVal;
            // Update active state visually immediately for better UX
            document.querySelectorAll('.timeline-region').forEach(t => t.classList.remove('active'));
            el.classList.add('active');
            updateList();
        });
    });

    // Group filter clicks
    document.querySelectorAll('.timeline-group').forEach(el => {
        el.addEventListener('click', () => {
            const groupVal = el.getAttribute('data-group');
            group.value = groupVal;
            document.querySelectorAll('.timeline-group').forEach(t => t.classList.remove('active'));
            el.classList.add('active');
            updateList();
        });
    });

    // Accordion Toggle logic
    const accordionToggle = document.getElementById('filter-accordion-toggle');
    const accordionContent = document.getElementById('filter-accordion-content');
    const accordionLabel = document.getElementById('accordion-label');
    const accordionIcon = document.getElementById('accordion-icon');

    if (accordionToggle && accordionContent) {
        accordionToggle.addEventListener('click', () => {
            const isHidden = accordionContent.style.display === 'none';
            accordionContent.style.display = isHidden ? 'block' : 'none';
            accordionLabel.innerText = isHidden ? 'フィルタを閉じる' : 'フィルタを展開';
            accordionIcon.innerText = isHidden ? '[ - ]' : '[ + ]';
            accordionToggle.style.borderColor = isHidden ? 'var(--primary-neon)' : 'var(--panel-border)';
        });
    }

    // Run once on load to apply initial state
    setTimeout(updateList, 0);
}

function renderDetail(id) {
  const d = DINOSAURS.find(item => item.id === id);
  if (!d) return `<p>SPECIMEN NOT FOUND</p>`;

  const isCollected = APP_STATE.getCollection().includes(d.id);
  const cyberAsset = getCyberAsset(d.id);

  return `
    <article class="detail-layout">
        <div class="detail-visual-column">
            <div class="detail-img-viewer hud-panel" style="margin-bottom: 30px;">
                <div class="hud-corner top-left"></div>
                <div class="hud-corner bottom-right"></div>
                <div class="scan-line-ani"></div>
                <img src="${d.image}" alt="${d.name}" fetchpriority="high" decoding="async">
                <div style="position: absolute; bottom: 10px; right: 10px; font-family: var(--font-mono); font-size: 10px; color: var(--primary-neon);">
                    IMG_SEC_ENCRYPTED: ${d.id.toUpperCase()}
                </div>
            </div>

            <!-- SIZE COMPARISON AREA -->
            ${CYBER_ASSETS[d.id] ? `
            <section class="size-comparison-panel hud-panel" style="margin-top: 40px;">
                <h4 style="color: var(--primary-neon); margin-bottom: 20px; position: relative; z-index: 10;">// 視覚的個体比較スケール</h4>
                <div class="comparison-stage">
                    ${renderSizeComparison(d)}
                </div>
            </section>
            ` : ''}
        </div>

        <div class="detail-data">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <h1 style="font-size: 42px; margin-bottom: 5px;">${d.name}</h1>
                    <p style="font-family: var(--font-mono); color: var(--primary-neon); margin-bottom: 20px;">[ ${d.scientificName} ]</p>
                </div>
                <button class="save-btn ${isCollected ? 'saved' : ''}" onclick="handleToggleCollection('${d.id}')" aria-label="図鑑に保存">
                    ${isCollected ? '✓ 観測データ保存済み' : '+ 観測データに保存'}
                </button>
            </div>
            <section class="hud-panel" style="margin-bottom: 30px;">
                <p style="line-height: 1.8; font-size: 14px;">${d.description}</p>
            </section>

            <div class="spec-panel">
                <div class="spec-item"><span class="spec-label">生息年代</span><br>${d.era}</div>
                <div class="spec-item"><span class="spec-label">出現地域</span><br>${d.region}</div>
                <div class="spec-item"><span class="spec-label">全長</span><br>${d.length}</div>
                <div class="spec-item"><span class="spec-label">推定体重</span><br>${d.weight}</div>
            </div>

            <div class="trait-bar-wrap" style="margin-top: 30px;">
                <h4 style="border-bottom: 1px solid var(--panel-border); padding-bottom: 10px;">生物学的特性解析</h4>
                ${d.bioTraits.map(t => `
                    <div class="trait-row">
                        <div class="trait-label-row">
                            <span class="trait-name">${t.trait}</span>
                            <span class="trait-val">${t.value}</span>
                        </div>
                        <div style="font-size: 13px; color: var(--text-dim); border-left: 2px solid var(--primary-neon); padding-left: 10px;">
                            ${t.detail}
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Dynamic FAQ Section for GEO -->
            <div class="geo-faq-section" style="margin-top: 30px;">
                <h4 style="color: var(--primary-neon); margin-bottom: 15px;">よくある質問と回答 (FAQ)</h4>
                ${generateDynamicFAQs(d).map((faq, idx) => `
                    <details class="faq-item hud-panel" ${idx === 0 ? 'open' : ''}>
                        <summary class="faq-summary">${faq.q}</summary>
                        <div class="faq-content">
                            ${faq.a}
                        </div>
                    </details>
                `).join('')}
            </div>
            
            <div style="margin-top: 40px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--panel-border); padding-top: 20px;">
                <a href="#dictionary" class="nav-link" aria-label="アーカイブ一覧に戻る">[ アーカイブに戻る ]</a>
                ${renderFeedbackUI('detail', d.id)}
            </div>

            <!-- Related Specimens Section -->
            ${renderRelatedSection(d)}
        </div>
    </article>
  `;
}

function findRelatedDinosaurs(currentDino, limit = 4) {
    const eras = ["白亜紀", "ジュラ紀", "三畳紀", "古生代"];
    const currentEraBase = eras.find(e => currentDino.era.includes(e));

    const related = DINOSAURS.filter(d => {
        if (d.id === currentDino.id) return false;
        
        // Match by same group, era base (e.g., both are Cretaceous) or same region
        const matchesGroup = d.group === currentDino.group;
        const matchesEra = currentEraBase && d.era.includes(currentEraBase);
        const matchesRegion = d.region === currentDino.region;
        
        return matchesGroup || matchesEra || matchesRegion;
    });

    // Shuffle and pick
    return related
        .sort(() => 0.5 - Math.random())
        .slice(0, limit);
}

function renderRelatedSection(currentDino) {
    const related = findRelatedDinosaurs(currentDino);
    if (related.length === 0) return '';

    return `
        <section class="related-specimens">
            <h3 class="related-title">
                関連する標本データ (時代/地域に基づく選出)
            </h3>
            <div class="related-grid">
                ${related.map(d => `
                    <div class="related-card hud-panel" onclick="location.hash='#dictionary/${d.id}'">
                        <div class="related-img-wrap" style="height: 220px;">
                            <img src="${d.image}" alt="${d.name}" loading="lazy" decoding="async" width="150" height="150">
                        </div>
                        <h4 class="related-name">${d.name}</h4>
                        <div class="related-meta">${d.era} / ${d.region}</div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderGlossary() {
    return `
        <section class="page-header">
            <h1 class="page-title">用語集</h1>
            <p class="page-subtitle">古生物学データベース ＆ 用語定義</p>
        </section>

        <div class="glossary-list">
            ${GLOSSARY.map(item => `
                <article class="glossary-item hud-panel" id="term-${item.id}" style="margin-bottom: 20px;">
                    <h3 style="color: var(--primary-neon); margin-bottom: 10px;">
                        <dfn>${item.term}</dfn>
                    </h3>
                    <p style="font-size: 14px; line-height: 1.6; color: var(--text-main);">
                        ${item.def}
                    </p>
                </article>
            `).join('')}
        </div>

        <div style="margin-top: 40px; text-align: right;">
            ${renderFeedbackUI('glossary', 'main')}
        </div>
    `;
}

function renderFeedbackUI(context, id) {
    return `
        <div class="feedback-container" id="feedback-${context}">
            <span style="font-size: 11px; color: var(--text-dim); margin-right: 15px; font-family: var(--font-mono);">
                期待したデータは得られましたか？
            </span>
            <button class="feedback-btn" onclick="handleFeedback('${context}', true)" aria-label="はい">YES</button>
            <button class="feedback-btn" onclick="handleFeedback('${context}', false)" aria-label="いいえ">NO</button>
            <div class="feedback-msg" id="msg-${context}"></div>
        </div>
    `;
}

window.handleFeedback = (context, isPositive) => {
    const msgEl = document.getElementById(`msg-${context}`);
    if (msgEl) {
        msgEl.innerText = isPositive ? "> フィードバック受理: 期待値との完全な同期を確認。報告に感謝します。" : "> フィードバック受理: 解析精度の再調整を要求中。報告に感謝します。";
        msgEl.style.opacity = '1';
        setTimeout(() => {
            msgEl.style.opacity = '0';
        }, 3000);
    }
};


function renderVsSim() {
  return `
    <section class="page-header">
        <h2 class="page-title">恐竜バトルＳＩＭ</h2>
        <p class="page-subtitle">仮想標本間相互作用解析システム</p>
    </section>

    <div class="vs-layout" id="vs-simulation-area">
        <div class="vs-box hud-panel" id="slot-1" onclick="openSpecimenPicker(1)">
            <p id="slot-1-text">標本Ａを選択</p>
        </div>
        <div class="vs-divider">VS</div>
        <div class="vs-box hud-panel" id="slot-2" onclick="openSpecimenPicker(2)">
            <p id="slot-2-text">標本Ｂを選択</p>
        </div>
    </div>

    <!-- NEW: Visual Arena (initially hidden) -->
    <div id="visual-arena-container" style="display: none; margin-top: 30px;">
        <!-- Battle Arena visual removed per user request -->
        
        <!-- NEW: Stat Comparison Chart -->
        <div id="stat-comparison-chart" class="hud-panel" style="margin-top: 20px; padding: 20px;">
            <h4 style="color: var(--secondary-neon); margin-bottom: 15px;">生物学的スペック比較</h4>
            <div id="stats-bars-container"></div>
        </div>
    </div>

    <div id="sim-action-container" style="text-align: center; margin-top: 30px; display: none;">
        <button class="nav-link active" style="padding: 15px 40px; cursor: pointer;" onclick="runSimulation()">解析を開始する</button>
    </div>

    <div id="sim-results-output" class="sim-results hud-panel" style="display: none;">
        <h3 style="color: var(--alert-neon); border-bottom: 1px solid var(--alert-neon); margin-bottom: 20px;">シミュレーション・ログ</h3>
        <div id="log-content"></div>
    </div>

    <!-- Modal for picker -->
    <div id="specimen-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:10000; padding: 100px;">
        <div class="hud-panel" style="max-width: 800px; margin: 0 auto; max-height: 80vh; overflow-y: auto;">
            <h3>標本の選択</h3>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 20px;">
                ${DINOSAURS.map(d => `
                    <div style="padding: 10px; border: 1px solid var(--panel-border); cursor: pointer; text-align: center;" onclick="selectSpecimen('${d.id}')">
                        <img src="${d.image}" style="width: 50px; height: 50px; object-fit: cover;"><br>
                        <span style="font-size: 10px;">${d.name}</span>
                    </div>
                `).join('')}
            </div>
            <button onclick="closeSpecimenPicker()" style="margin-top: 20px; background: none; border: 1px solid white; color: white; padding: 5px 10px; cursor:pointer;">キャンセル</button>
        </div>
    </div>
  `;
}

let activeSlot = null;
let selection = { 1: null, 2: null };

window.openSpecimenPicker = (slot) => {
    activeSlot = slot;
    document.getElementById('specimen-modal').style.display = 'block';
};

window.closeSpecimenPicker = () => {
    document.getElementById('specimen-modal').style.display = 'none';
};

window.selectSpecimen = (id) => {
    const d = DINOSAURS.find(item => item.id === id);
    selection[activeSlot] = d;
    
    const slotEl = document.getElementById(`slot-${activeSlot}`);
    slotEl.classList.add('occupied');
    slotEl.innerHTML = `
        <img src="${d.image}" style="max-width: 80%; max-height: 80%; object-fit: contain;">
        <p style="margin-top: 10px; color: var(--primary-neon);">${d.name}</p>
    `;
    
    closeSpecimenPicker();
    
    if (selection[1] && selection[2]) {
        document.getElementById('sim-action-container').style.display = 'block';
    }
};

window.runSimulation = () => {
    const output = document.getElementById('sim-results-output');
    const log = document.getElementById('log-content');
    const arena = document.getElementById('visual-arena-container');
    const actionBtn = document.getElementById('sim-action-container');
    
    actionBtn.style.display = 'none';
    arena.style.display = 'block';
    output.style.display = 'block';
    log.innerHTML = "";
    
    const d1 = selection[1];
    const d2 = selection[2];

    // Render Stats Chart
    renderStatComparison(d1, d2);
    
    const messages = [
        `> 標本Ａ (${d1.name}) とのニューラル接続を確立中...`,
        `> 標本Ｂ (${d2.name}) とのニューラル接続を確立中...`,
        `> 生物学的特性を解析中...`,
        `> [ログ] ${d1.name}: ${d1.bioTraits[0].trait} / ${d1.bioTraits[0].value}`,
        `> [ログ] ${d2.name}: ${d2.bioTraits[0].trait} / ${d2.bioTraits[0].value}`,
        `> 相互作用変数を計算中 (地形、距離、行動パターンの照合)...`,
        `> -------------------------------------------------------------`,
        `> 最終解析結果: ${generateBattleOutcome(d1, d2)}`,
        `> -------------------------------------------------------------`,
        `> システムステータス: 解析完了。`
    ];
    
    let i = 0;
    function addLog() {
        if (i < messages.length) {
            const p = document.createElement('p');
            p.className = 'log-entry';
            p.innerText = messages[i];
            log.appendChild(p);
            i++;
            setTimeout(addLog, 800);
            output.scrollTop = output.scrollHeight;
        }
    }
    addLog();
};

function renderStatComparison(d1, d2) {
    const container = document.getElementById('stats-bars-container');
    const stats = [
        { label: '攻撃力 (ATK)', val1: calculateStat(d1, 'atk'), val2: calculateStat(d2, 'atk') },
        { label: '防御力 (DEF)', val1: calculateStat(d1, 'def'), val2: calculateStat(d2, 'def') },
        { label: '機動力 (SPD)', val1: calculateStat(d1, 'spd'), val2: calculateStat(d2, 'spd') }
    ];

    container.innerHTML = stats.map((s, index) => `
        <div style="margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 4px; color: var(--text-dim);">
                <span>${index === 0 ? d1.name : ''}</span>
                <span style="font-family: var(--font-mono); color: var(--text-main);">${s.label}</span>
                <span>${index === 0 ? d2.name : ''}</span>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 40px 1fr; gap: 10px; align-items: center;">
                <div style="height: 6px; background: rgba(0,242,255,0.1); position: relative; border-radius: 3px; overflow: hidden;">
                    <div style="position: absolute; right: 0; height: 100%; width: ${s.val1}%; background: var(--primary-neon); box-shadow: 0 0 10px var(--primary-neon);"></div>
                </div>
                <div style="text-align: center; font-size: 10px; font-family: var(--font-mono); color: var(--secondary-neon);">${Math.round(s.val1)} : ${Math.round(s.val2)}</div>
                <div style="height: 6px; background: rgba(0,242,255,0.1); position: relative; border-radius: 3px; overflow: hidden;">
                    <div style="position: absolute; left: 0; height: 100%; width: ${s.val2}%; background: var(--secondary-neon); box-shadow: 0 0 10px var(--secondary-neon);"></div>
                </div>
            </div>
        </div>
    `).join('');
}

function calculateStat(d, type) {
    let base = 50;
    const traitScores = { "驚異的": 40, "絶大": 35, "最高水準": 30, "最高速": 30, "強靭": 25, "高い": 20, "優秀": 15 };
    const traitVal = d.bioTraits[0].value;
    
    if (type === 'atk') {
        base = d.diet.includes("肉食") ? 60 : 30;
        base += (traitScores[traitVal] || 10);
    } else if (type === 'def') {
        base = parseFloat(d.weight) > 5 ? 60 : 30;
        if (d.name.includes("アンキロ") || d.name.includes("トリケラ")) base += 30;
    } else if (type === 'spd') {
        base = parseFloat(d.length) < 5 ? 70 : 40;
        if (traitVal === "最高速") base += 20;
    }
    
    return Math.min(100, Math.max(10, base));
}

function calculateCombatPower(d) {
    const traitScores = {
        "驚異的": 10, "絶大": 9, "最高水準": 8, "最高速": 8, "強靭": 7, "高い": 6, 
        "優秀": 5, "中程度": 3, "低い": 1, "特異的": 4, "特徴的": 4
    };

    let score = 0;
    d.bioTraits.forEach(t => {
        score += traitScores[t.value] || 5;
    });

    // Physical factor: size / weight
    const length = parseFloat(d.length) || 1;
    const weight = parseFloat(d.weight) || 1;
    score += (length * 0.5) + (Math.log10(weight * 1000) * 2);

    // Diet factor
    if (d.diet.includes("肉食")) score += 10;
    if (d.diet.includes("雑食")) score += 5;

    return Math.round(score);
}

function generateBattleOutcome(d1, d2) {
    const p1 = calculateCombatPower(d1);
    const p2 = calculateCombatPower(d2);
    
    if (d1.id === d2.id) return "同一スペック標本間の干渉を確認。縄張り争いに発展するが決定打を欠き、領域の再定義により沈静化する。 [判定: 引分]";
    
    const diff = p1 - p2;
    const winner = diff > 0 ? d1 : d2;
    const loser = diff > 0 ? d2 : d1;
    const absDiff = Math.abs(diff);

    let log = "";
    if (absDiff > 15) {
        log = `${winner.name}が圧倒的なスペック差で${loser.name}を圧倒。${winner.bioTraits[0].trait}による一撃が急所を貫通、戦闘能力を完全に喪失させた。 [判定: 圧倒的勝利]`;
    } else if (absDiff > 5) {
        log = `激しい相互干渉の末、${winner.name}が「${winner.bioTraits[0].trait}」を戦略的に活用し、${loser.name}を制圧。${loser.name}は戦域からの離脱を余儀なくされた。 [判定: 戦術的勝利]`;
    } else {
        log = `互角の攻防が展開されたが、最終局面で${winner.name}の機動力が${loser.name}の死角を突く。僅差で${winner.name}が戦闘優位を確保した。 [判定: 薄氷の勝利]`;
    }

    return `【勝者: ${winner.name}】<br>${log}`;
}


function attachVsSimEvents() {
    // Reset state on entry
    selection = { 1: null, 2: null };
}

// Start the APP
function renderMyCollection() {
    const collectedIds = APP_STATE.getCollection();
    const collectedDinos = DINOSAURS.filter(d => collectedIds.includes(d.id));
    const progress = Math.round((collectedIds.length / DINOSAURS.length) * 100);

    return `
        <section class="page-header">
            <h2 class="page-title">マイ・アーカイブ</h2>
            <p class="page-subtitle">観測済み標本データベース</p>
        </section>

        <div class="hud-panel" style="margin-bottom: 40px; border-color: var(--secondary-neon);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-family: var(--font-mono); font-size: 12px;">
                <span>アーカイブ同期進捗</span>
                <span>${collectedIds.length} / ${DINOSAURS.length} (${progress}%)</span>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar-fill" style="width: ${progress}%"></div>
            </div>
        </div>

        ${collectedDinos.length > 0 ? `
            <div class="dino-grid">
                ${renderDinoCards(collectedDinos)}
            </div>
        ` : `
            <div class="empty-state hud-panel" style="text-align: center; padding: 60px;">
                <p style="color: var(--text-dim); margin-bottom: 20px;">観測データがありません。アーカイブから標本を選択して保存してください。</p>
                <a href="#dictionary" class="nav-link" style="display: inline-block;">[ アーカイブへ移動 ]</a>
            </div>
        `}
    `;
}

function renderSizeComparison(d) {
    const assetPath = getCyberAsset(d);
    // 1. Get Metadata with safe
    const meta = SPECIMEN_METADATA[d.id] || { 
        bottomGap: 0, 
        realHeight: 1.7,
        contentHeightPx: 1024, 
        sourceRes: 1024 
    };
    
    // Physical stats
    const realH = meta.realHeight || (parseFloat(d.length) * 0.35);
    const realL = meta.realLength || parseFloat(d.length);
    const ref = REFERENCE_ASSETS.HUMAN;

    // 2. Dynamic Scaling: Adaptive fit for both height and width
    const zoom = meta.zoom || 1.0;
    let pxPerMeter = Math.min(HUD_CONFIG.SAFE_ZONE_H / meta.realHeight, HUD_CONFIG.SAFE_ZONE_W / meta.realLength) * zoom;
    
    // If the dinosaur is smaller than a human, ensure the human is displayed prominently as the reference
    if (realH < ref.realHeight) {
        const humanTargetH = HUD_CONFIG.SAFE_ZONE_H * 0.85; // 85% of panel height for human
        pxPerMeter = Math.min(pxPerMeter, humanTargetH / ref.realHeight);
    }
    
    // Dino Scaling
    const dinoScale = (pxPerMeter * realH) / meta.contentHeightPx;
    const dinoTotalH = meta.sourceRes * dinoScale;
    const dinoBottomOffset = meta.bottomGap * dinoScale;

    // Human Reference Relative Scaling
    const refTargetH = ref.realHeight * pxPerMeter;
    const refScale = refTargetH / ref.contentHeightPx;
    const refTotalH = ref.sourceRes * refScale;
    const refBottomOffset = ref.bottomGap * refScale;

    // Positioning from metadata or defaults
    const dinoLeft = meta.dinoLeft || '15%';
    const refRight = meta.refRight || '15%';

    // Containers are restored to baseline (Scientific Baseline)
    return `
        <div class="dino-vis" style="position: absolute; left: ${dinoLeft}; bottom: ${HUD_CONFIG.BASELINE_PX}px; height: ${HUD_CONFIG.SAFE_ZONE_H}px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; pointer-events: none; overflow: visible;">
            <img src="./images/cyber/${d.id}.png" alt="${d.name}" class="cyber-hud-specimen" 
                 style="height: ${dinoTotalH}px; width: auto; margin-bottom: -${dinoBottomOffset}px; flex-shrink: 0; mix-blend-mode: screen !important;">
            <div class="vis-tag dino-tag" style="white-space: nowrap; position: absolute; bottom: -45px;">${d.name} / ${d.length}</div>
        </div>
        <div class="ref-vis" style="position: absolute; right: ${refRight}; bottom: ${HUD_CONFIG.BASELINE_PX}px; height: ${HUD_CONFIG.SAFE_ZONE_H}px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; pointer-events: none; overflow: visible;">
            <img src="./images/cyber/human_front.png" alt="HUMAN" class="cyber-hud-specimen" 
                 style="height: ${refTotalH}px; width: auto; margin-bottom: -${refBottomOffset}px; flex-shrink: 0; mix-blend-mode: screen !important;">
            <div class="vis-tag ref-tag" style="white-space: nowrap; position: absolute; bottom: -45px;">人間 / 1.7m</div>
        </div>
    `;
}

window.handleToggleCollection = (id) => {
    const isSaved = APP_STATE.toggleCollection(id);
    const btn = document.querySelector('.save-btn');
    if (btn) {
        btn.classList.toggle('saved', isSaved);
        btn.innerHTML = isSaved ? '✓ 観測データ保存済み' : '+ 観測データに保存';
    }
};

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


init();
