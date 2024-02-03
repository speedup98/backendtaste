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
    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => 
        res.json()
    )
    .then((res) => {
        if (res.success) {
            location.href="/";
    } else {
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error(new Error("로그인 중 에러 발생"));
    });
}

