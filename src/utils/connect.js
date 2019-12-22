var mysql = require('mysql');
const dotenv = require('dotenv');

var connection = mysql.createConnection({
    host: dotenv.HOST,
    user: dotenv.USER,
    password: dotenv.PASSWORD,
    database: dotenv.DATABASE
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to db")
});

module.exports = connection;