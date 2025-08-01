# Js Case Example 3 Current Convert 2

Bu proje, gerçek zamanlı döviz kurları ile para birimi çevirme işlemi yapabilen modern bir web uygulamasıdır.

![Döviz Çevirici Ekran Görüntüsü](<img width="692" height="149" alt="image" src="https://github.com/user-attachments/assets/cc95f16f-bf0f-402d-969f-cb46b4e47b19" />
)

## Özellikler

- **Gerçek Zamanlı Döviz Kurları**: ExchangeRate API kullanarak güncel kurları çeker
- **Kullanıcı Dostu Arayüz**: Modern ve minimal tasarım
- **Para Birimi Çevirici**: Farklı para birimleri arasında anlık çevrim
- **Görsel Bayrak Simgeleri**: Her para birimi için görsel bayrak gösterimi
- **İki Yönlü Çeviri**: Para birimlerini karşılıklı değiştirme butonu
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Bootstrap Entegrasyonu**: Modern ve responsive arayüz
- **Anlık Hesaplama**: Tutar girişi sırasında otomatik hesaplama

## Desteklenen Para Birimleri

- 🇺🇸 **USD** (Amerikan Doları)
- 🇪🇺 **EUR** (Euro)
- 🇬🇧 **GBP** (İngiliz Sterlini)
- 🇯🇵 **JPY** (Japon Yeni)
- 🇹🇷 **TRY** (Türk Lirası)

## Görsel Tasarım

Uygulama minimalist ve kullanıcı dostu bir tasarıma sahiptir:

- **Merkezi Layout**: Tüm öğeler sayfanın merkezinde konumlandırılmıştır
- **Bayrak Görüntüleme**: Her para birimi seçiminde ilgili ülke bayrağı gösterilir
- **Değiştirme Butonu**: Para birimlerini tek tıkla değiştiren orta buton
- **Temiz Input Alanları**: Kullanıcı dostu input ve select alanları
- **Responsive Grid**: Bootstrap grid sistemi ile responsive tasarım

## Teknolojiler

- **HTML5** - Yapısal işaretleme
- **CSS3/LESS** - Stil ve tasarım
- **JavaScript ES6+** - İşlevsellik ve API entegrasyonu
- **jQuery** - DOM manipülasyonu ve event handling
- **Bootstrap 4** - Responsive framework
- **ExchangeRate API** - Döviz kuru verisi

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/Atarapa0/Js-case-example-3-current-convert-2.git
cd Js-case-example-3-current-convert-2
```

2. API anahtarını `assets/js/main.js` dosyasında güncelleyin:
```javascript
const apiKey = 'your_api_key_here';
```

3. LESS dosyalarını CSS'e derleyin (opsiyonel):
```bash
lessc assets/css/style.less assets/css/style.css
```

4. Projeyi bir web sunucusunda çalıştırın veya `index.html` dosyasını tarayıcıda açın.

## Dosya Yapısı

```
Js-case-example-3-current-convert-2/
├── assets/
│   ├── css/
│   │   ├── config/
│   │   │   ├── variables.less      # LESS değişkenleri
│   │   │   └── bootstrap/          # Bootstrap LESS dosyaları
│   │   ├── style.less              # Ana LESS dosyası
│   │   └── style.css               # Derlenmiş CSS
│   ├── js/
│   │   ├── main.js                 # API entegrasyonu
│   │   ├── change.js               # Çevirme işlemleri
│   │   └── bootstrap.min.js        # Bootstrap JS
│   ├── img/
│   │   ├── TRY.png                 # Türk Lirası bayrağı
│   │   ├── USD.png                 # ABD Doları bayrağı
│   │   ├── EUR.png                 # Euro bayrağı
│   │   ├── GBP.png                 # İngiliz Sterlini bayrağı
│   │   ├── JPY.png                 # Japon Yeni bayrağı
│   │   └── change.png              # Değiştirme ikonu
│   └── json/
│       └── veri.json               # Statik veri (yedek)
├── index.html                      # Ana sayfa
└── README.md                       # Bu dosya
```

## Kullanım Kılavuzu

### 1. Para Birimi Çevirme

1. **Miktar Girme**: 
   - Sol üstteki input alanına çevirmek istediğiniz miktarı girin
   - Sayı girişi sırasında otomatik doğrulama yapılır

2. **Kaynak Para Birimi Seçme**:
   - Sol üstteki dropdown menüden kaynak para birimini seçin
   - Seçilen para birimine ait bayrak otomatik güncellenir

3. **Hedef Para Birimi Seçme**:
   - Sağ alttaki dropdown menüden hedef para birimini seçin
   - Seçilen para birimine ait bayrak otomatik güncellenir

4. **Çeviri Yapma**:
   - Orta kısımdaki "Sorgula" butonuna tıklayın
   - Sonuç sağ üstteki input alanında görüntülenir

### 2. Para Birimlerini Değiştirme

- Orta kısımdaki değiştirme (🔄) butonuna tıklayarak kaynak ve hedef para birimlerini anlık olarak yer değiştirebilirsiniz
- Bu işlem sırasında miktarlar da otomatik olarak güncellenir

### 3. Bayrak Gösterimi

- Her para birimi seçiminde ilgili ülkenin bayrağı otomatik olarak gösterilir
- Bayraklar yüksek kaliteli PNG formatında sunulur
- Responsive tasarım sayesinde tüm cihazlarda net görüntülenir

## API Entegrasyonu

### ExchangeRate API

Uygulama [ExchangeRate API](https://exchangerate-api.com/) kullanmaktadır:

- **Base URL**: `https://v6.exchangerate-api.com/v6/`
- **Endpoint**: `/latest/{base_currency}`
- **Ücretsiz Plan**: Günde 1,500 istek
- **Response Format**: JSON

### API Kullanım Örneği

```javascript
const apiKey = 'your_api_key';
const baseCurrency = 'USD';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const rates = data.conversion_rates;
        console.log('1 USD =', rates.TRY, 'TRY');
    })
    .catch(error => {
        console.error('API Error:', error);
    });
```

## Özelleştirme

### LESS Değişkenleri

`assets/css/config/variables.less` dosyasında renk ve stil ayarlarını özelleştirebilirsiniz:

```less
// Ana renkler
@primary-color: #007bff;
@secondary-color: #6c757d;
@text-color: #333;
@border-color: #ddd;
@button-color: #28a745;

// Responsive breakpoint'ler
@mobile: ~"(max-width: 768px)";
@tablet: ~"(max-width: 1024px)";

// Font ayarları
@baseFontSize: 16px;
@fontFamily: 'Helvetica, Arial, sans-serif';
```

### Yeni Para Birimi Ekleme

1. İlgili ülke bayrağını `assets/img/` klasörüne ekleyin
2. `index.html` dosyasındaki select option'larına yeni para birimini ekleyin:

```html
<option value="CHF" data-img="assets/img/CHF.png">CHF</option>
```

3. LESS dosyasında yeni para birimi için stil ekleyin (gerekirse)

## Tarayıcı Desteği

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile Safari 12+
- ✅ Chrome Mobile 60+

## Performans Optimizasyonları

- **Resim Optimizasyonu**: Tüm bayrak resimleri optimize edilmiş PNG formatında
- **CSS Minification**: Production'da CSS dosyaları sıkıştırılmış
- **API Caching**: Döviz kurları geçici olarak cache'lenir
- **Lazy Loading**: Resimler gerektiğinde yüklenir

## Geliştirici Notları

### LESS Derleme

```bash
# Global LESS kurulumu
npm install -g less

# LESS dosyasını CSS'e derleme
lessc assets/css/style.less assets/css/style.css

# Minified CSS üretme
lessc --clean-css assets/css/style.less assets/css/style.min.css
```

### JavaScript Modülleri

- **main.js**: API entegrasyonu ve ana işlevsellik
- **change.js**: Para birimi çevirme ve UI etkileşimleri
- **jQuery**: DOM manipülasyonu ve event handling için

### Güvenlik Notları

- API anahtarları production'da environment variable olarak saklanmalıdır
- HTTPS kullanımı önerilir
- API rate limiting için client-side throttling implementasyonu yapılabilir

## Bilinen Sınırlamalar

- ⚠️ HTML select element'lerinde option resmi gösterimi tarayıcı kısıtlıdır
- ⚠️ API rate limit'i ücretsiz planda günlük 1,500 istekle sınırlıdır
- ⚠️ Offline durumda çalışmaz (network bağımlılığı)
- ⚠️ Real-time kur güncellemeleri için WebSocket kullanılmamıştır

## Gelecek Geliştirmeler

- [ ] 📊 Grafik görselleştirme (Chart.js entegrasyonu)
- [ ] 📱 PWA (Progressive Web App) desteği
- [ ] 🌙 Dark mode implementasyonu
- [ ] 📈 Geçmiş kur verileri ve trend analizi
- [ ] 🔔 Kur alarm sistemi
- [ ] 💾 Offline destek (Service Worker)
- [ ] 🌐 Çoklu dil desteği (i18n)
- [ ] ⚡ WebSocket ile real-time güncellemeler
- [ ] 📊 Kur karşılaştırma tablosu
- [ ] 💰 Hesap makinesi entegrasyonu

## Test

```bash
# Unit testler için
npm test

# E2E testler için
npm run e2e

# Lighthouse performance testi
npm run lighthouse
```

## Deployment

### GitHub Pages

```bash
# Build process
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Netlify

```bash
# Netlify CLI kurulumu
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## Katkıda Bulunma

1. 🍴 Fork edin
2. 🌿 Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. 💾 Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: Kur grafikleri eklendi'`)
4. 📤 Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. 🎯 Pull Request oluşturun

### Kod Standartları

- ESLint ve Prettier kullanın
- Commit mesajları için Conventional Commits standardını takip edin
- Test coverage %80'in üzerinde tutun
- Responsive tasarım ilkelerine uyun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakınız.

```
MIT License

Copyright (c) 2025 Js Case Example 3 Current Convert 2

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## İletişim ve Destek

📧 **E-posta**: [email@domain.com]  
🐙 **GitHub**: https://github.com/Atarapa0/Js-case-example-3-current-convert-2  
🌐 **Website**: [Henüz deploy edilmedi]  
💬 **İletişim**: [İletişim bilgileri buraya eklenecek]

### Hata Bildirimi

Hata bulduğunuzda lütfen aşağıdaki bilgileri içeren bir GitHub issue oluşturun:

- Tarayıcı ve versiyon bilgisi
- İşletim sistemi
- Hata mesajı ve stack trace
- Reproduksiyon adımları
- Ekran görüntüsü (varsa)

---

⭐ **Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

*Son güncelleme: Ağustos 2025*
