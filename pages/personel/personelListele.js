var baglanti = require('../../baglanti');
var { yonlendir, duzenleF } = require('./personelDuzenle')
function personelListele() {
    baglanti.connection.query("SELECT * FROM `personel`", (err, res) => {
        if (err) throw err;
        var filtre = [[1, "ad"], [3, "soyad"], [4, "tel"], [5, "tc"], [6, "adres"], [7, "medeni_durum"], [8, "mail"], [9, "dogum_tarihi"], [10, "kullanici_adi"], [11, "giris_tarihi"], [12, "cikis_tarihi"], [13, "askerlik_durum"], [14, "ozel_durum"], [15, "cinsiyet"], [16, "bolum"]];
        if (res.length > 0) {
            var table = document.getElementById("table");
            for (i = 1; i < res.length + 1; i++) {
                let row = table.insertRow(i);
                for (j = 0; j < filtre.length; j++) {
                    let cell = row.insertCell(j);
                    let txt = document.createTextNode(res[i - 1][filtre[j][1]]);
                    cell.appendChild(txt);
                }
                let checkbox_hucre = row.insertCell(-1);
                //
                let isaret_kutu = document.createElement("input");
                isaret_kutu.setAttribute("type", "checkbox");
                isaret_kutu.setAttribute("value", res[i - 1]["id"]);
                checkbox_hucre.appendChild(isaret_kutu)
                console.log(isaret_kutu);
                //
                let duzenle_hucre = row.insertCell(-1);
                let duzenle = document.createElement("input");
                duzenle.setAttribute("type", "submit");
                duzenle.setAttribute("value", "Düzenle");
                duzenle.setAttribute("onclick", "duzenleSayfa(" + res[i - 1]["id"] + ")")
                duzenle_hucre.appendChild(duzenle);
                //

            }
            let sil = document.createElement("input");
            sil.setAttribute("type", "submit");
            sil.setAttribute("value", "Sil")
            sil.setAttribute("onclick", "personelSil();")
            let row = table.insertRow(-1);
            let silHucresi = row.insertCell();
            silHucresi.appendChild(sil)
        }
        else {
            console.log("Kayıt bulunamadı");
        }
    })
}