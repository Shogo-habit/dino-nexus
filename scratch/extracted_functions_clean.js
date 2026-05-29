"window.handleToggleCollection = (id) => {
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
          
<truncated 37812 bytes>