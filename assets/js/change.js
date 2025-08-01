const from = 'USD'
const to = 'TRY'
const amount = 1
const apiKey = 'your_api_key'; // API anahtarı
let changeAmount;

const urlchange = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`
fetch(urlchange)
    .then(res => {
        if (!res.ok) throw new Error("API bağlantı hatası: " + res.status);
        return res.json();
    })
    .then(data => {
        const result = data.conversion_result;
        console.log(`1 ${from} = ${result} ${to}`);
    })
    .catch(error => console.error("Hata oluştu:", error));


function convertCurrency(amount, fromCurrency, toCurrency) {


}


function convertCurrency() {
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value) || 1;
    // Boş değer kontrolü
    if (!amount || amount <= 0) {
        document.getElementById('result').innerHTML = '';
        return;
    }

    // API URL'si oluştur
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    // API çağrısı
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("API bağlantı hatası: " + res.status);
            return res.json();
        })
        .then(data => {
            const result = data.conversion_result;
            // Sonucu göster
            document.getElementById('convertedAmount').value = `${result.toFixed(2)}`;
            console.log(`1 ${fromCurrency} = ${result} ${toCurrency}`);
            changeAmount = `${result.toFixed(2)}`;
        })
        .catch(error => {
            console.error("Hata oluştu:", error);
            document.getElementById('result').innerHTML = 'Çeviri hatası oluştu';
        });
}

// Sayfa yüklendiğinde varsayılan çeviri yap
window.onload = function () {

    document.getElementById('fromCurrency').addEventListener('change', function () {

        convertCurrency();
    });
    document.getElementById('toCurrency').addEventListener('change', function () {
        convertCurrency();
    });
    document.getElementById('amount').addEventListener('input', function () {
        convertCurrency();
    });
    document.getElementById('convertButton').addEventListener('click', function () {
        changeCurrency();
    });

};

function changeCurrency() {
    console.log("Para birimi değiştirildi");
    let temp = document.getElementById('fromCurrency').value;
    document.getElementById('fromCurrency').value = document.getElementById('toCurrency').value;
    document.getElementById('toCurrency').value = temp;
    console.log("Tutar değiştirildi");
    let temp2 = document.getElementById('amount').value;
    document.getElementById('amount').value = changeAmount;
    changeAmount = temp2// Tutarı varsayılan olarak 1 yap
    convertCurrency();


}

        $(document).ready(function () {
            function updateFlagtoCurrency() {
                var selectedOption = $('#toCurrency option:selected');
                var imgSrc = selectedOption.data('img');
                $('#currencyflag').attr('src', imgSrc);

            }
            function updateFlagfromCurrency() {
                var selectedOption = $('#fromCurrency option:selected');
                var imgSrc = selectedOption.data('img');
                $('#fromCurrencyflag').attr('src', imgSrc);
            }

            // Sayfa yüklendiğinde ilk flag ayarlanır
            updateFlagtoCurrency();
            updateFlagfromCurrency();

            // Seçim değişince flag güncellenir
            $('#toCurrency').on('change', updateFlagtoCurrency);
            $('#fromCurrency').on('change', updateFlagfromCurrency);
        });