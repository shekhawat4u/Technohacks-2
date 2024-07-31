document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate inputs
    let isValid = true;

    if (username.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters long.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // If all inputs are valid
    if (isValid) {
        document.getElementById('successMessage').innerText = 'Registration successful!';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('registrationForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.innerText = '';
        element.style.display = 'none';
    });

    const successMessage = document.getElementById('successMessage');
    successMessage.innerText = '';
    successMessage.style.display = 'none';
}
