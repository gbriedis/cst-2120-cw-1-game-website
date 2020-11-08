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
        <input type="text" placeholder="Username" autocomplete="off" name="password" required>

        <input type="text" placeholder="Password" autocomplete="off" name="password" required>
        <input type="text" placeholder="Confirm Password" autocomplete="off" name="password" required>

        <input type="text" placeholder="E-mail address" autocomplete="off" name="email" required>
        <input type="text" placeholder="Phone Number" autocomplete="off" name="phone-number" required>
    </div>

        <input type="checkbox" name="terms">
        <label for="terms">Confirm terms and conditions</label>
    
    <button>Register</button>
</div>

</div>

<!-- footer generation -->
<?php
    footer();
?>