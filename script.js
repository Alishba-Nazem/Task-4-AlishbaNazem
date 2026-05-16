const form = document.getElementById('form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    let isValid = true;

    clearErrors();

    // NAME VALIDATION

    if(nameInput.value.trim() === ''){

        showError(nameInput, 'Name is required');
        isValid = false;

    }

    // EMAIL VALIDATION

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailInput.value.trim() === ''){

        showError(emailInput, 'Email is required');
        isValid = false;

    }

    else if(!emailPattern.test(emailInput.value)){

        showError(emailInput, 'Enter valid email');
        isValid = false;

    }

    // PASSWORD VALIDATION

    if(passwordInput.value.trim() === ''){

        showError(passwordInput, 'Password is required');
        isValid = false;

    }

    else if(passwordInput.value.length < 6){

        showError(passwordInput, 'Password must be at least 6 characters');
        isValid = false;

    }

    // CONFIRM PASSWORD

    if(confirmPasswordInput.value !== passwordInput.value){

        showError(confirmPasswordInput, 'Passwords do not match');
        isValid = false;

    }

    // SUCCESS

    if(isValid){

        successMessage.textContent = 'Form submitted successfully!';

        form.reset();

    }

});


// SHOW ERROR FUNCTION

function showError(input, message){

    const inputGroup = input.parentElement;

    const error = inputGroup.querySelector('.error');

    error.textContent = message;

}


// CLEAR ERRORS

function clearErrors(){

    const errors = document.querySelectorAll('.error');

    errors.forEach((error) => {

        error.textContent = '';

    });

    successMessage.textContent = '';

}