"use strict";
const appRoot = require('app-root-path');
global.appRoot = appRoot; //변수 글로벌로 설정
const dir = require(appRoot + '/config');
global.dir = dir;

const app = require(appRoot + '/app');
const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가능");
});