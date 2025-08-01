// JSON dosyasını oku
// veri.jsondan çekilen veriler için js kodu
/*
fetch('assets/json/veri.json')
    .then(response => response.json())
    .then(data => {

        const leftDiv = document.querySelector('.left');
        const rightDiv = document.querySelector('.right');
        data.forEach((item, index) => {
            const calculated = dailyChangeExchange(item, index);
            const card = `
                <div class="item">
                     <div class="info">
                          <img class="image" src="assets/img/${item.Code.toLowerCase()}.png" alt="${item.Code}">
                              <div class="text">

                                    <span class="change">
                                    <span class="code">${item.Code}&nbsp;&nbsp;&nbsp;&nbsp;<span class="daily-value ${calculated.cssClass}">${calculated.dailyChange}</span></span></span>
                                     <span class="name">${item.Name}</span>
                                 </div>
                    </div>
                    <div class="rates">
                        <div class="rate-group">
                              <span class="text">Alış</span>
                              <span class="number">${item.BuyingPrice.toFixed(2)}</span>
                        </div>
                        <div class="rate-group">
                            <span class="text">Satış</span>
                              <span class="number">${item.SellingPrice.toFixed(2)}</span>
                        </div>
                     </div>
                 </div> `;

            // ilk 3 item sola, kalanları sağa ekle
            if (index <  data.length / 2) {
                leftDiv.innerHTML += card;
            } else {
                rightDiv.innerHTML += card;
            }
        });
    });

function dailyChangeExchange(item, index) {
    const dailyChange = item.DailyChangePercent;
    const formatted = dailyChange.toFixed(2);//Math.abs(dailyChange).toFixed(2); ekleyerekk -y kadldıraibliirm
    let dailyFormated = '';

    let cssClass = '';
    if (dailyChange > 0) {
        cssClass = 'positive';
        dailyFormated = '⏶ %' + `+${formatted}`;
    } else if (dailyChange < 0) {
        cssClass = 'negative';
        dailyFormated = '⏷' + `${formatted}`;
    } else {
        cssClass = 'neutral';
        dailyFormated = `${formatted}`;
    }

    return {
        dailyChange: dailyFormated,
        cssClass: cssClass
    };
}
    */
// Api ile çekilen veriler için js kodu


const apiKey = 'your_api_key'; // API anahtarı


//const currency = ['USD', 'EUR', 'GBP', 'JPY', 'TRY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'RUB', 'INR', 'ZAR', 'HKD', 'KRW', 'SGD', 'NOK', 'MXN', 'BRL']; // Desteklenen para birimleri
var unit = 'TRY'; // Varsayılan para birimi
const currency = ['USD', 'EUR', 'GBP', 'JPY', 'TRY',]; // Desteklenen para birimleri
//var unit=prompt("Lütfen bir para birimi giriniz (örn: USD, EUR, GBP, JPY, TRY):", "TRY");
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${unit}`;

fetch(url)
    .then(res => {
        if (!res.ok) throw new Error("API bağlantı hatası: " + res.status);
        return res.json();
    })
    .then(data => {
        const rates = data.conversion_rates;
        const filteredRates = {};

        // Sadece seçilen para birimlerini filtrele
        for (let code of currency) {
            if (rates[code]) {
                filteredRates[code] = rates[code];
            }
        }

        // Kartları oluştur
        cardTemplate(filteredRates, unit);
    })
    .catch(error => console.error("Hata oluştu:", error));

function cardTemplate(data, base) {
    const leftDiv = document.querySelector('.leftone');
    const rightDiv = document.querySelector('.rightone');
    let index = 0;

    for (let code in data) {
        const rate = data[code];
        const card = `
      <div class="item">
        <div class="info">
          <img class="image" src="assets/img/${code.toLowerCase()}.png" alt="${code}">
          <div class="text">
            <span class="change">
              <span class="code">${code}</span>
                 <span class="daily-value">⏶ %0.00</span> <!-- Günlük değişim sabit gösteriliyor -->
            </span>
            <span class="name">${code} - ${base}</span>
          </div>
        </div>
        <div class="rates">
        <!-- 
          <div class="rate-group">
            <span class="text">Alış</span>
            <span class="number">${rate.toFixed(2)}</span>
          </div>
          -->
          <div class="rate-group">
            <span class="text">Satış</span>
            <span class="number">${rate.toFixed(2)}</span>
          </div>
        </div>
      </div>`;

        if (index % 2 === 0) {
            leftDiv.innerHTML += card;
        } else {
            rightDiv.innerHTML += card;
        }

        index++;
    }
}


