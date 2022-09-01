<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    require("../connection/database.php");
    $user = $_POST['email'];
    $user_title = "SELECT title FROM users WHERE email = '$user'";
    $response = $db->query($user_title);
    $data = $response->fetch_assoc();
    echo $data['title'];

?>