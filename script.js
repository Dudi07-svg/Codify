<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codify — Profilim</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="profile-layout">

    <a href="dashboard.html" class="back-link">← Dashboard</a>

    <div class="page-title" data-i18n="profile_title">Profilim</div>
    <p class="page-subtitle">İlerlemeini ve başarılarını takip et.</p>

    <!-- PROFİL HERO -->
    <div class="profile-hero">
        <div class="profile-avatar">👤</div>
        <div class="profile-info">
            <h2 class="p-name">Kullanıcı</h2>
            <div class="level-badge p-level">Level 1</div>
            <div class="profile-xp-bar">
                <div class="xp-bar-label">
                    <span class="xp-current">0 XP</span>
                    <span class="xp-next">Level 2: 100 XP</span>
                </div>
                <div class="xp-bar" style="margin-top:6px">
                    <div class="xp-fill" style="width:0%"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- İSTATİSTİKLER -->
    <div class="profile-stats">
        <div class="profile-stat">
            <div class="ps-val p-xp">0</div>
            <div class="ps-label">⭐ Toplam XP</div>
        </div>
        <div class="profile-stat">
            <div class="ps-val p-tasks">0</div>
            <div class="ps-label">✅ Tamamlanan Görev</div>
        </div>
        <div class="profile-stat">
            <div class="ps-val p-badges">0</div>
            <div class="ps-label">🏅 Rozet</div>
        </div>
        <div class="profile-stat">
            <div class="ps-val p-pct">%0</div>
            <div class="ps-label">📊 Tamamlanma</div>
        </div>
    </div>

    <!-- ROZETLER -->
    <div class="badges-section">
        <h2 data-i18n="badges_title">🏆 Kazanılan Rozetler</h2>
        <div id="badgeList">
            <div class="loading"><div class="spinner"></div></div>
        </div>
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
