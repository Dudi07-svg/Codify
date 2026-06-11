<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codify — Sıralama</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="lb-layout">

    <a href="dashboard.html" class="back-link">← Dashboard</a>

    <div class="page-title" data-i18n="lb_title">🏆 Sıralama Tablosu</div>
    <p class="page-subtitle" data-i18n="lb_sub">En çok XP kazanan öğrenciler</p>

    <div id="lbList">
        <div class="loading"><div class="spinner"></div><p>Yükleniyor...</p></div>
    </div>

    <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
        <a href="dashboard.html" class="btn btn-gold">🏠 Dashboard</a>
        <a href="profile.html" class="btn btn-outline">👤 Profilim</a>
    </div>

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
