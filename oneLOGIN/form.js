const mainContent = document.querySelector('.main-content');
const form = document.createElement('form');
const h = document.createElement('h1');
const userName = document.createElement('input');
const password = document.createElement('input');
const login = document.createElement('input');

form.className = 'box';
// form.classList.add('box')
mainContent.appendChild(form);

form.appendChild(h);
h.innerHTML = 'LOGIN';

userName.type = 'text';
userName.placeholder = 'Username';
form.appendChild(userName);

password.type = 'password';
password.placeholder = 'Password';
form.appendChild(password);

login.type = 'submit';
login.value = 'Login';
form.appendChild(login);

login.addEventListener('click', () => {
    if ('1' === userName.value && '1' === password.value) {
        window.location="two.html";
    }
    else {
        alert('false');
    }
});



