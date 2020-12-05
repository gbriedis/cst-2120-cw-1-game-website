const logout = document.getElementById("logout");

function login() {
    let parssedUsers  = JSON.parse(localStorage.getItem('users'));
    let usrInput = {};
    let login = [];
    usrInput.username = document.getElementById("username").value;
    usrInput.password = document.getElementById("password").value;

    if (usrInput.username == parssedUsers.username && usrInput.password == parssedUsers.password) {
        login.push(parssedUsers.username);
        sessionStorage.setItem('Username', login);
        logout.textContent = "Logout";
    }
    else {
        alert("username or password is incorrect");
    }

}

