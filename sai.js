document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission

    // Get values
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Basic empty checks
    if (username === "") {
        alert("Please enter username.");
        return;
    }

    if (email === "") {
        alert("Please enter email.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password === "" || confirmPassword === "") {
        alert("enter both password .");
        return;
    }

    // Password match check
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // If everything is valid
    alert("Registration successful!");
});
