<!-- boilerplate and nav generation -->
<?php
    include('common.php');

    outputBoilerplate("Register");
    navigation();
?>

<!-- register content -->

<div class="register-form">
    <h1>Register</h1>

    <div class="form">
        <form name="form1" onsubmit="return register()">
                <input id="username" type="text" placeholder="Username" autocomplete="off" required>

                <input id="password" type="text" placeholder="Password" autocomplete="off" required>
                <input id="confirmPassword" type="text" placeholder="Confirm Password" autocomplete="off"  required>

                <input id="email" type="text" placeholder="E-mail address" autocomplete="off" required>
                <input id="phoneNumber" type="text" placeholder="Phone Number" autocomplete="off"  required>
            </form>
    </div>

        <input type="checkbox" name="terms">
        <label for="terms">Confirm terms and conditions</label>
    
        <button id="btnRegister">Register</button>
</div>

</div>

<!-- footer generation -->
<?php
    footer();
?>