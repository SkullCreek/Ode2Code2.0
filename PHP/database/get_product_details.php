<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    require("../connection/database.php");
    $product_id = $_POST['ID'];

    $product_details = "SELECT * FROM products WHERE number = '$product_id'";
    $response_details = $db->query($product_details);
    $data = $response_details->fetch_assoc();
    echo json_encode($data);

?>