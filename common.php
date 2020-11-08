<?php

// Outputs Boilerplate for the website including title
function outputBoilerplate($title) {
    echo'<!DOCTYPE html>';
    echo'<html lang="en">';
    echo'<head>';
    echo'<meta charset="UTF-8">';
    echo'<meta name="viewport" content="width=1440px, initial-scale=1.0">';
    echo'<title>'. $title .'</title>';
    echo'<link rel="stylesheet" href="assets/css/stylesheet.css">';
    echo'<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">';
    echo'</head>';
    echo'<body>';
}

// nav content 
function navigation() {

    // main nav
    echo'<div class="container">';
    echo'<nav>';
    echo'<a id="Logo" href="index.php">Ginters</a>';
    echo'<div class="main-nav">';
    echo'<ul>';

    //Array of pages to link to
    $mainNav = array("Home", "Game", "Genius List");
    $linkAddresses = array("index.php", "game.php", "leaderboard.php", "login.php", "register.php");
    
    //Output main navigation
    for($x = 0; $x < count($mainNav); $x++){
        echo '<li>';
        echo '<a ';
        echo 'href="' . $linkAddresses[$x] . '">' . $mainNav[$x] . '</a>' . '</li>';
    }
    echo'</ul>';
    echo'</div>';
    
    //  sub nav
    echo'<div class="sub-nav">';
    echo'<ul>';

    $subNav = array("Login", "Register");

    // Output for the sub nav
    for($x = 0; $x < count($subNav); $x++){
        echo '<li>';
        echo '<a ';
        echo 'href="' . $linkAddresses[$x+3] . '">' . $subNav[$x] . '</a>' . '</li>';
    }
    echo'</ul>';
    echo'</div>';
    echo'</nav>';
}

// footer conent
function footer() {
    echo'<div class="footer-bg">';
    echo'<div class="container">';
    echo'<div class="footer">';
    echo'<div class="footer-left-content">';
    echo'<h4>Some of my social links</h4>';
    echo'<div class="footer-social-links">';
    echo'<a href="#">';
    echo'<img class="social-media" src="/assets/img/facebook.svg" alt="Social media link to my Facebook page">';
    echo'</a>';
    echo'<a href="#">';
    echo'<img class="social-media" src="/assets/img/linkedin.svg" alt="Social media link to my Facebook page">';
    echo'</a>';
    echo'<a href="#">';
    echo'<img class="social-media" src="/assets/img/twitter.svg" alt="Social media link to my Facebook page">';
    echo'</a>';
    echo'</div></div>';
    echo'<div class="footer-right-content">';
    echo'<h4>If you haven’t registered yet,<br> you can do so by <a href="register.php">clicking here</a></h4>';
    echo'</div></div></div></div>';
}