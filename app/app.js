"use strict";

const express = require('express');
const app = express();

//앱 세팅
app.set("views", '../views');
app.set("view engine", 'ejs');

//미들웨어 등록
const home = require('./src/routes/home');
app.use("/", home)

module.exports = app;