const mysql = require('mysql');

let connection;

const host = "localhost";
const port = 3306;
const user = "root";
const password = "";
const database = "roketerp";

const veritabanıBaglan = () => {
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
            console.log("Veritabanı oluşturuldu");
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
            var sql_personel = "CREATE TABLE IF NOT EXISTS personel (id INT AUTO_INCREMENT PRIMARY KEY, ad VARCHAR(150) NOT NULL, soyad VARCHAR(100), tel VARCHAR(10), tc VARCHAR(11), adres VARCHAR(255), medeni_durum VARCHAR(20), mail VARCHAR(100), dogum_tarihi DATETIME, kullanici_adi VARCHAR(100), giris_tarihi DATETIME, cikis_tarihi DATETIME, askerlik_durum VARCHAR(100), ozel_durum VARCHAR(255), cinsiyet VARCHAR(100), bolum VARCHAR(255))"
            var sql_musteri = "CREATE TABLE IF NOT EXISTS musteri (id INT AUTO_INCREMENT PRIMARY KEY, ad VARCHAR(150) NOT NULL, soyad VARCHAR(100), firma_ad VARCHAR(255), tel1 VARCHAR(10), tel2 VARCHAR(11),  mail1 VARCHAR(100),  mail2 VARCHAR(100), adres1 VARCHAR(255), adres2 VARCHAR(255), vergi_no VARCHAR(100), aciklama1 VARCHAR(255), aciklama2 VARCHAR(255), aciklama3 VARCHAR(255), iban VARCHAR(255))"
            var sql_stok = "CREATE TABLE IF NOT EXISTS stok_takip (id INT AUTO_INCREMENT PRIMARY KEY, urun_adi VARCHAR(100), birim VARCHAR(100), miktar INT, stok_giris DATETIME, stok_cikis DATETIME, stok_giren VARCHAR(100), stok_cikan VARCHAR(100), aciklama VARCHAR(255))"
            var adminkullanici = "INSERT INTO `kullanicilar`(`kullanici_adi`, `email`, `sifre`, `rol`) VALUES ('admin','m.kemalgordesli@gmail.com','12345','Admin')"

            connection.query(sql_kullanicilar, function (err, result) {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("kullancilar tablosu olusturuldu")
            })
            
            connection.query(sql_personel, function (err, result) {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("personel tablosu olusturuldu")
            });

            connection.query(sql_musteri, function (err, result) {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("musteri tablosu olusturuldu")
            })

            connection.query(sql_stok, function (err, result) {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("stok takip tablosu olusturuldu")
            })

            
            connection.query("SELECT * FROM kullanicilar WHERE kullanici_adi='admin'", function (err, result, fields) {
                if (err) {
                    console.log(err)
                    return
                }
                if(result) {
                    console.log("burada")
                    connection.query(adminkullanici, function (err, result) {
                        if (err) {
                            console.log(err)
                            return
                        }
                        console.log("admin kullanicisi olusturuldu")
                    })        
                }
            });
            


        });
    }); 
}

module.exports = veritabanıBaglan;
