function logout() {
    let user = JSON.parse(sessionStorage.getItem("username"));
    if (user == null) {
        alert("You're not logged in");
    }
    else {
        sessionStorage.removeItem("username");
        alert("Logout Successful");
    }
}
