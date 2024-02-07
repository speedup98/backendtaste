"use strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        // const a = UserStorage.getUserInfo(client.id); //결과값 : { id: 'woorimIT', psword: '1234', name: '우리밋' }

        const {id, psword} = await UserStorage.getUserInfo(client.id); //결과값 : woorimIT 1234, 
        //await은 promise를 반환하는 애 한테 주는 옵션이다. 아직 파일디비를 처리하지 않았는데 콘솔에 찍으려 할때 undefined가 이런이유로 출력이 된다. 함수도 async가 필요하다.
        //async await 함수는 자체적으로 Promise를 반환해주도록 되어있다. 따라서 이 async login함수의 리턴값을 받는 쪽에서도 await이 걸려야 한다. home.ctrl.js에 users.login 부분이다.

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