var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'hixe'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to db")
});

module.exports = connection;