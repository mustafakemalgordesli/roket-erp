var baglanti = require('../../baglanti');

// Stok Ürünü Ekleme
function stokEkle(){
    let u_adi = document.getElementById("urun_adi").value;
    let u_tipi = document.getElementById("urun_tipi").value;
    let miktar = document.getElementById("miktar").value;
    let s_giren = document.getElementById("stok_giren").value;
    let acikla = document.getElementById("aciklama").value;

    baglanti.connection.query("INSERT INTO `stok_takip` (`id`,`urun_adi`, `birim`, `miktar`, `stok_cikis`, `stok_giren`, `stok_cikan`, `aciklama`) VALUES (NULL, '" + u_adi + 
                                    "', '" + u_tipi + 
                                    "', '" + miktar +                                     
                                    "','" + "''" +
                                    "','" + s_giren +  
                                    "','" + "-" +
                                    "','" + acikla + "');",(err, res) =>{
        if(err) throw err;
        alert("Stok Başarılı Olarak Girildi!");
        const {
            ipcRenderer
        } = require('electron');
        ipcRenderer.send("stokyonetim");
        document.getElementById("ekleme-formu").reset();
    });
}

