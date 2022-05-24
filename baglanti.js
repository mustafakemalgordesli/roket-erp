const mysql = require('mysql');

const host = "localhost";
const port = 8111;
const user = "root";
const password = "";
const database = "roketerp";

let connection = mysql.createConnection({
    host,
    user,
    password,
    port,
    database
});  

connection.connect(function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Connected!");
    }
});


module.exports = { connection };
