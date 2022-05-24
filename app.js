const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require('path')
const mysql = require('mysql');
const veritabanıBaglan = require('./veritabani-baglanti.js');

const result = veritabanıBaglan();
if(result) {
  console.log("başarısız");
} else {
  console.log("başarılı");
}

let win, indexWindow, personelPenceresi;

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



ipcMain.on("login", () => {
  anaSayfayıOlusur()
  win.hide();
});

ipcMain.on("login", () => {
  personelSayfasınıOlusur()
  indexWindow.hide();
});

ipcMain.on('auth-failed', () => {
  new Notification({ title: "Giriş Başarısız!", silent : false}).show()
})

ipcMain.on('activate', () => {
win.show()
})


function anaSayfayıOlusur() {
  indexWindow = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      nodeIntegration:true,
      contextIsolation:false
     
    },
    autoHideMenuBar: true,
    })
    indexWindow.loadFile('./pages/index.html')
    indexWindow.on('close', () => {
      indexWindow.hide()
    })
}

function personelSayfasınıOlusur() {
  personelWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation:false
    },
    autoHideMenuBar: true,
    })
    personelWindow.loadFile('./pages/personel/personelYonetimi.html')
    personelWindow.on('close', () => {
      personelWindow.hide()
    })
}

