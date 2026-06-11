<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codify — Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="dash-layout">

    <!-- SIDEBAR -->
    <aside class="sidebar">
        <div class="sidebar-logo">
            <img src="images/logo.png" alt="Codify">
            <span>Codify</span>
        </div>

        <div class="sidebar-user">
            <div class="uname dash-username">Kullanıcı</div>
            <div class="ulevel dash-level">Level 1</div>
            <div class="xp-bar-wrap">
                <div class="xp-bar-label">
                    <span class="xp-current">0 XP</span>
                    <span class="xp-next">Level 2: 100 XP</span>
                </div>
                <div class="xp-bar"><div class="xp-fill" style="width:0%"></div></div>
            </div>
        </div>

        <nav class="sidebar-nav">
            <a href="dashboard.html" class="active">
                <span class="nav-icon">🏠</span> Ana Sayfa
            </a>
            <a href="lessons.html">
                <span class="nav-icon">📖</span> Dersler
            </a>
            <a href="leaderboard.html">
                <span class="nav-icon">🏆</span> <span data-i18n="go_leaderboard">Sıralama</span>
            </a>
            <a href="profile.html">
                <span class="nav-icon">👤</span> <span data-i18n="go_profile">Profilim</span>
            </a>
        </nav>

        <div class="sidebar-bottom">
            <a href="index.html" onclick="logout(); return false;" class="btn btn-ghost" style="width:100%;justify-content:center">
                ↪ <span data-i18n="logout">Çıkış Yap</span>
            </a>
        </div>
    </aside>

    <!-- MAIN -->
    <main class="main-content">

        <div class="page-title">
            Hoş Geldin, <span class="dash-username" style="color:var(--gold)">Kullanıcı</span> 👋
        </div>
        <p class="page-subtitle" data-i18n="today">Bugün yeni şeyler öğrenme zamanı!</p>

        <!-- İSTATİSTİKLER -->
        <div class="stats-row">
            <div class="stat-box">
                <div class="s-icon">⭐</div>
                <div class="s-val dash-xp">0</div>
                <div class="s-label">Toplam XP</div>
            </div>
            <div class="stat-box">
                <div class="s-icon">🏆</div>
                <div class="s-val dash-level">1</div>
                <div class="s-label">Mevcut Level</div>
            </div>
            <div class="stat-box">
                <div class="s-icon">✅</div>
                <div class="s-val dash-tasks">0</div>
                <div class="s-label">Tamamlanan Görev</div>
            </div>
            <div class="stat-box">
                <div class="s-icon">🌐</div>
                <div class="s-val">5</div>
                <div class="s-label">Aktif Dil</div>
            </div>
        </div>

        <!-- DİL SEÇ -->
        <h2 style="font-size:22px;font-weight:800;margin-bottom:20px" data-i18n="choose_lang">Dil Seç ve Başla</h2>

        <div class="courses-grid">
            <div class="course-tile" onclick="goToTasks('Python')">
                <div class="c-icon"><img src="images/python.png" alt="Python" style="width: 50px; height: 50px;"></div>
                <h3>Python</h3>
                <p>Programlamaya en iyi başlangıç noktası. Değişkenler, döngüler ve fonksiyonları öğren.</p>
                <button class="btn btn-gold">Başla →</button>
            </div>
            <div class="course-tile" onclick="goToTasks('HTML')">
                <div class="c-icon"><img src="images/html.png" alt="html" style="width: 50px; height: 50px;"></div>
                <h3>HTML</h3>
                <p>Web'in temelini öğren. Etiketler, bağlantılar ve sayfa yapısını keşfet.</p>
                <button class="btn btn-gold">Başla →</button>
            </div>
            <div class="course-tile" onclick="goToTasks('JavaScript')">
                <div class="c-icon"><img src="images/javascript.png" alt="javascript" style="width: 50px; height: 50px;"></div>
                <h3>JavaScript</h3>
                <p>İnteraktif web siteleri oluştur. Değişkenler, fonksiyonlar ve daha fazlası.</p>
                <button class="btn btn-gold">Başla →</button>
            </div>
            <div class="course-tile" onclick="goToTasks('C')">
                <div class="c-icon"><img src="images/c.png" alt="c" style="width: 50px; height: 50px;"></div>
                <h3>C Dili</h3>
                <p>Sistem programlamanın temeli. Pointer, dizi ve bellek yönetimini öğren.</p>
                <button class="btn btn-gold">Başla →</button>
            </div>
            <div class="course-tile" onclick="goToTasks('Java')">
                <div class="c-icon"><img src="images/java.png" alt="java" style="width: 50px; height: 50px;"></div>
                <h3>Java</h3>
                <p>Nesne yönelimli programlamayı öğren. Sınıflar, metodlar ve daha fazlası.</p>
                <button class="btn btn-gold">Başla →</button>
            </div>
        </div>

    </main>
</div>

<div class="lang-switcher">
    <button class="lang-btn active" data-lang="tr" onclick="setLang('tr')">TR</button>
    <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>
    <button class="lang-btn" data-lang="ar" onclick="setLang('ar')">AR</button>
</div>

<div id="toast"></div>
<script src="i18n.js"></script>
<script src="script.js"></script>
</body>
</html>
