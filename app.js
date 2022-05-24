const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require('path')
const mysql = require('mysql');
const connectDb = require('./veritabani-baglanti');

const result = connectDb();
if(result) {
  console.log("başarısız");
} else {
  console.log("başarılı");
}

let win, adminWindow;

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
  createAdminWindow();
  win.hide();
});

ipcMain.on('auth-failed', () => {
  new Notification({ title: "Giriş Başarısız!", silent : false}).show()
})

ipcMain.on('activate', () => {
win.show()
})


function createAdminWindow() {
  adminWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '/preloads/' + 'adminWindow.js')
    },
    autoHideMenuBar: true,
    })
    adminWindow.loadFile('./pages/adminWindow.html')
    adminWindow.on('close', () => {
      adminWindow.hide()
    })
}


