const registerForm = document.getElementById("registerForm"),
    loginForm = document.getElementById("loginForm"),
    errorText = document.getElementById("error"),
    loginError = document.getElementById("loginError");

registerForm.addEventListener("submit", (e) => {
    let messages = [];

    // password validation (if password is the same, password is <= 3  && >= 16)
    if(password.value !== confirmPassword.value) {
        messages.push("Passwords do not match");
    }
    if (password.value.length < 3) {
        messages.push("Password is too short");
    }
    if (password.value.length >= 16 ) {
        messages.push("Password is too long");
    }
    // phone validation (phone number is less than  11 digits long)
    if (phoneNumber.value.length < 11) {
        messages.push("No longer than 11 digits long");
    }    

    if (messages.length > 0) {
        e.preventDefault();
        errorText.textContent = messages.join(", ");
    }
    else {
        register();
    }
});


function register() {
    let user = {
        ID: "#" + (Math.floor(Math.random(100, 999) * 999)),
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        cpassword: document.getElementById("confirmPassword").value,
        email: document.getElementById("email").value,
        pnumber: document.getElementById("phoneNumber").value
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);

    localStorage[user.username] = JSON.stringify(user);
    alert("Successfully Registered");
}
