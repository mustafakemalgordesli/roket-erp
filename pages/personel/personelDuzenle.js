var baglanti = require('../../baglanti')
function yonlendir(id) {
    return new Promise(resolve => {
        location.href = "./personelDuzenle.html";
        resolve(id);
    })
}
async function yazdir(id) {
    await yonlendir(id);
    var sonuc = []
    baglanti.connection.query("SELECT * FROM personel WHERE id= " + id, (err, res) => {
        if (err) throw err;
        if (res.length > 0) {
            sonuc = res;
        }
    })
    var kullanici_adi = document.getElementById("kullanici_adi")
    kullanici_adi.setAttribute("value", res[0]['kullanici_adi'])
    var bolum = document.getElementById("bolum")
    bolum.setAttribute("value", res[0]['bolum'])
    var ad = document.getElementById("ad")
    ad.setAttribute("value", res[0]['ad'])
    var soyad = document.getElementById("soyad")
    soyad.setAttribute("value", res[0]['soyad'])
    var tel = document.getElementById("tel")
    tel.setAttribute("value", res[0]['tel'])
    var tc = document.getElementById("tc")
    tc.setAttribute("value", res[0]['tc'])
    var adres = document.getElementById("adres")
    adres.setAttribute("value", res[0]['adres'])
    var mail = document.getElementById("mail")
    mail.setAttribute("value", res[0]['mail'])
    var medeni_durum = document.getElementById("medeni_durum")
    medeni_durum.setAttribute("value", res[0]['medeni_durum'])
    var dogum_tarihi = document.getElementById("dogum_tarihi")
    dogum_tarihi.setAttribute("value", res[0]['dogum_tarihi'])
    var giris_tarihi = document.getElementById("giris_tarihi")
    giris_tarihi.setAttribute("value", res[0]['giris_tarihi'])
    var cikis_tarihi = document.getElementById("cikis_tarihi")
    cikis_tarihi.setAttribute("value", res[0]['cikis_tarihi'])
    var askerlik_durumu = document.getElementById("askerlik_durumu")
    askerlik_durumu.setAttribute("value", res[0]['askerlik_durumu'])
    var ozel_durum = document.getElementById("ozel_durum")
    ozel_durum.setAttribute("value", res[0]['ozel_durum'])
    var cinsiyet = document.getElementById("cinsiyet")
    cinsiyet.setAttribute("value", res[0]['cinsiyet'])
}
module.exports = {
    yonlendir, yazdir
}