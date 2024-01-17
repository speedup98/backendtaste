"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);// 여기서 login은 만들어줘야 하는 함수이다.

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    }
    console.log(req);
}

