var baglanti = require('../../baglanti')
function duzenleSayfa(id) {
    location.href = "./musteriDuzenle.html";
    setTimeout(() => {
        let ad = document.getElementById("ad");
        let soyad = document.getElementById("soyad");
        let firma_ad = document.getElementById("firma_ad");
        let tel1 = document.getElementById("tel1");
        let tel2 = document.getElementById("tel2");
        let mail1 = document.getElementById("mail1");
        let mail2 = document.getElementById("mail2");
        let adres1 = document.getElementById("adres1");
        let adres2 = document.getElementById("adres2");
        let aciklama1 = document.getElementById("aciklama1");
        let aciklama2 = document.getElementById("aciklama2");
        let aciklama3 = document.getElementById("aciklama3");
        let vergi_no = document.getElementById("vergi_no");
        let iban = document.getElementById("iban");
        let ozel_durum = document.getElementById("ozel_durum");
        baglanti.connection.query("SELECT * FROM musteri WHERE id= " + id, (err, res) => {
            if (err) throw err;
            if (res > 0) {
                id.value = res[0]['ID'];
            }
            else {
                console.log("Müşteri bulunamadı");
            }
        })

    }, 3000);
}

module.exports = {
    duzenleSayfa
}