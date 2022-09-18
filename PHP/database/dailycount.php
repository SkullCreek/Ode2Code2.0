<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
require("../connection/database.php");
$t_date = date("Y-m-d");
$daily_sale = "SELECT COUNT(Amount) AS unit FROM customer WHERE Date = '$t_date'";
if($response = $db->query($daily_sale)){
    $data = $response->fetch_assoc();
    echo $data['unit'];
}
else{
    echo "error";
}

?>