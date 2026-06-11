import sqlite3

DATABASE_NAME = "codify.db"
conn = sqlite3.connect(DATABASE_NAME)
c = conn.cursor()

c.executescript("""
DROP TABLE IF EXISTS user_badges;
DROP TABLE IF EXISTS badges;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    xp INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    completed_tasks INTEGER DEFAULT 0
);

CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    expected_output TEXT NOT NULL,
    hint TEXT DEFAULT '',
    xp_reward INTEGER DEFAULT 20,
    language TEXT NOT NULL,
    level_required INTEGER DEFAULT 1
);

CREATE TABLE badges (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT DEFAULT '🏅',
    condition_type TEXT NOT NULL,
    condition_value INTEGER NOT NULL
);

CREATE TABLE user_badges (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    badge_id INTEGER NOT NULL,
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (badge_id) REFERENCES badges(id),
    UNIQUE(user_id, badge_id)
);
""")

tasks = [
    # ── PYTHON LEVEL 1 ──────────────────────────────────────────────────────
    ("Merhaba Dünya",
     'print() fonksiyonunu kullanarak ekrana tam olarak şunu yazdır:\nMerhaba Dünya',
     'print("Merhaba Dünya")',
     'print("...") fonksiyonunu kullan', 20, "Python", 1),

    ("Değişken ve Yazdırma",
     'isim adında bir değişken tanımlayıp değerini "Codify" yap, sonra print() ile yazdır.',
     'isim = "Codify"\nprint(isim)',
     'Önce değişkeni tanımla, sonra print(değişken) yaz', 30, "Python", 1),

    ("Kullanıcı Bilgisi",
     'ad = "Ali" ve yas = 21 değişkenlerini tanımla.\nSonra f-string ile şunu yazdır:\nMerhaba Ali, yaşın 21',
     'ad = "Ali"\nyas = 21\nprint(f"Merhaba {ad}, yaşın {yas}")',
     'f"Merhaba {ad}, yaşın {yas}" şeklinde kullan', 35, "Python", 1),

    ("Aritmetik İşlem",
     'a = 17 ve b = 5 tanımla.\na % b (mod) işleminin sonucunu yazdır.',
     'a = 17\nb = 5\nprint(a % b)',
     '% operatörü kalanı verir', 30, "Python", 1),

    ("Tip Dönüşümü",
     'x = "42" (string) değişkenini int tipine dönüştürüp\nsonucunu 8 ile çarp, yazdır.',
     'x = "42"\nprint(int(x) * 8)',
     'int() ile dönüştür, sonra * ile çarp', 40, "Python", 1),

    # ── PYTHON LEVEL 2 ──────────────────────────────────────────────────────
    ("Döngü ile Toplam",
     '1\'den 10\'a kadar (10 dahil) tüm sayıların toplamını hesaplayıp yazdır.\nrange() ve for döngüsü kullan.',
     'toplam = 0\nfor i in range(1, 11):\n    toplam += i\nprint(toplam)',
     'for i in range(1, 11): toplam += i', 50, "Python", 2),

    ("Liste Filtreleme",
     'sayilar = [3, 7, 2, 8, 5, 12, 1, 9] listesini tanımla.\nListe elemanlarından 5\'ten büyük olanları yazdır.',
     'sayilar = [3, 7, 2, 8, 5, 12, 1, 9]\nfor s in sayilar:\n    if s > 5:\n        print(s)',
     'for s in sayilar: if s > 5: print(s)', 55, "Python", 2),

    ("String Ters Çevirme",
     'metin = "Python" değişkenini tanımla.\nDilim (slicing) operatörü ile tersine çevirip yazdır.',
     'metin = "Python"\nprint(metin[::-1])',
     '[::-1] ile tersine çevir', 45, "Python", 2),

    ("Fonksiyon Tanımlama",
     'kare(sayi) adında bir fonksiyon yaz.\nFonksiyon aldığı sayının karesini döndürsün.\nkare(7) sonucunu yazdır.',
     'def kare(sayi):\n    return sayi ** 2\nprint(kare(7))',
     'def kare(sayi): return sayi ** 2', 60, "Python", 2),

    ("Sözlük İşlemi",
     'ogrenci = {"ad": "Ayse", "not": 88, "bolum": "Bilgisayar"} sözlüğünü tanımla.\nAnahtarları ve değerleri döngüyle yazdır.',
     'ogrenci = {"ad": "Ayse", "not": 88, "bolum": "Bilgisayar"}\nfor k, v in ogrenci.items():\n    print(k, ":", v)',
     '.items() ile anahtar-değer çiftlerini al', 55, "Python", 2),

    # ── PYTHON LEVEL 3 ──────────────────────────────────────────────────────
    ("Özyinelemeli Fonksiyon",
     'faktoriyel(n) adında özyinelemeli (recursive) fonksiyon yaz.\nfaktoriyel(6) sonucunu yazdır.',
     'def faktoriyel(n):\n    if n <= 1:\n        return 1\n    return n * faktoriyel(n - 1)\nprint(faktoriyel(6))',
     'Taban durum: if n <= 1: return 1', 75, "Python", 3),

    ("List Comprehension",
     '1\'den 20\'ye kadar (20 dahil) çift sayıların kareleri listesini\nlist comprehension ile oluşturup yazdır.',
     'print([x**2 for x in range(1, 21) if x % 2 == 0])',
     '[x**2 for x in range(1,21) if x%2==0]', 80, "Python", 3),

    ("Lambda ve Map",
     'lambda ile bir sayıyı 3 ile çarpan fonksiyon yaz.\nsayilar = [1, 2, 3, 4, 5] listesine map() uygulayıp yazdır.',
     'sayilar = [1, 2, 3, 4, 5]\nprint(list(map(lambda x: x * 3, sayilar)))',
     'map(lambda x: x*3, liste) kullan', 85, "Python", 3),

    # ── HTML LEVEL 1 ────────────────────────────────────────────────────────
    ("Temel HTML Sayfası",
     'Tam bir HTML5 sayfası yaz. Başlık "Codify" olsun,\nbody içinde h1 etiketi ile "Merhaba Web!" yazsın.',
     '<!DOCTYPE html>\n<html>\n<head><title>Codify</title></head>\n<body><h1>Merhaba Web!</h1></body>\n</html>',
     'DOCTYPE, html, head, title, body, h1 etiketlerini kullan', 35, "HTML", 1),

    ("Navigasyon Menüsü",
     'nav etiketi içinde ul/li kullanarak 3 linkli menü yaz:\nAna Sayfa (index.html), Hakkımızda (about.html), İletişim (contact.html)',
     '<nav>\n<ul>\n<li><a href="index.html">Ana Sayfa</a></li>\n<li><a href="about.html">Hakkımızda</a></li>\n<li><a href="contact.html">İletişim</a></li>\n</ul>\n</nav>',
     'nav > ul > li > a href="..." yapısı', 40, "HTML", 1),

    ("Tablo Oluşturma",
     'thead ve tbody içeren 3 sütunlu HTML tablosu yaz.\nSütunlar: Ad, Soyad, Yaş\n1 satır veri: Ali, Yılmaz, 22',
     '<table>\n<thead><tr><th>Ad</th><th>Soyad</th><th>Yaş</th></tr></thead>\n<tbody><tr><td>Ali</td><td>Yılmaz</td><td>22</td></tr></tbody>\n</table>',
     'table > thead > tr > th ve tbody > tr > td', 45, "HTML", 1),

    # ── HTML LEVEL 2 ────────────────────────────────────────────────────────
    ("Kayıt Formu",
     'Ad, Email ve Şifre alanları olan bir form yaz.\nHer alan için label kullan, required ekle, button type="submit" olsun.',
     '<form>\n<label>Ad:</label><input type="text" name="ad" required>\n<label>Email:</label><input type="email" name="email" required>\n<label>Şifre:</label><input type="password" name="sifre" required>\n<button type="submit">Kayıt Ol</button>\n</form>',
     'label, input type="text/email/password", required, button', 55, "HTML", 2),

    ("Semantik Yapı",
     'header, main, footer içeren semantik HTML yapısı yaz.\nHeader\'da h1 ile site adı, main\'de bir p, footer\'da copyright.',
     '<header><h1>Codify</h1></header>\n<main><p>Ana içerik buraya gelir.</p></main>\n<footer><p>© 2026 Codify</p></footer>',
     'header, main, footer semantik etiketlerini kullan', 50, "HTML", 2),

    ("Medya Kartı",
     'class="kart" olan bir div içinde:\n- img (src="foto.jpg", alt="Profil")\n- h2 ile isim\n- p ile açıklama\n- a href ile "Daha Fazla" linki yaz.',
     '<div class="kart">\n<img src="foto.jpg" alt="Profil">\n<h2>Ali Yılmaz</h2>\n<p>Bilgisayar Mühendisi</p>\n<a href="profil.html">Daha Fazla</a>\n</div>',
     'div.kart > img, h2, p, a yapısı', 55, "HTML", 2),

    # ── JAVASCRIPT LEVEL 1 ──────────────────────────────────────────────────
    ("Değişken ve Şablon",
     'let ile ad="Codify" ve versiyon=2 tanımla.\nTemplate literal kullanarak konsola şunu yazdır:\nCodify v2 - Kodla!',
     'let ad = "Codify";\nlet versiyon = 2;\nconsole.log(`${ad} v${versiyon} - Kodla!`);',
     'Backtick ile `${degisken}` kullan', 35, "JavaScript", 1),

    ("Fonksiyon ve Koşul",
     'not parametresi alan notDurumu(not) fonksiyonu yaz.\n90+ Pekiyi, 70+ İyi, 50+ Geçti, altı Kaldı dönsün.\nconsole.log(notDurumu(85)) yaz.',
     'function notDurumu(not) {\n    if (not >= 90) return "Pekiyi";\n    if (not >= 70) return "Iyii";\n    if (not >= 50) return "Gecti";\n    return "Kaldi";\n}\nconsole.log(notDurumu(85));',
     'if/else if zinciri kur, her koşulda return yaz', 50, "JavaScript", 1),

    ("Dizi İşlemi",
     'sayilar = [4, 9, 2, 7, 1, 5, 8, 3] dizisini tanımla.\nfilter() ile 5\'ten büyük olanları,\nmap() ile her birinin karesini al, konsola yazdır.',
     'let sayilar = [4, 9, 2, 7, 1, 5, 8, 3];\nconsole.log(sayilar.filter(x => x > 5).map(x => x * x));',
     'filter(x => x > 5).map(x => x*x) zincirle', 55, "JavaScript", 1),

    # ── JAVASCRIPT LEVEL 2 ──────────────────────────────────────────────────
    ("Nesne ve Metod",
     'marka, model, yil ve goster() metodu olan bir araba nesnesi yaz.\ngoster() "Toyota Corolla 2020" formatında konsola yazsın.',
     'let araba = {\n    marka: "Toyota",\n    model: "Corolla",\n    yil: 2020,\n    goster() {\n        console.log(`${this.marka} ${this.model} ${this.yil}`);\n    }\n};\naraba.goster();',
     'this.marka ile nesnenin kendi alanlarına eriş', 65, "JavaScript", 2),

    ("Async/Await Fetch",
     'async function kullanıcıGetir() yaz.\nhttps://jsonplaceholder.typicode.com/users/1 adresinden veri çek.\nkonsola user.name ve user.email yazdır.',
     'async function kullanicGetir() {\n    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");\n    const user = await res.json();\n    console.log(user.name);\n    console.log(user.email);\n}\nkullanicGetir();',
     'async/await ve fetch kullan, .json() ile parse et', 80, "JavaScript", 2),

    ("Reduce ile Toplam",
     'notlar = [85, 92, 78, 95, 88] dizisini tanımla.\nreduce() ile ortalamayı hesaplayıp konsola yazdır.',
     'let notlar = [85, 92, 78, 95, 88];\nlet ort = notlar.reduce((a, b) => a + b, 0) / notlar.length;\nconsole.log(ort);',
     'reduce((a,b) => a+b, 0) / length', 75, "JavaScript", 2),

    # ── C LEVEL 1 ───────────────────────────────────────────────────────────
    ("Değişken ve Printf",
     '#include <stdio.h> ekle.\nint yas=20, float gpa=3.75 tanımla.\nPrintf ile "Yas: 20, GPA: 3.75" formatında yazdır.',
     '#include <stdio.h>\nint main() {\n    int yas = 20;\n    float gpa = 3.75f;\n    printf("Yas: %d, GPA: %.2f\\n", yas, gpa);\n    return 0;\n}',
     '%d int için, %.2f float için', 40, "C", 1),

    ("For Döngüsü ile Toplam",
     '1\'den 100\'e kadar sayıların toplamını for döngüsüyle hesapla.\nprintf ile sonucu yazdır.',
     '#include <stdio.h>\nint main() {\n    int toplam = 0;\n    for (int i = 1; i <= 100; i++) {\n        toplam += i;\n    }\n    printf("Toplam: %d\\n", toplam);\n    return 0;\n}',
     'for(int i=1; i<=100; i++) toplam+=i', 50, "C", 1),

    ("Fonksiyon Yazma",
     'int bul_max(int a, int b) fonksiyonu yaz.\nİki sayıdan büyüğünü döndürsün.\nmain\'de bul_max(17, 34) sonucunu yazdır.',
     '#include <stdio.h>\nint bul_max(int a, int b) {\n    return (a > b) ? a : b;\n}\nint main() {\n    printf("%d\\n", bul_max(17, 34));\n    return 0;\n}',
     'Ternary operatör: (a>b) ? a : b', 55, "C", 1),

    # ── C LEVEL 2 ───────────────────────────────────────────────────────────
    ("Dizi Sıralama",
     'int arr[5] = {64,25,12,22,11} tanımla.\nBubble sort ile küçükten büyüğe sırala.\nSıralı diziyi yazdır.',
     '#include <stdio.h>\nint main() {\n    int arr[5] = {64,25,12,22,11};\n    for(int i=0;i<4;i++)\n        for(int j=0;j<4-i;j++)\n            if(arr[j]>arr[j+1]){int t=arr[j];arr[j]=arr[j+1];arr[j+1]=t;}\n    for(int i=0;i<5;i++) printf("%d ",arr[i]);\n    return 0;\n}',
     'İç içe for döngüsü, komşuları karşılaştır ve swap yap', 80, "C", 2),

    ("Pointer ile Swap",
     'swap(int *a, int *b) fonksiyonu yaz.\nPointer kullanarak iki değişkenin değerini yer değiştirsin.\nx=10, y=20 ile test et, sonuçları yazdır.',
     '#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x=10, y=20;\n    swap(&x, &y);\n    printf("x=%d, y=%d\\n", x, y);\n    return 0;\n}',
     'void swap(int *a, int *b) { int t=*a; *a=*b; *b=t; }', 85, "C", 2),

    ("Struct Tanımlama",
     'Ogrenci struct\'ı tanımla: char ad[50], int no, float gpa.\nBir öğrenci oluştur: "Ayse", 1234, 3.85\nBilgilerini printf ile yazdır.',
     '#include <stdio.h>\n#include <string.h>\ntypedef struct {\n    char ad[50];\n    int no;\n    float gpa;\n} Ogrenci;\nint main() {\n    Ogrenci ogr;\n    strcpy(ogr.ad, "Ayse");\n    ogr.no = 1234;\n    ogr.gpa = 3.85f;\n    printf("%s %d %.2f\\n", ogr.ad, ogr.no, ogr.gpa);\n    return 0;\n}',
     'typedef struct { ... } Ogrenci; ve strcpy ile string kopyala', 90, "C", 2),

    # ── C LEVEL 3 ───────────────────────────────────────────────────────────
    ("Bağlı Liste",
     'Node struct\'ı tanımla (int data, Node *next).\n3 node\'lu bağlı liste oluştur: 1->2->3->NULL\nTüm elemanları yazdır.',
     '#include <stdio.h>\n#include <stdlib.h>\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\nint main() {\n    Node *n1=(Node*)malloc(sizeof(Node)); n1->data=1;\n    Node *n2=(Node*)malloc(sizeof(Node)); n2->data=2;\n    Node *n3=(Node*)malloc(sizeof(Node)); n3->data=3;\n    n1->next=n2; n2->next=n3; n3->next=NULL;\n    Node *cur=n1;\n    while(cur!=NULL){printf("%d ",cur->data);cur=cur->next;}\n    return 0;\n}',
     'malloc ile bellek ayır, next pointer ile bağla', 110, "C", 3),

    # ── JAVA LEVEL 1 ────────────────────────────────────────────────────────
    ("Değişken ve Çıktı",
     'int yas=22, double gpa=3.92, String bolum="Bilgisayar" tanımla.\nSystem.out.printf ile "Yas: 22, GPA: 3.92, Bolum: Bilgisayar" yazdır.',
     'int yas = 22;\ndouble gpa = 3.92;\nString bolum = "Bilgisayar";\nSystem.out.printf("Yas: %d, GPA: %.2f, Bolum: %s%n", yas, gpa, bolum);',
     'printf("...%d...%.2f...%s%n", yas, gpa, bolum)', 40, "Java", 1),

    ("For Döngüsü Fibonacci",
     'İlk 10 Fibonacci sayısını for döngüsüyle hesaplayıp yazdır.\n(0, 1, 1, 2, 3, 5, 8, 13, 21, 34)',
     'int a=0, b=1;\nfor(int i=0; i<10; i++) {\n    System.out.print(a + " ");\n    int t=a+b; a=b; b=t;\n}',
     'int a=0,b=1; temp=a+b; a=b; b=temp döngüsü', 60, "Java", 1),

    ("String Metodları",
     'String metin = "  Java Programlama  " tanımla.\ntrim(), toUpperCase() uygula.\nSonra split(" ") ile kelimelere böl, her kelimeyi yazdır.',
     'String metin = "  Java Programlama  ";\nString temiz = metin.trim().toUpperCase();\nString[] kelimeler = temiz.split(" ");\nfor(String k : kelimeler) System.out.println(k);',
     '.trim().toUpperCase().split(" ") zincirle', 55, "Java", 1),

    # ── JAVA LEVEL 2 ────────────────────────────────────────────────────────
    ("Sınıf ve Nesne",
     'Banka hesabı sınıfı yaz: BankaHesabi\n- double bakiye alanı\n- para yatır (yatir) ve çek (cek) metodları\n- bakiyeyi yazdıran goster metodu\n100 yatır, 30 çek, bakiyeyi göster.',
     'class BankaHesabi {\n    double bakiye = 0;\n    void yatir(double m) { bakiye += m; }\n    void cek(double m) { if(m<=bakiye) bakiye-=m; }\n    void goster() { System.out.println("Bakiye: " + bakiye); }\n}\nBankaHesabi h = new BankaHesabi();\nh.yatir(100); h.cek(30); h.goster();',
     'class içinde field, metod, main\'de new ile nesne oluştur', 85, "Java", 2),

    ("ArrayList ve Sıralama",
     'ArrayList<Integer> ile 7 elemanlı liste oluştur.\nCollections.sort() ile sırala.\nEn büyük ve en küçük elemanı yazdır.',
     'import java.util.*;\nArrayList<Integer> liste = new ArrayList<>(Arrays.asList(5,2,8,1,9,3,7));\nCollections.sort(liste);\nSystem.out.println("Min: " + liste.get(0));\nSystem.out.println("Max: " + liste.get(liste.size()-1));',
     'Collections.sort, get(0) min, get(size-1) max', 80, "Java", 2),

    ("Kalıtım ve Override",
     'Hayvan sınıfı ve Kopek alt sınıfı yaz.\nHayvan\'da sesCikar() "..." yazdırsın.\nKopek\'te override edip "Hav hav!" yazdırsın.\nKopek nesnesi oluşturup sesCikar() çağır.',
     'class Hayvan { void sesCikar() { System.out.println("..."); } }\nclass Kopek extends Hayvan {\n    @Override\n    void sesCikar() { System.out.println("Hav hav!"); }\n}\nKopek k = new Kopek();\nk.sesCikar();',
     'extends ile kalıtım, @Override ile override et', 90, "Java", 2),

    # ── JAVA LEVEL 3 ────────────────────────────────────────────────────────
    ("Generic Metod",
     'T tipinde dizi alan generic bir max<T extends Comparable<T>>(T[] arr) metodu yaz.\nInteger dizisi {3,1,7,2,9} için maksimumu yazdır.',
     'public static <T extends Comparable<T>> T max(T[] arr) {\n    T m = arr[0];\n    for(T x : arr) if(x.compareTo(m)>0) m=x;\n    return m;\n}\nInteger[] arr = {3,1,7,2,9};\nSystem.out.println(max(arr));',
     '<T extends Comparable<T>> ve compareTo kullan', 110, "Java", 3),
]

c.executemany(
    "INSERT INTO tasks (title, description, expected_output, hint, xp_reward, language, level_required) VALUES (?,?,?,?,?,?,?)",
    tasks
)

badges = [
    ("İlk Adım", "İlk görevini tamamladın!", "🌱", "tasks", 1),
    ("Azimli Öğrenci", "5 görev tamamladın!", "📚", "tasks", 5),
    ("Kod Avcısı", "10 görev tamamladın!", "🎯", "tasks", 10),
    ("Kod Ustası", "20 görev tamamladın!", "⚡", "tasks", 20),
    ("Efsane Geliştirici", "30 görev tamamladın!", "👑", "tasks", 30),
    ("XP Toplayan", "100 XP kazandın!", "💰", "xp", 100),
    ("XP Ustası", "300 XP kazandın!", "💎", "xp", 300),
    ("XP Efsanesi", "600 XP kazandın!", "🔥", "xp", 600),
    ("XP Tanrısı", "1000 XP kazandın!", "⚡", "xp", 1000),
    ("Level 2", "Level 2'ye ulaştın!", "🚀", "level", 2),
    ("Level 3", "Level 3'e ulaştın!", "⭐", "level", 3),
    ("Level 4", "Level 4'e ulaştın!", "🌟", "level", 4),
    ("Level 5 — Final", "Maksimum seviyeye ulaştın!", "🏆", "level", 5),
]

c.executemany(
    "INSERT INTO badges (name, description, icon, condition_type, condition_value) VALUES (?,?,?,?,?)",
    badges
)

conn.commit()
conn.close()
print(f"✅ {len(tasks)} görev, {len(badges)} rozet eklendi!")
