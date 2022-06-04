var baglanti = require('../../baglanti')
function duzenleSayfa(id) {
    location.href = "./personelDuzenle.html";
    setTimeout(() => {
        console.log(id)
        let kullanici_adi = document.getElementById("kullanici_adi");
        let bolum = document.getElementById("bolum");
        let ad = document.getElementById("ad");
        let soyad = document.getElementById("soyad");
        let tel = document.getElementById("tel");
        let tc = document.getElementById("tc");
        let adres = document.getElementById("adres");
        let mail = document.getElementById("mail");
        let medeni_durum = document.getElementById("medeni_durum");
        let medeni = medeni_durum.options[medeni_durum.selectedIndex];
        let dogum_tarihi = document.getElementById("dogum_tarihi");
        let giris_tarihi = document.getElementById("giris_tarihi");
        let cikis_tarihi = document.getElementById("cikis_tarihi");
        let askerlik_durumu = document.getElementById("askerlik_durum");
        let askerlik = askerlik_durumu.options[askerlik_durumu.selectedIndex];
        let ozel_durum = document.getElementById("ozel_durum");
        let cinsiyet = document.getElementById("cinsiyet");
        let cins = cinsiyet.options[cinsiyet.selectedIndex];
        baglanti.connection.query("SELECT * FROM personel WHERE id= " + id, (err, res) => {
            if (err) throw err;
            if (res > 0) {
                kullanici_adi.value = res[0]['kullanici_adi'];
            }
            else {
                console.log("Personel bulunamadı");
            }
        })

    }, 3000);
}

module.exports = {
    duzenleSayfa
}