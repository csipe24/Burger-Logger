const connection = require("./connection");

const orm = {
    selectAll(column, tableName, cb){
        connection.query("SELECT ?? FROM ??", [column, tableName], (err, results)=> {
            if (err) throw err;
            cb(results);
        })
    },
    insertOne(tableName, value, cb){
        connection.query("INSERT INTO ?? SET ?", [tableName, value], (err, results)=> {
            if (err) throw err;
            cb(results);
        })
    },
    updateOne(tableName, newValue, targetId, cb){
        connection.query("UPDATE ?? SET ? WHERE id = ?", [tableName, newValue, targetId], (err, results)=> {
            if (err) throw err;
            cb(results);
    })
    }

}
