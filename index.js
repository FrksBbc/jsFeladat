const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validalas();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validalas = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'A felhasználó név kötelező!');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Az email cím kötelező!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Helytelen formátumú email cím!');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'A jelszó megadása kötelező!');
    } else if (passwordValue.length < 6 ) {
        setError(password, 'A jelszónak minimum 6 karakternek kell lennie!')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Erősítsd meg a jelszavad!');
    } else if (password2Value !== passwordValue) {
        setError(password2, "A két jelszó nem megfelelő!");
    } else {
        setSuccess(password2);
    }

};
