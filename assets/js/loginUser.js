
function login() {
    username = document.getElementById("username").value;
    if(localStorage[username] === undefined){
        alert("Username not found");
        return;
    }
    else {
        password = document.getElementById("password").value;
        let parssedUsers  = JSON.parse(localStorage[username]);
        if (parssedUsers.password == password) {
            let user = parssedUsers.username;
            sessionStorage.setItem("username", JSON.stringify(user));
            alert("Welcome " + user);
        }
        else {
            alert("username or password is incorrect");
        }
    }

}
