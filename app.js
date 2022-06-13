const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require('path')
const mysql = require('mysql');
const veritabanıBaglan = require('./veritabani-baglanti.js');
const { create } = require('domain');

const result = veritabanıBaglan();
if(result) {
  console.log("başarısız");
} else {
  console.log("başarılı");
}

let win, indexPenceresi, personelPenceresi, musteriPenceresi, stokPenceresi;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '/preloads/' + 'giris.js')
    },
    autoHideMenuBar: true,
  })

  win.loadFile('./pages/giris.html')

  win.on('close', () => {
    win.hide();
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on("cikis", () => {
  createWindow()
  indexPenceresi.hide();
});

ipcMain.on("admin-giris", () => {
  anaSayfayiOlusur()
  win.hide();
});

ipcMain.on("personel", () => {
  personelSayfasiniOlusur()
  // indexPenceresi.hide();
});

ipcMain.on("musteri", () => {
  musteriSayfasiniOlusur()
  // indexPenceresi.hide();
});

ipcMain.on("stok", () => {
  stokSayfasiniOlusur();
  // indexPenceresi.hide();
});

ipcMain.on("veriYolla",(event,arg)=>{
  sonuc=arg;
  console.log(sonuc+" veriyolla")
})
ipcMain.on("veriCek",(event,arg)=>{
  console.log(sonuc[0])
  event.reply("veriCek",sonuc)
})

ipcMain.on('auth-failed', () => {
  new Notification({ title: "Giriş Başarısız!", silent : false}).show()
})

ipcMain.on('activate', () => {
win.show()
})


function anaSayfayiOlusur() {
  indexPenceresi = new BrowserWindow({
    height: 715,
    width: 1200,
    minWidth: 800,
    minHeight: 600,

    webPreferences: {
      nodeIntegration:true,
      contextIsolation:false
     
    },
    autoHideMenuBar: true,
    })
    indexPenceresi.loadFile('./pages/index.html')
    indexPenceresi.on('close', () => {
      indexPenceresi.hide()
    })
    indexPenceresi.maximize();
}

function personelSayfasiniOlusur() {
  personelPenceresi = new BrowserWindow({
    height: 715,
    width: 1200,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation:false
    },
    autoHideMenuBar: true,
    })
    personelPenceresi.loadFile('./pages/personel/personelYonetimi.html')
    personelPenceresi.on('close', () => {
      personelPenceresi.hide()
    })
    personelPenceresi.maximize();
}

function musteriSayfasiniOlusur() {
  musteriPenceresi = new BrowserWindow({
    height: 715,
    width: 1200,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation:false
    },
    autoHideMenuBar: true,
    })
    musteriPenceresi.loadFile('./pages/musteri/musteriYonetim.html')
    musteriPenceresi.on('close', () => {
      musteriPenceresi.hide()
    })
    musteriPenceresi.maximize();
}

function stokSayfasiniOlusur() {
  stokPenceresi = new BrowserWindow({
    height: 715,
    width: 1200,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation:false
    },
    autoHideMenuBar: true,
    })
    stokPenceresi.loadFile('./pages/stok/stokYonetim.html')
    stokPenceresi.on('close', () => {
    stokPenceresi.hide()
    })
    stokPenceresi.maximize();
}
