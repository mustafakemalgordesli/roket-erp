var baglanti = require('../../baglanti');

// Stoktan Ürün Silme
function stokSil(secilmisKisiler) {
    secilmisKisiler = document.querySelectorAll('input[type="checkbox"]:checked')
    for (i = 0; i < secilmisKisiler.length; i++) {
        baglanti.connection.query("DELETE FROM `stok_takip` WHERE `id` =" + secilmisKisiler[i].value, (err, res) => {
            if (err) throw err.message;
            alert(res.affectedRows + ' kayıt silindi.');
            if (res.affectedRows > 0) {
                alert(res.affectedRows + ' kayıt silindi.');
              }
         });
    }
    const {
        ipcRenderer
    } = require('electron');
    ipcRenderer.send("stokyonetim");
}