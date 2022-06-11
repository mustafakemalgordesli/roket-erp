var baglanti = require('../../baglanti');
var { yonlendir, duzenleF } = require('./musteriDuzenle')
function musteriListele() {
    baglanti.connection.query("SELECT * FROM `musteri`", (err, res) => {
        if (err) throw err;
        var filtre = [[1, "ID"], [3, "ad"], [4, "soyad"], [5, "firma_ad"], [6, "tel1"], [7, "tel2"], [8, "mail1"], [9, "mail2"], [10, "adres1"], [11, "adres2"], [12, "aciklama1"], [13, "aciklama2"], [14, "aciklama3"], [15, "vergi_no"], [16, "iban"]];
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
                duzenle.setAttribute("onclick", "musteriDuzenle(" + res[i - 1]["id"] + ")")
                duzenle_hucre.appendChild(duzenle);
                //

            }
            let sil = document.createElement("input");
            sil.setAttribute("type", "submit");
            sil.setAttribute("value", "Sil")
            sil.setAttribute("onclick", "musteriSil();")
            let row = table.insertRow(-1);
            let silHucresi = row.insertCell();
            silHucresi.appendChild(sil)
        }
        else {
            console.log("Kayıt bulunamadı");
        }
    })
}