<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    require("../connection/database.php");
    $t_date = date("Y");
    $daily_sale = "SELECT SUM(Amount) AS total FROM customer WHERE  YEAR(Date) = '$t_date'";
    if($response = $db->query($daily_sale)){
        $data = $response->fetch_assoc();
        echo $data['total'];
    }
    else{
        echo "error";
    }

?>