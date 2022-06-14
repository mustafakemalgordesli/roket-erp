var baglanti = require('../../baglanti');
function personelEkle() {
    let kullanici_adi = document.getElementById("kullanici_adi").value;
    let bolum = document.getElementById("bolum").value;
    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;
    let tel = document.getElementById("tel").value;
    let tc = document.getElementById("tc").value;
    let adres = document.getElementById("adres").value;
    let mail = document.getElementById("mail").value;
    let medeni_durum = document.getElementById("medeni_durum");
    let medeni = medeni_durum.options[medeni_durum.selectedIndex].value;
    let dogum_tarihi = document.getElementById("dogum_tarihi").value;
    let giris_tarihi = document.getElementById("giris_tarihi").value;
    let cikis_tarihi = document.getElementById("cikis_tarihi").value;
    let askerlik_durumu = document.getElementById("askerlik_durum");
    let askerlik = askerlik_durumu.options[askerlik_durumu.selectedIndex].value;
    let ozel_durum = document.getElementById("ozel_durum").value;
    let cinsiyet = document.getElementById("cinsiyet");
    let cins = cinsiyet.options[cinsiyet.selectedIndex].value;

    baglanti.connection.query("INSERT INTO `personel` (`id`, `ad`, `soyad`, `tel`, `tc`, `adres`, `medeni_durum`, `mail`, `dogum_tarihi`, `kullanici_adi`, `giris_tarihi`, `cıkıs_tarihi`, `askerlik_durum`, `ozel_durum`, `cinsiyet`, `bolum`) VALUES (NULL, '" + ad + "', '" + soyad + "', '" + tel + "', '" + tc + "', '" + adres + "', '" + medeni + "', '" + mail + "', '" + dogum_tarihi + "', '" + kullanici_adi + "', '" + giris_tarihi + "', '" + cikis_tarihi + "', '" + askerlik + "', '" + ozel_durum + "', '" + cins + "', '" + bolum + "');", (err, res) => {
        if (err) throw err;
        document.getElementById("ekleme-formu").reset();
    })
}