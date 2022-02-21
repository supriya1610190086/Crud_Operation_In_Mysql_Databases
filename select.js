var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nav@gur1",
    database: "data"

});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM mytable_data", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});