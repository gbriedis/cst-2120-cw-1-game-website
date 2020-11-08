<?php

function generateLeaderboard() {
    $leaderboardPlace = array("1", "2", "3", "4", "5", "6", "7");
    $leaderboardUsername = array("Alpha", "Bravo", "Charlie", "Delta", "Echo", "Fox", "Ginters");
    $leaderboardScore = array("14", "12", "10", "10", "9", "8", "7");

    echo'<table class="leaderboard">';

    echo '<th>Place</th>' . '<th>Username</th>' . '<th>Score</th>';
    for($x = 0; $x < count($leaderboardPlace); $x++){
        echo '<tr>';
        echo '<th>' . $leaderboardPlace[$x] . '</th>';
        echo '<th>' . $leaderboardUsername[$x] . '</th>';
        echo '<th>' . $leaderboardScore[$x] . '</th>';
    }
    echo'</tr>';
    echo'</table>';
    echo'</div>';

}