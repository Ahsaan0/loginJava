// Signup function
function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (username && password) {
        // Check if user already exists
        if (localStorage.getItem(username)) {
            document.getElementById('message').innerText = 'User already exists. Please login.';
        } else {
            // Store user details in local storage
            localStorage.setItem(username, password);
            document.getElementById('message').innerText = 'Signup successful! Please login.';
        }
    } else {
        document.getElementById('message').innerText = 'Please enter both username and password for signup.';
    }
}

// Login function
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        const storedPassword = localStorage.getItem(username);
        if (storedPassword === password) {
            document.getElementById('message').innerText = 'Login successful!';
        } else {
            document.getElementById('message').innerText = 'Invalid username or password.';
        }
    } else {
        document.getElementById('message').innerText = 'Please enter both username and password for login.';
    }
}
