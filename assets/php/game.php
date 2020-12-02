<!-- boilerplate and nav generation -->
<?php

    include('common.php');

    outputBoilerplate("Game");
    navigation();

?>

<!-- game content -->

<div class="game-container">
    <div class="info-main">
        <h2>Hi [Name],</h2>
        <h2>From what I can see your best score is [6]</h2>
        <h2>From my calculations, you’re just as good as a [6th Grader].</h2>
        <h2>To see how you compare with the rest just go to the <a href="leaderboard.html">genius list</a></h2>
    </div>

    <div class="game-main">
        <h2>Time Remaining: 57s</h2>
        <h2>Score: 2/3</h2>
        <h1>8 * 8 = [Answer]</h1>
    </div>

    <div class="game-main-sub">
        <a href="#"><button id="restart-button">Restart</button></a>
        <a href="#"><button class="default-button">Rules</button></a>
        <a href="#"><button class="default-button">Report!</button></a>
    </div>
</div>
</div>

<!-- footer generation -->
<?php
    footer();
?>