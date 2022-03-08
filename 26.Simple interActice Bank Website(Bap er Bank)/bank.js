document.getElementById('login-button').addEventListener('click', function (e) {
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    if (userEmail.value == 'sontan@baap.com' && userPassword.value == 1234) {
        window.location.href = 'banking.com.html'
    }
    else {
        alert('worng password')
    }
})