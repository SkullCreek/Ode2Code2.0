<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    require("../connection/database.php");
    $user = $_POST['email'];
    $a=array();

    $user_coupons = "SELECT offer,description,code,id FROM coupons WHERE email = '$user'";
    $response = $db->query($user_coupons);
    while($data = $response->fetch_assoc()){
        array_push($a,$data);
    }
    echo json_encode($a);

?>