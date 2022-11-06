const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const country = document.getElementById('country')
const zipCode = document.getElementById('zip-code')
const password = document.getElementById('password')
const verifyPassword = document.getElementById('verify-password')
const submitBtn = document.getElementById('submit')
const errorDisplay = document.querySelector('.error-display p')

const checkValidity = () => {
  if ((!firstName.checkValidity()) || (!lastName.checkValidity()) || (!email.checkValidity()) || (!country.checkValidity()) || (!zipCode.checkValidity()) || (!password.checkValidity()) || (!verifyPassword.checkValidity())) {
    console.log('there are problems here.')
    errorDisplay.textContent = 'Problems have been detected.'
  }
}

submitBtn.addEventListener('click', checkValidity)