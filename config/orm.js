const connection = require("./connection");

const orm = {
    selectAll(column, tableName, cb){
        connection.query("SELECT ?? FROM ??", [column, tableName], (err, results)=> {
            if (err) throw err;
            cb(results);
        })
    }
}