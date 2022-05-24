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
    
            var sql = "CREATE TABLE IF NOT EXISTS kullanicilar (id INT AUTO_INCREMENT PRIMARY KEY, kullanici_adi VARCHAR(100) UNIQUE NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, sifre VARCHAR(255) NOT NULL, rol VARCHAR(100))";
            connection.query(sql, function (err, result) {
            if (err) return err;
            console.log("User Table created");
            });
        });
    }); 
}

module.exports = connectDb;
