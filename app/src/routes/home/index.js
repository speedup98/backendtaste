"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl')
router.get("/", ctrl.hello);//views로 이미 view파일의 디렉토리를 설정했기때문에 별도의 설정은 필요없다.
router.get("/login", ctrl.login);

module.exports = router;