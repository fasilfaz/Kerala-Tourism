let email = document.getElementById('email');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let btn = document.getElementById('btn');

const isEmail = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

btn.addEventListener('click', ()=>{
    if(email.value.trim() == ''){
        alert('enter your email')
    }else if(!isEmail.test(email.value.trim())){
        alert('enter email in correct format')
    }else if(password1.value.trim() ==''){
        alert('enter your password')
    }else if(!isPassword.test(password1.value.trim())){
        alert('password must have minimum eight characters, at least one letter and one number')
    }else if(password2.value.trim() != password1.value.trim()){
        alert('password mismatch')
    }else{
        alert('success')
    }
})