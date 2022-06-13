var baglanti = require('../../baglanti');
var { yonlendir, yazdir, guncelle } = require('./stok')
var { yonlendir1, yazdir1, guncelledus } = require('./stokDus')

var secilmisKisiler = [];

// Stok Ürünleri Listeleme
function stokListele() {
    baglanti.connection.query("SELECT * FROM `stok_takip`", (err, res) => {
            if (err) throw err;
            var filtre = [[1, "urun_adi"], [3, "birim"], [4, "miktar"], [5, "stok_giris"], [6, "stok_cikis"], [7, "stok_giren"], [8, "stok_cikan"], [9, "aciklama"]];
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
                    duzenle.setAttribute("value", "Stoğa Ekle");
                    duzenle.setAttribute("onclick", "yazdir(" + res[i - 1]["id"] + ")")
                    duzenle_hucre.appendChild(duzenle);
                    //
                    let duzenle_hucre1 = row.insertCell(-1);
                    let duzenle1 = document.createElement("input");
                    duzenle1.setAttribute("type", "submit");
                    duzenle1.setAttribute("value", "Stok Düş");
                    duzenle1.setAttribute("onclick", "yazdir1(" + res[i - 1]["id"] + ")")
                    duzenle_hucre1.appendChild(duzenle1);
                }
                let sil = document.createElement("input");
                sil.setAttribute("type", "submit");
                sil.setAttribute("value", "Sil")
                sil.setAttribute("onclick", "stokSil();")
                let row = table.insertRow(-1);
                let silHucresi = row.insertCell();
                silHucresi.appendChild(sil)
            }
            else {
                alert("Stok bulunamadı!!!");
            }
        })
}