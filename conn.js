const mysql = require("mysql")

const query = mysql.createConnection({
    host : "localhost",
    user :"root",
    passward : "",
    database : "store"
})

module.exports = query;