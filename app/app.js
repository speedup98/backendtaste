"use strict";

const express = require('express');
const app = express();

//앱 세팅
app.set("views", `${__dirname}/src/views`);
app.set("view engine", 'ejs');

//미들웨어 등록
    // /js/home/login.js의 정적 경로 추가
app.use(express.static(`${__dirname}/src/public`));

    //body-parser 필요 없어졌음. express에 통합
app.use(express.json());
    //URL을 통해 전달되는 데이터에 한글, 공백, 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended: true}));

    //이 위치가 제일 마지막에 와야 하는게 중요한데 이유는 아래와 같음
    //모든 미들웨어는 위에서부터 아래로 순차적으로 실행됩니다. 서버의 요청이 올때마다 해당 미들웨어들을 모두 순회합니다! 
    //그리고 최종적으로 라우팅 미들웨어로 진입하여 해당 기능을 수행하고 반환값을 응답해주면서 마무리되는 것이지욥! 때문에 미들웨어의 순서는 굉장히 중요하답니다.
const home = require(`${__dirname}/src/routes/home`);
app.use("/", home)

module.exports = app;