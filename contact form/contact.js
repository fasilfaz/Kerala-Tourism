let nam = document.getElementById('name');
let email1 = document.getElementById('email1');
let phone = document.getElementById('phone');
let message = document.getElementById('message');
let button = document.getElementById('btn2');

const isName = /^[A-Za-z]*\s{1}[A-Za-z]*$/
const isEmail1 = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
button.addEventListener('click', ()=>{
    if(nam.value.trim() == ''){
        alert('enter your name')
    }else if(!isName.test(nam.value.trim())){
        alert('enter your full name')
    }else if(email1.value.trim() == ''){
        alert('enter your email id')
    }else if(!isEmail1.test(email1.value.trim())){
        alert('password must have minimum eight characters, at least one letter and one number')
    }else if()
})

