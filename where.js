var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nav@gur1",
    database: "data"

});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM mytable_data WHERE address = 'Park Lane 38'", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});