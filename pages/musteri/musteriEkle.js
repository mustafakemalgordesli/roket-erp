var baglanti = require('../../baglanti');
function musteriEkle() {
    // let ID = document.getElementById("ID").value;
    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;
    let firma_ad = document.getElementById("firma_ad").value;
    let tel1 = document.getElementById("tel1").value;
    let tel2 = document.getElementById("tel2").value;
    let mail1 = document.getElementById("mail1").value;
    let mail2 = document.getElementById("mail2").value;
    let adres1 = document.getElementById("adres1").value;
    let adres2 = document.getElementById("adres2").value;
    let aciklama1 = document.getElementById("aciklama1").value;
    let aciklama2 = document.getElementById("aciklama2").value;
    let aciklama3 = document.getElementById("aciklama3").value;
    let vergi_no = document.getElementById("vergi_no").value;
    let iban = document.getElementById("iban").value;

    baglanti.connection.query("INSERT INTO `musteri` (`ID`, `ad`, `soyad`, `firma_ad`, `tel1`, `tel2`, `mail1`, `mail2`, `adres1`, `adres2`, `aciklama1`, `aciklama2`, `aciklama3`, `vergi_no`, `iban`) VALUES (NULL," + "'" + ad + "', '" + soyad + "', '" + firma_ad + "', '" + tel1 + "', '" + tel2 + "', '" + mail1 + "', '" + mail2 + "', '" + adres1 + "', '" + adres2 + "', '" + aciklama1 + "', '" + aciklama2 + "', '" + aciklama3 + "', '" + vergi_no + "', '" + iban + "');", (err, res) => {
        if (err) throw err;
        //Buraya Dialog eklenmeli
        document.getElementById("ekleme-formu").reset();
    })
}