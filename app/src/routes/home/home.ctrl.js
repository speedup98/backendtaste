"use strict";

const UserStorage = require(dir.dirlist.dirmodels +  "/UserStorage");
const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
}


const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword

        console.log(UserStorage.getUsers());

        const response = {};
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {
        //         response.success = true;
        //         response.msg = "로그인에 성공 하셨습니다.";
        //         return res.json (response);
        //     }
        // }
        response.success = false;
        response.msg = "로그인에 실패 하셨습니다.";
        return res.json(response);
    }
}

module.exports = {
    output: output,
    process: process,
};