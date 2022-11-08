const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const verifyPassword = document.getElementById('verify-password');
const submitBtn = document.getElementById('submit');
const errorDisplay = document.querySelector('.error-display p');
const form = document.querySelector('.form-body');

const inputError = () => {
  if (firstName.validity.valueMissing) {
    errorDisplay.textContent = 'You need to enter your first name.'
  } else if (firstName.validity.patternMismatch) {
    errorDisplay.textContent = 'The first name should only contain letters.'
  }

  if (lastName.validity.valueMissing) {
    errorDisplay.textContent = 'You need to enter your last name.'
  } else if (lastName.validity.patternMismatch) {
    errorDisplay.textContent = 'The last name should only contain letters.'
  }

  if (email.validity.valueMissing) {
    errorDisplay.textContent = 'You need to enter your email address'
  } else if (lastName.validity.typeMismatch) {
    errorDisplay.textContent = 'The email address should follow the format of "example@example.com".'
  }

  if (country.validity.valueMissing) {
    errorDisplay.textContent = 'You need to enter your country.'
  } else if (lastName.validity.patternMismatch) {
    errorDisplay.textContent = 'The country should only contain letters.'
  }

  if (zipCode.validity.valueMissing) {
    errorDisplay.textContent = 'You need to enter your ZIP code.'
  } else if (zipCode.validity.patternMismatch) {
    errorDisplay.textContent = 'The ZIP code should contain only numbers.'
  }

  if (password.validity.valueMissing) {
    errorDisplay.textContent = 'You need to create a password.'
  } else if (password.validity.patternMismatch) {
    errorDisplay.textContent = 'The password is not in the correct format.'
  }

  if (verifyPassword.validity.valueMissing) {
    errorDisplay.textContent = 'Re-enter your password'
  } else if (verifyPassword.validity.patternMismatch) {
    errorDisplay.textContent = 'The password is not in the correct format.'
  }

  errorDisplay.className = 'error active'
}

const checkFirstName = () => {
  if (firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() && country.checkValidity() && zipCode.checkValidity() && password.checkValidity() && verifyPassword()) {
    errorDisplay.textContent = 'test';
    console.log('good to go');
  } else {
    inputError();
  }
}

firstName.addEventListener('input', () => {
  if (firstName.validity.valid) {
    firstName.textContent = '';
    firstName.className = 'error';
  } else {
    inputError();
  }
})

submitBtn.addEventListener('click', checkFirstName);
