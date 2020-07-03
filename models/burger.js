const orm = require("../config/orm");

const burger = {
    all(columns, cb){
        orm.selectAll(columns, "burgers", cb);
    },
    update(newValues, cb){
        orm.updateOne("burgers", newValues, targetId, cb);
    },
    create(data, cb){
        orm.insertOne("burgers", data, cb)
    }

};

module.exports = burger;