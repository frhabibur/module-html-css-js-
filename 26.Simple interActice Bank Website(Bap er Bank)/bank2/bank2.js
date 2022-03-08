const loginButton = document.getElementById('login-button')
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password')
loginButton.addEventListener('click', function () {

    if (userEmail.value == 'sontan@baap.com' && userPassword.value == 'bank') {
        window.location.href = "banking2.html"
    }
    else {
        alert('invalid user')
    }
})