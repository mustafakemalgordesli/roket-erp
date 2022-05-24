const { BrowserWindow, ipcRenderer} = require('electron')
const { contextBridge } = require('electron')
const { connection } = require('../baglanti');

contextBridge.exposeInMainWorld('myAPI', {
  login: (veri) => {
    const sql = 'SELECT * FROM kullanicilar WHERE kullanici_adi="' + veri.kullanici_adi + '"';
    connection.query(sql, (err, result) => {
      if (err) {
        ipcRenderer.send("auth-failed");
      }
      else {
        if(result[0].sifre == veri.sifre) {
          if(result[0].rol == "Admin") 
            ipcRenderer.send("admin-giris");
        } else {
          ipcRenderer.send("auth-failed");
        }
      };
    });
  }
})
