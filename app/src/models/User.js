"use strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const client = this.body;
        const a = UserStorage.getUserInfo(client.id); //결과값 : { id: 'woorimIT', psword: '1234', name: '우리밋' }
        const {id, psword} = UserStorage.getUserInfo(client.id); //결과값 : woorimIT 1234
        if (id) {
            if (id === client.id && psword === client.psword) {
                return {success:true, msg: ''};
            } else {
                return {success:false, msg: '비밀 번호가 틀렸습니다'};
            }
        }
        return {success:false, msg: '아이디가 없습니다'};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;