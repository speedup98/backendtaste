"use strict";

//#을 붙여주면 private 변수가 된다.
class UserStorage {
    static #users = {
        id : ["woorimIT", "나개발", "김팀장"],
        psword : ["1234", "1234", "123456"],
    };

    static getUsers() {
        return this.#users;
    }
}

module.exports = UserStorage;