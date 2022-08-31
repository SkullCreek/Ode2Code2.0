<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    require("../connection/database.php");
    $user = $_POST['email'];
    $store_user = "INSERT INTO users(email)
    VALUES('$user')";
    if($db->query($store_user)){
        session_start();
        $_SESSION['email'] = $user;
        echo "success";
    }
    else{
        echo "database not created";
    }

?>