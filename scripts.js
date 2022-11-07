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

  errorDisplay.className = 'error active'
}

const checkFirstName = () => {
  if (firstName.checkValidity()) {
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

// form.addEventListener('submit', (e) => {
//   if (!firstName.validity.valid) {
//     inputError();
//     e.preventDefault();
//   } 
// })

// const validityCheck = () => {
//   if (!firstName.checkValidity()) {
//     errorDisplay.textContent = 'The first name entered is invalid.'
//   }

//   if (!lastName.checkValidity()) {
//     errorDisplay.textContent = 'The last name entered is invalid.'
//   }

//   if (!email.checkValidity()) {
//     errorDisplay.textContent = 'The email entered is invalid. It should be in the format of "example@example.com".'
//   }

//   if (!country.checkValidity()) {
//     errorDisplay.textContent = 'The country entered is not valid.'
//   }

//   if (!zipCode.checkValidity()) {
//     errorDisplay.textContent = 'The ZIP code entered is not valid.'
//   }

//   if (!password.checkValidity()) {
//     errorDisplay.textContent = 'The entered password does not include all necessary elements.'
//   }
//   if (!verifyPassword.checkValidity()) {
//     errorDisplay.textContent = 'The passwords provided do not match.'
//   }
// }

submitBtn.addEventListener('click', checkFirstName);
