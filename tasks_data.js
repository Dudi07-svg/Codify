/* ─── RESET & BASE ─────────────────────────────────────────── */
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
    --gold: #facc15;
    --gold-dark: #d97706;
    --bg: #050d1a;
    --bg2: #0b1528;
    --bg3: #111f38;
    --card: rgba(11,21,40,0.95);
    --border: rgba(250,204,21,0.2);
    --border-hover: rgba(250,204,21,0.5);
    --text: #e2e8f0;
    --muted: #94a3b8;
    --green: #22c55e;
    --red: #ef4444;
    --blue: #3b82f6;
    --purple: #8b5cf6;
}

body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    background-image:
        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(250,204,21,0.07) 0%, transparent 60%),
        radial-gradient(ellipse 60% 40% at 80% 80%, rgba(59,130,246,0.05) 0%, transparent 50%);
}

a { text-decoration: none; }

/* ─── SCROLLBAR ─────────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg2); }
::-webkit-scrollbar-thumb { background: rgba(250,204,21,0.3); border-radius: 3px; }

/* ─── TOAST BİLDİRİM ────────────────────────────────────────── */
#toast {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.toast-item {
    background: var(--bg3);
    border: 1px solid var(--border-hover);
    border-radius: 14px;
    padding: 14px 20px;
    min-width: 280px;
    max-width: 360px;
    animation: slideIn .3s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.4);
}

.toast-item.success { border-color: var(--green); }
.toast-item.error { border-color: var(--red); }
.toast-item.badge { border-color: var(--gold); background: rgba(250,204,21,0.08); }

@keyframes slideIn {
    from { transform: translateX(120%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeOut {
    to { opacity: 0; transform: translateX(120%); }
}

/* ─── DÖKME BUTONLAR ─────────────────────────────────────────── */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 14px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all .2s;
}

.btn-gold {
    background: var(--gold);
    color: #050d1a;
}
.btn-gold:hover { background: #f59e0b; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(250,204,21,0.3); }

.btn-outline {
    background: transparent;
    border: 1.5px solid var(--border-hover);
    color: var(--gold);
}
.btn-outline:hover { background: rgba(250,204,21,0.08); transform: translateY(-2px); }

.btn-ghost {
    background: rgba(255,255,255,0.05);
    color: var(--text);
    border: 1px solid rgba(255,255,255,0.1);
}
.btn-ghost:hover { background: rgba(255,255,255,0.1); }

/* ─── NAVBAR ─────────────────────────────────────────────────── */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 60px;
    border-bottom: 1px solid var(--border);
    background: rgba(5,13,26,0.9);
    backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar .brand {
    display: flex;
    align-items: center;
    gap: 12px;
}

.main-logo { height: 42px; object-fit: contain; }

.navbar nav {
    display: flex;
    gap: 32px;
}

.navbar nav a {
    color: var(--muted);
    font-size: 15px;
    font-weight: 500;
    transition: color .2s;
    position: relative;
}

.navbar nav a:hover { color: var(--gold); }

.navbar nav a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gold);
    transition: width .2s;
}

.navbar nav a:hover::after { width: 100%; }

.nav-buttons { display: flex; gap: 12px; }

/* ─── HERO ───────────────────────────────────────────────────── */
.hero {
    text-align: center;
    padding: 100px 40px 80px;
    max-width: 900px;
    margin: 0 auto;
}

.hero-badge {
    display: inline-block;
    background: rgba(250,204,21,0.1);
    border: 1px solid var(--border-hover);
    color: var(--gold);
    padding: 6px 18px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 30px;
    letter-spacing: .5px;
}

.hero h1 {
    font-size: 72px;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 24px;
    letter-spacing: -2px;
}

.hero h1 span {
    background: linear-gradient(135deg, var(--gold), #f59e0b, #fb923c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero p {
    font-size: 20px;
    color: var(--muted);
    margin-bottom: 12px;
    line-height: 1.6;
}

.hero .tagline {
    font-size: 16px;
    color: var(--gold);
    margin-bottom: 40px;
    font-weight: 600;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

/* ─── STATS BAR ─────────────────────────────────────────────── */
.stats-bar {
    display: flex;
    justify-content: center;
    gap: 60px;
    padding: 40px;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: rgba(11,21,40,0.5);
    margin: 0 0 80px;
}

.stat-item {
    text-align: center;
}

.stat-item .num {
    font-size: 36px;
    font-weight: 800;
    color: var(--gold);
}

.stat-item .label {
    font-size: 13px;
    color: var(--muted);
    margin-top: 4px;
}

/* ─── FEATURES ───────────────────────────────────────────────── */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
    padding: 0 60px 80px;
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 30px;
    transition: all .3s;
}

.feature-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.feature-icon {
    width: 56px;
    height: 56px;
    background: rgba(250,204,21,0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    margin-bottom: 20px;
}

.feature-card h3 {
    font-size: 18px;
    color: white;
    margin-bottom: 10px;
}

.feature-card p {
    color: var(--muted);
    font-size: 14px;
    line-height: 1.7;
}

/* ─── LANGUAGES SECTION ─────────────────────────────────────── */
.languages-section {
    padding: 0 60px 80px;
    max-width: 1200px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 12px;
}

.section-header p {
    color: var(--muted);
    font-size: 16px;
}

.lang-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.lang-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 30px 20px;
    text-align: center;
    transition: all .3s;
    cursor: pointer;
}

.lang-card:hover {
    border-color: var(--gold);
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(250,204,21,0.1);
}

.lang-card .lang-icon { font-size: 48px; margin-bottom: 14px; }
.lang-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 6px; }
.lang-card p { color: var(--muted); font-size: 13px; }

/* ─── LEVELS SECTION ─────────────────────────────────────────── */
.levels-section {
    padding: 0 60px 80px;
    max-width: 1200px;
    margin: 0 auto;
}

.levels-row {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
}

.level-pill {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 20px 28px;
    text-align: center;
    min-width: 120px;
    transition: all .2s;
}

.level-pill:hover {
    border-color: var(--gold);
    transform: translateY(-3px);
}

.level-pill .lnum {
    font-size: 26px;
    font-weight: 800;
    color: var(--gold);
}

.level-pill .lxp {
    font-size: 12px;
    color: var(--muted);
    margin-top: 4px;
}

/* ─── FOOTER ─────────────────────────────────────────────────── */
footer {
    border-top: 1px solid var(--border);
    padding: 40px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--muted);
    font-size: 14px;
}

footer .brand-name {
    color: var(--gold);
    font-weight: 700;
    font-size: 18px;
}

/* ─── AUTH ───────────────────────────────────────────────────── */
.auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
}

.auth-box {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 28px;
    padding: 50px 44px;
    width: 100%;
    max-width: 440px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.4);
}

.auth-box .logo-wrap {
    text-align: center;
    margin-bottom: 30px;
}

.auth-box img { height: 64px; object-fit: contain; }

.auth-box h1 {
    font-size: 30px;
    font-weight: 800;
    color: var(--gold);
    margin-bottom: 8px;
}

.auth-box .subtitle {
    color: var(--muted);
    font-size: 14px;
    margin-bottom: 32px;
    line-height: 1.6;
}

.input-group {
    margin-bottom: 16px;
}

.input-group label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--muted);
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: .5px;
}

.input-group input {
    width: 100%;
    padding: 14px 18px;
    background: rgba(5,13,26,0.8);
    border: 1.5px solid rgba(250,204,21,0.15);
    border-radius: 14px;
    color: white;
    font-size: 15px;
    outline: none;
    transition: border-color .2s;
}

.input-group input:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(250,204,21,0.08);
}

.auth-box .btn-gold {
    width: 100%;
    justify-content: center;
    padding: 15px;
    font-size: 16px;
    margin-top: 8px;
    border-radius: 16px;
}

.auth-msg {
    text-align: center;
    font-size: 14px;
    min-height: 22px;
    margin-top: 14px;
    white-space: pre-wrap;
    line-height: 1.6;
}

.auth-footer {
    text-align: center;
    margin-top: 24px;
    font-size: 14px;
    color: var(--muted);
}

.auth-footer a { color: var(--gold); font-weight: 600; }

/* ─── DASHBOARD ─────────────────────────────────────────────── */
.dash-layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 260px;
    background: var(--card);
    border-right: 1px solid var(--border);
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.sidebar-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
    padding: 0 8px;
}

.sidebar-logo img { height: 40px; }
.sidebar-logo span { font-weight: 800; font-size: 20px; color: var(--gold); }

.sidebar-user {
    background: rgba(250,204,21,0.07);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 18px;
    margin-bottom: 30px;
}

.sidebar-user .uname {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 4px;
}

.sidebar-user .ulevel {
    color: var(--gold);
    font-size: 13px;
    font-weight: 600;
}

.xp-bar-wrap {
    margin-top: 12px;
}

.xp-bar-label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--muted);
    margin-bottom: 6px;
}

.xp-bar {
    height: 8px;
    background: rgba(255,255,255,0.08);
    border-radius: 4px;
    overflow: hidden;
}

.xp-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--gold), #f59e0b);
    border-radius: 4px;
    transition: width .6s ease;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
}

.sidebar-nav a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 14px;
    color: var(--muted);
    font-size: 15px;
    font-weight: 500;
    transition: all .2s;
}

.sidebar-nav a:hover, .sidebar-nav a.active {
    background: rgba(250,204,21,0.08);
    color: var(--gold);
    border-left: 3px solid var(--gold);
}

.sidebar-nav .nav-icon { font-size: 18px; width: 24px; }

.sidebar-bottom {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid var(--border);
}

/* ─── MAIN CONTENT ─────────────────────────────────────────── */
.main-content {
    flex: 1;
    padding: 40px;
    overflow-y: auto;
}

.page-title {
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 8px;
}

.page-subtitle {
    color: var(--muted);
    font-size: 15px;
    margin-bottom: 36px;
}

/* ─── STATS CARDS ────────────────────────────────────────────── */
.stats-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 18px;
    margin-bottom: 36px;
}

.stat-box {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 24px;
    transition: all .2s;
}

.stat-box:hover {
    border-color: var(--border-hover);
    transform: translateY(-3px);
}

.stat-box .s-icon {
    font-size: 28px;
    margin-bottom: 12px;
}

.stat-box .s-val {
    font-size: 30px;
    font-weight: 800;
    color: var(--gold);
}

.stat-box .s-label {
    font-size: 13px;
    color: var(--muted);
    margin-top: 4px;
}

/* ─── DILLER ─────────────────────────────────────────────────── */
.courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-bottom: 36px;
}

.course-tile {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 28px;
    transition: all .3s;
    cursor: pointer;
}

.course-tile:hover {
    border-color: var(--gold);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.course-tile .c-icon {
    font-size: 44px;
    margin-bottom: 16px;
}

.course-tile h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
}

.course-tile p {
    color: var(--muted);
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.course-tile .btn-gold {
    width: 100%;
    justify-content: center;
}

/* ─── GÖREV SAYFASI ─────────────────────────────────────────── */
.task-layout {
    max-width: 860px;
    margin: 0 auto;
    padding: 40px 24px;
}

.task-header-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    flex-wrap: wrap;
    gap: 12px;
}

.task-lang-badge {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(250,204,21,0.1);
    border: 1px solid var(--border-hover);
    padding: 8px 18px;
    border-radius: 50px;
    font-weight: 700;
    color: var(--gold);
    font-size: 15px;
}

.task-progress-bar {
    flex: 1;
    max-width: 300px;
    height: 8px;
    background: rgba(255,255,255,0.08);
    border-radius: 4px;
    overflow: hidden;
}

.task-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--gold), #f59e0b);
    border-radius: 4px;
    transition: width .4s;
}

.task-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 32px;
    margin-bottom: 20px;
}

.task-card h2 {
    font-size: 22px;
    font-weight: 700;
    color: var(--gold);
    margin-bottom: 16px;
}

.task-card .task-desc {
    color: var(--text);
    font-size: 16px;
    line-height: 1.8;
    white-space: pre-wrap;
}

.task-xp-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(250,204,21,0.08);
    border: 1px solid var(--border);
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 13px;
    color: var(--gold);
    font-weight: 600;
    margin-top: 16px;
}

.editor-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 28px;
    margin-bottom: 20px;
}

.editor-card h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 6px;
}

.editor-card .hint-text {
    color: var(--muted);
    font-size: 13px;
    margin-bottom: 16px;
}

.code-textarea {
    width: 100%;
    min-height: 120px;
    background: #020812;
    border: 1.5px solid rgba(250,204,21,0.15);
    border-radius: 16px;
    color: #a8ff78;
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: 15px;
    padding: 18px;
    outline: none;
    resize: vertical;
    transition: border-color .2s;
    line-height: 1.6;
}

.code-textarea:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(250,204,21,0.06);
}

.task-actions {
    display: flex;
    gap: 12px;
    margin-top: 16px;
    flex-wrap: wrap;
}

.result-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 28px;
}

.result-card h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
}

.result-text {
    font-size: 15px;
    line-height: 1.8;
    white-space: pre-wrap;
    color: var(--muted);
}

.hint-box {
    background: rgba(251,191,36,0.06);
    border: 1px solid rgba(251,191,36,0.2);
    border-radius: 14px;
    padding: 14px 18px;
    font-size: 14px;
    color: #fbbf24;
    margin-top: 12px;
    display: none;
}

/* ─── PROFİL ─────────────────────────────────────────────────── */
.profile-layout {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 24px;
}

.profile-hero {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 28px;
    padding: 40px;
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 24px;
}

.profile-avatar {
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, rgba(250,204,21,0.2), rgba(250,204,21,0.05));
    border: 2px solid var(--border-hover);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    flex-shrink: 0;
}

.profile-info h2 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 4px;
}

.profile-info .level-badge {
    display: inline-block;
    background: rgba(250,204,21,0.1);
    border: 1px solid var(--border-hover);
    color: var(--gold);
    padding: 4px 14px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 14px;
}

.profile-xp-bar { width: 100%; max-width: 400px; }

.profile-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
}

.profile-stat {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 22px;
    text-align: center;
}

.profile-stat .ps-val {
    font-size: 28px;
    font-weight: 800;
    color: var(--gold);
}

.profile-stat .ps-label {
    font-size: 13px;
    color: var(--muted);
    margin-top: 4px;
}

.badges-section {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 28px;
}

.badges-section h2 {
    font-size: 20px;
    font-weight: 700;
    color: var(--gold);
    margin-bottom: 20px;
}

.badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 14px;
}

.badge-pill {
    background: rgba(250,204,21,0.06);
    border: 1px solid rgba(250,204,21,0.2);
    border-radius: 16px;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.badge-pill .bi { font-size: 28px; }
.badge-pill .bn { font-weight: 700; font-size: 14px; color: var(--gold); }
.badge-pill .bd { font-size: 12px; color: var(--muted); margin-top: 2px; }

/* ─── LEADERBOARD ────────────────────────────────────────────── */
.lb-layout {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 24px;
}

.lb-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 12px;
    transition: all .2s;
}

.lb-card:hover { border-color: var(--border-hover); transform: translateX(4px); }
.lb-card.me { border-color: var(--gold); background: rgba(250,204,21,0.05); }

.lb-rank {
    font-size: 22px;
    font-weight: 800;
    width: 40px;
    text-align: center;
}

.lb-name { font-weight: 700; font-size: 17px; flex: 1; }
.lb-xp { color: var(--gold); font-weight: 700; }
.lb-level { color: var(--muted); font-size: 13px; }

/* ─── DİL SEÇİCİ ─────────────────────────────────────────────── */
.lang-switcher {
    position: fixed;
    bottom: 24px;
    right: 24px;
    display: flex;
    gap: 8px;
    z-index: 500;
}

.lang-btn {
    background: var(--card);
    border: 1px solid var(--border);
    color: var(--muted);
    padding: 8px 14px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all .2s;
}

.lang-btn:hover, .lang-btn.active {
    background: rgba(250,204,21,0.1);
    border-color: var(--gold);
    color: var(--gold);
}

/* ─── BACK BUTTON ────────────────────────────────────────────── */
.back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: 14px;
    margin-bottom: 24px;
    transition: color .2s;
}

.back-link:hover { color: var(--gold); }

/* ─── LOADING ────────────────────────────────────────────────── */
.loading {
    text-align: center;
    padding: 60px;
    color: var(--muted);
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(250,204,21,0.1);
    border-top-color: var(--gold);
    border-radius: 50%;
    animation: spin .8s linear infinite;
    margin: 0 auto 16px;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ─── ROZET POPUP ────────────────────────────────────────────── */
.badge-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: var(--bg3);
    border: 2px solid var(--gold);
    border-radius: 28px;
    padding: 40px;
    text-align: center;
    z-index: 9999;
    min-width: 320px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(250,204,21,0.15);
    transition: transform .4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.badge-popup.show { transform: translate(-50%, -50%) scale(1); }

.badge-popup .bp-icon { font-size: 64px; margin-bottom: 16px; }
.badge-popup h2 { color: var(--gold); font-size: 22px; margin-bottom: 8px; }
.badge-popup p { color: var(--muted); font-size: 15px; margin-bottom: 24px; }

.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 9998;
    display: none;
}

.overlay.show { display: block; }

/* ─── RESPONSIVE ─────────────────────────────────────────────── */
@media (max-width: 768px) {
    .navbar { padding: 16px 20px; }
    .navbar nav { display: none; }
    .hero h1 { font-size: 44px; }
    .features { padding: 0 20px 60px; }
    .dash-layout { flex-direction: column; }
    .sidebar { width: 100%; height: auto; position: relative; }
    .stats-bar { gap: 30px; flex-wrap: wrap; padding: 30px 20px; }
    footer { flex-direction: column; gap: 12px; text-align: center; }
}
