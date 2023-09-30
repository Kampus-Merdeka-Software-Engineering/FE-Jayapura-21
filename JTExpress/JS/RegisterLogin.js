const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

//Side Bar
let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    navigation.classList.toggle('active');
}