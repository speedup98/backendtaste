"use strict";

const User = require(dir.dirlist.dirmodels +  "/User");

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
}

const process = {
    login: async (req, res) => { //async는 익명 함수이든 어디든 함수 앞에 걸어줘야 한다.
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
}

module.exports = {
    output: output,
    process: process,
};