<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    require("../connection/database.php");
    session_start();
    echo $_SESSION['coupon_email'];

?>