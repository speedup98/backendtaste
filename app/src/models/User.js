"use strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const a = UserStorage.getUserInfo(this.body.id); //결과값 : { id: 'woorimIT', psword: '1234', name: '우리밋' }
        const {id, psword} = UserStorage.getUserInfo(this.body.id); //결과값 : woorimIT 1234
        if (id) {
            if (id === this.body.id && psword === this.body.psword) {
                return {success:true, msg: ''};
            } else {
                return {success:false, msg: '비밀 번호가 틀렸습니다'};
            }
        }
        return {success:false, msg: '아이디가 없습니다'};
    }

    register() {
        UserStorage.save(this.body);
    }
}

module.exports = User;