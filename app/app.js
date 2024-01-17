"use strict";

const express = require('express');
const app = express();

//앱 세팅
app.set("views", '../src/views');
app.set("view engine", 'ejs');

//미들웨어 등록
const home = require('./src/routes/home');
app.use("/", home)

//  /js/home/login.js의 정적 경로 추가
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;