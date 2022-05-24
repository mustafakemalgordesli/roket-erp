const mysql = require('mysql');

let connection;

const host = "localhost";
const port = 8111;
const user = "root";
const password = "";
const database = "roketerp";

const connectDb = () => {
    connection = mysql.createConnection({
        host,
        user,
        password,
        port,
    });
      
    connection.connect(function(err) {
        if (err) return err
        connection.query("CREATE DATABASE IF NOT EXISTS roketerp", function (err, result) {
            if (err) return err;
            console.log("Database created");
        });
        connection = mysql.createConnection({
            host,
            user,
            password,
            port,
            database
        });  
        
        connection.connect(function(err) {
            if (err) {
                return err
            } 
            console.log("Connected!");
    
            var sql_kullanicilar = "CREATE TABLE IF NOT EXISTS kullanicilar (id INT AUTO_INCREMENT PRIMARY KEY, kullanici_adi VARCHAR(100) UNIQUE NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, sifre VARCHAR(255) NOT NULL, rol VARCHAR(100))";
            var sql_personel = "CREATE TABLE IF NOT EXISTS personel (id INT AUTO_INCREMENT PRIMARY KEY, ad VARCHAR(150) NOT NULL, soyad VARCHAR(100), tel VARCHAR(10), tc VARCHAR(11), tc VARCHAR(11), adres VARCHAR(255), medeni_durum VARCHAR(20), mail VARCHAR(100), dogum_tarihi DATETIME, kullanici_adi VARCHAR(100), giris_tarihi DATETIME, cıkıs_tarihi DATETIME, askerlik_durum VARCHAR(100), ozel_durum VARCHAR(255), cinsiyet VARCHAR(100), bolum VARCHAR(255))"
            // var sql_musteri = "CREATE TABLE IF NOT EXISTS personel (id INT AUTO_INCREMENT PRIMARY KEY, ad VARCHAR(150) NOT NULL, soyad VARCHAR(100), firma_ad VARCHAR(255) tel VARCHAR(10), tc VARCHAR(11), tc VARCHAR(11), adres VARCHAR(255), medeni_durum VARCHAR(20), mail VARCHAR(100), dogum_tarihi DATETIME, kullanici_adi VARCHAR(100), giris_tarihi DATETIME, cıkıs_tarihi DATETIME, askerlik_durum VARCHAR(100), ozel_durum VARCHAR(255), cinsiyet VARCHAR(100), bolum VARCHAR(255))"
            connection.query(sql_kullanicilar, function (err, result) {
            if (err) return err;
            connection.query(sql_personel, function (err, result) {
                if (err) return err;
            console.log("User Table created");
            });
        });
    }); 
}

module.exports = connectDb;
