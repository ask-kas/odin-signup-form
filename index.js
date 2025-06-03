const form = document.querySelector('form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

function confirmPasswordValidity() {
    if (confirmPassword.value && password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match.');
    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.addEventListener('input', function () {
    confirmPasswordValidity();
});

confirmPassword.addEventListener('onkeyup', confirmPasswordValidity);

form.addEventListener('submit', function (e) {
    confirmPasswordValidity();
    if (!form.checkValidity()) {
        e.preventDefault();
    }
});
