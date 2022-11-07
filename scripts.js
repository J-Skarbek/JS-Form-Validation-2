const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const country = document.getElementById('country')
const zipCode = document.getElementById('zip-code')
const password = document.getElementById('password')
const verifyPassword = document.getElementById('verify-password')
const submitBtn = document.getElementById('submit')
const errorDisplay = document.querySelector('.error-display p')

// const validityCheck = () => {
//   if ((!firstName.checkValidity()) || (!lastName.checkValidity()) || (!email.checkValidity()) || (!country.checkValidity()) || (!zipCode.checkValidity()) || (!password.checkValidity()) || (!verifyPassword.checkValidity())) {
//     console.log('there are problems here.')
//     errorDisplay.textContent = 'Problems have been detected.'
//   }
// }

const inputError = () => {
  if (firstName.validity.valueMissing) {
    errorDisplay.textContent = 'You need to enter your first name.'
  }
}

const checkFirstName = () => {
  if (firstName.checkValidity()) {
    errorDisplay.textContent = 'test';
    console.log('good to go');
  } else {
    inputError();
  }
}

// firstName.addEventListener('input', () => {
//   if (firstName.valid) {
//     errorDisplay.textContent = '';
//   } else {
//     inputError();
//   }
  // firstName.setCustomValidity('');
  // firstName.checkValidity();
// });

firstName.addEventListener('invalid', () => {
  if (firstName.valueMissing) {
    firstName.setCustomValidity('Enter your first name.')
    errorDisplay.textContent = 'you did not enter your first name.'
  } else if (!firstName.patternMismatch) {
    console.log(firstName.setCustomValidity('First Names should only include letters.'))
  }
})



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

// submitBtn.addEventListener('click', validityCheck)

submitBtn.addEventListener('click', checkFirstName);
