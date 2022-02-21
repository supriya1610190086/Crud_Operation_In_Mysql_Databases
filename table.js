var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nav@gur1",
    database: "Turing"

});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE attribute (attribute_id VARCHAR(255), name VARCHAR(255))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});