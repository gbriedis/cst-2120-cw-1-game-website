<!-- boilerplate and nav generation -->
<?php
    include('common.php');
    include('score.php');

    outputBoilerplate("Leaderboard");
    navigation();


// leaderboard content 

    generateLeaderboard();

// footer generation 
    footer();
?>