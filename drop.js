var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nav@gur1",
    database: "data"

});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE attribute";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
});