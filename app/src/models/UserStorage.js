"use strict";

//#을 붙여주면 private 변수가 된다. 여기에서는 개발자가 은닉화까지 설명을 하기 위해 이런식으로 #을 붙였다. 그리고 밑에 별도의 게터 메서드를 정의했음. #을 빼도 문제는 없으나 게터세터의 은닉화와는 거리가 좀 있어짐.
class UserStorage {
    static #users = {
        id : ["woorimIT", "나개발", "김팀장"],
        psword : ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"]
    };

    static getUsers(...fields) { //...변수명은 인자값으로 들어오는게 몇개든지 상관없게 만든다. 인자값으로 들어올때 작은따옴표로 처리해야 한다.
        let sum = [1,2,3,4,5,6];
        var a = sum.reduce((tot, el, i) =>{
                return tot + el
        }, 0);
        console.log(a);
        const users = this.#users;
        // console.log(users);
        const newUsers = fields.reduce((speedup, field, speedup98) => {
            console.log(speedup, field, speedup98);
            // if (users.hasOwnProperty(field)) {
            //     newUsers[field] = users[field];
            // }
            // return newUsers;
            
        }, {});
        // console.log(newUsers);
        return ;
    }
}

module.exports = UserStorage;