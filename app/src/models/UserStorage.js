"use strict";

const fs = require('fs').promises; //Promise가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 아주 효과적

//#을 붙여주면 private 변수가 된다. 여기에서는 개발자가 은닉화까지 설명을 하기 위해 이런식으로 #을 붙였다. 그리고 밑에 별도의 게터 메서드를 정의했음. #을 빼도 문제는 없으나 게터세터의 은닉화와는 거리가 좀 있어짐.
class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id); //유저 아이디로 넘어온값의 index가 넘어오며 만약에 없을경우 -1을 반환한다.
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((speedup, info, idxI) => {
            speedup[info] = users[info][idx];
            return speedup;
        }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll == true) return users;
        const newUsers = fields.reduce((speedup, field, idx) => {
            if (users.hasOwnProperty(field)) {
                speedup[field] = users[field];
            }
            return speedup;
        }, {});
        return newUsers;        
    }

    static getUsers(isAll, ...fields) { //...변수명은 인자값으로 들어오는게 몇개든지 상관없게 만든다. 인자값으로 들어올때 작은따옴표로 처리해야 한다.
        //https://miiingo.tistory.com/365 reduce관련해서 참고
        // const users = this.#users;
        return fs.readFile(dir.dirlist.dirdatabases + "/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields)
        }) //성공했을때 실행;
        .catch(console.error); //에러가 났을때 실행
    }

    static getUserInfo(id) {
        //위 fs에 promises로 했기 때문에 fs는 promises를 리턴한다.
        return fs.readFile(dir.dirlist.dirdatabases + "/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id)
        }) //성공했을때 실행;
        .catch(console.error); //에러가 났을때 실행
    }

    static async save(userInfo) {
        // users.id.push(userInfo.id);
        // users.name.push(userInfo.name);
        // users.psword.push(userInfo.psword);0
        // return {success:true};
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            return new Error("이미 존재하는 아이디입니다.");
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        //데이터 추가
        fs.writeFile(dir.dirlist.dirdatabases + "/users.json", JSON.stringify(users));
        return {success: true};
}
}

module.exports = UserStorage;