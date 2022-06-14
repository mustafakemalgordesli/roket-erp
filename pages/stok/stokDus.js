var baglanti = require('../../baglanti')
const { ipcRenderer } = require('electron');

var miktar;
var dusurulecek;
var sMiktar =0;
var cikan;
var aciklama;
var a,b;
var idd;

function yonlendir1(id) {
    return new Promise(resolve => {
        location.href = "./stokDus.html";
        resolve(id);
    })
}
async function yazdir1(id) {
    await yonlendir1(id);     
    baglanti.connection.query("SELECT * FROM stok_takip WHERE id= " + id, (err, res) => {
        if (err) throw err;
        if (res.length > 0) {
            ipcRenderer.send("veriYolla",res[0]["id"])
            
        }
    });
}
function guncelledus(){
    ipcRenderer.send("veriCek")
    ipcRenderer.on("veriCek",(event,arg)=>{
       idd=arg;
       //alert(idd)
       baglanti.connection.query("SELECT * FROM stok_takip WHERE id= " + idd, (err, res) => {
        if (err) throw err;
        if (res.length > 0) {
            miktar=res[0]["miktar"];
            b=res[0]["aciklama"]; 
            dusurulecek =document.getElementById("dusulecek").value;
            dusurulecek=Number(dusurulecek);
            sMiktar=miktar-dusurulecek;                       
            //alert(sMiktar);
            cikan = document.getElementById("stok_cikan").value;
            aciklama = document.getElementById("aciklama").value;
            var sql="UPDATE `stok_takip` SET `miktar` = '"+sMiktar+"', `stok_cikis` = CURRENT_TIMESTAMP(), `stok_cikan` = '"+cikan+"', `aciklama` = '"+aciklama+"' WHERE `stok_takip`.`id` = "+idd+"";
            //alert(sql);
            baglanti.connection.query(sql, (err, res) => {
                if (err) throw err; 
                alert("Stok Başarı ile DÜŞÜRÜLDÜ!!!")
                location.href="./stokYonetim.html";
                document.getElementById("duzenleme-formu1").reset();
                })  
            }
        })    
    })
   
} 
module.exports = {
    yonlendir1, yazdir1, guncelledus
}