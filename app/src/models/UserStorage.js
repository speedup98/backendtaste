"use strict";

//#을 붙여주면 private 변수가 된다. 여기에서는 개발자가 은닉화까지 설명을 하기 위해 이런식으로 #을 붙였다. 그리고 밑에 별도의 게터 메서드를 정의했음. #을 빼도 문제는 없으나 게터세터의 은닉화와는 거리가 좀 있어짐.
class UserStorage {
    static #users = {
        id : ["woorimIT", "나개발", "김팀장"],
        psword : ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"]
    };

    static getUsers(...fields) { //...변수명은 인자값으로 들어오는게 몇개든지 상관없게 만든다. 인자값으로 들어올때 작은따옴표로 처리해야 한다.
        //https://miiingo.tistory.com/365 reduce관련해서 참고
        const users = this.#users;
        //console.log(users);
        const newUsers = fields.reduce((speedup, field, idx) => {
            if (users.hasOwnProperty(field)) {
                speedup[field] = users[field];
            }
            return speedup;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id); //유저 아이디로 넘어온값의 index가 넘어오며 만약에 없을경우 -1을 반환한다.
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((speedup, info, idxI) => {
            speedup[info] = users[info][idx];
            return speedup;
        }, {});
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
    }

}

module.exports = UserStorage;