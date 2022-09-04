<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    require("../connection/database.php");
    $name = $_POST['name'];
    $number = $_POST['number'];
    $price = $_POST['price'];
    $qty = $_POST['qty'];
    $image = $_POST['image'];
    $store_product = "INSERT INTO products(number,name,price,quantity,image)
    VALUES('$number','$name','$price','$qty','$image')";
    if($db->query($store_product)){
        echo "success";
    }
    else{
        echo "Failed to store";
    }

?>