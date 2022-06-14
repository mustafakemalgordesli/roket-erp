var baglanti = require('../../baglanti')
const { ipcRenderer } = require('electron');

var miktar;
var eklenecek;
var sMiktar =0;
var giren;
var aciklama;
var a,b;
var idd;

function yonlendir(id) {
    return new Promise(resolve => {
        location.href = "./stokDuzenle.html";
        resolve(id);
    })
}
async function yazdir(id) {
    await yonlendir(id);   
    
    baglanti.connection.query("SELECT * FROM stok_takip WHERE id= " + id, (err, res) => {
        if (err) throw err;
        if (res.length > 0) {
            ipcRenderer.send("veriYolla",res[0]["id"])
            //alert(id);            
        }
    });
}
function guncelle(){
    ipcRenderer.send("veriCek")
    ipcRenderer.on("veriCek",(event,arg)=>{
       idd=arg;
       //alert(idd)
       baglanti.connection.query("SELECT * FROM stok_takip WHERE id= " + idd, (err, res) => {
            if (err) throw err;
            if (res.length > 0) {
                miktar=res[0]["miktar"];
                b=res[0]["aciklama"]; 
                eklenecek =document.getElementById("eklenecek").value;
                eklenecek=Number(eklenecek);
                sMiktar=miktar+eklenecek;                       
                //alert(sMiktar);
                giren = document.getElementById("stok_giren").value;  
                aciklama = document.getElementById("aciklama").value;
                var sql="UPDATE `stok_takip` SET `miktar` = '"+sMiktar+"', `stok_giris` = CURRENT_TIMESTAMP(), `stok_giren` = '"+giren+"', `aciklama` = '"+aciklama+"' WHERE `stok_takip`.`id` = "+idd+"";
                //alert(sql);
                baglanti.connection.query(sql, (err, res) => {
                    if (err) throw err; 
                    alert("Stok Başarı ile EKLENDİ!!!")
                    location.href="./stokYonetim.html" ;
                    document.getElementById("duzenleme-formu").reset();
                })  
            }
        })    
    })
   
} 
module.exports = {
    yonlendir, yazdir, guncelle
}