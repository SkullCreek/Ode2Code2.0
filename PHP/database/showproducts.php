<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    require("../connection/database.php");
    $products=array();
    $all_products = "SELECT name,number,price,quantity,image FROM products";
    $response_products = $db->query($all_products);
    while($data_products = $response_products->fetch_assoc()){
        array_push($products,$data_products);
    }
    echo json_encode($products);

    $db->close();

?>