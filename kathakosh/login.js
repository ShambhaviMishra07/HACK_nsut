document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        let usernameError = document.getElementById("usernameError");
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");

        let isValid = true;

        // Clear previous error messages
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";

        // Validate Name
        if (!name) {
            usernameError.textContent = "Please enter your name.";
            isValid = false;
        }

        // Validate Email
        if (!email) {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {  // Email format validation
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        }

        // Validate Password
        if (!password) {
            passwordError.textContent = "Please enter your password.";
            isValid = false;
        } else if (password.length < 6) {  // Ensure password is at least 6 characters
            passwordError.textContent = "Password must be at least 6 characters.";
            isValid = false;
        }

        // If all fields are valid, proceed
        if (isValid) {
            alert(`Welcome, ${name}! Your email: ${email}`);
            window.location.href = "home.html"; 
        }
    });
});