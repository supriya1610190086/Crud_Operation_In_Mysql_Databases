var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nav@gur1",
    database: "data"

});
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM mytable_data LIMIT 5";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});