const mysql = require('mysql');


//create connection

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"BLOG"
})

module.exports = db;