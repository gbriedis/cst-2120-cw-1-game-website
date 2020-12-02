<!-- boilerplate and nav generation -->
<?php
    include('common.php');

    outputBoilerplate("Login");
    navigation();
?>

<!-- login content -->

<div class="login-form">
    <h1>Login</h1>

    <div class="form">
        <input type="text" placeholder="Username" autocomplete="off" name="password" required>

        <input type="text" placeholder="Password" autocomplete="off" name="password" required>
    </div>

    <a id="forgot-password" href="#">Forgot your password?</a>

    <button>Login</button>
    </div>
</div>

<!-- footer generation -->
<?php
    footer();
?>