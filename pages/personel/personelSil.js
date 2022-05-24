var baglanti = require('../../baglanti');
function personelSil() {
    var secilmisKisiler = document.querySelectorAll('input[type="checkbox"]:checked')
    for (i = 0; i < secilmisKisiler.length; i++) {
        baglanti.connection.query("DELETE FROM `personel` WHERE `id`= " + secilmisKisiler[i].value)
    }
    location.reload();
}