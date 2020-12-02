<!-- boilerplate and nav generation -->
<?php
    include('common.php');

    outputBoilerplate("Home");
    navigation("Home");
?>

<!-- header content -->
<header>
    <section>
        <div class="hero">
            <img src="assets/img/header-img.png" alt="Image of an Abacus">
            <h1 class="header-text">Wake up Samurai!</h1>
            <h2 class="header-sub-text">We've got mathematical<br> equations to solve</h2>
            <a href="game.php"><button>Play</button></a>
            <div class="img-text">try your luck</div>
        </div>
    </section>
</header>
</div>

<!-- footer generation -->
<?php
    footer();
?>

<!-- link to Tweenmax and TimelineMax javascript, also link to javascript file -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" integrity="sha512-8Wy4KH0O+AuzjMm1w5QfZ5j5/y8Q/kcUktK9mPUVaUoBvh3QPUZB822W/vy7ULqri3yR8daH3F58+Y8Z08qzeg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js" integrity="sha512-lJDBw/vKlGO8aIZB8/6CY4lV+EMAL3qzViHid6wXjH/uDrqUl+uvfCROHXAEL0T/bgdAQHSuE68vRlcFHUdrUw==" crossorigin="anonymous"></script>
<script type="text/javascript" src="/assets/js/app.js"></script>