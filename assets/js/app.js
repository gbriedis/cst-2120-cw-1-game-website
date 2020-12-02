const hero = document.querySelector(".hero");
const header = document.querySelector(".header-text");
const subText = document.querySelector(".header-sub-text");
const imgText = document.querySelector(".img-text");

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "85%", ease: Power2.easeInOut});
tl.fromTo(header, 0.5, {opacity: 0, x: 50}, {opacity: 1, x:0, ease: Power2.easeInOut}, "-=0.5");
tl.fromTo(subText, 0.5, {opacity: 0, x: -70}, {opacity: 1, x:0, ease: Power2.easeInOut}, "-=0.5");
tl.fromTo(imgText, 0.5, {opacity: 0, y: -30}, {opacity: 1, y:0, ease: Power2.easeInOut}, "-=0.5");

function register() {

    let users = {};

    users.username = document.getElementById("username").value;
    users.password = document.getElementById("password").value;
    users.confirmPassword = document.getElementById("confirmPassword").value;
    users.email = document.getElementById("email").value;
    users.phoneNumber = document.getElementById("phoneNumber").value;

    function validateForm() {
        if ((users.username == "") && (users.password == "")) {
            alert("There are some empty fields");
            return false;
        }
        
        if (users.password !== users.confirmPassword) {
            alert ("Password do not match");
            return false;
        }

        else {
            alert("succesful registration");
        }
    }

    validateForm();

    function generateID() {
        // unique ID generation, rules: First 2 letters of username, random 3 numbers
        uniqueID = '#' + users.username.substr(0,2).toUpperCase() + (Math.floor(Math.random(100, 999) * 999));
    
        return uniqueID;
    }

    localStorage[generateID.call()] = JSON.stringify(users);

    console.log(localStorage);
}