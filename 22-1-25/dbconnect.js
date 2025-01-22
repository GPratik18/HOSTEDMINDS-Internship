var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "jspract"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});