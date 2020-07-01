const router = require("express").Router();
const Burger = require("../models/burger");

router.get("/", (req, res)=>{
    Burger.all("*", (results) => {

    });
    res.render("index", {
        burgers: results
    });
});
