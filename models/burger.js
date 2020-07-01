const orm = require("../config/orm");

const burger = {
    all(columns, cb){
        orm.selectAll(columns, "burgers", cb);
    }


}