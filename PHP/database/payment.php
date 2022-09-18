<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
require("../connection/database.php");

// fetching data

$customer_email = $_POST['email'];
$customer_name = $_POST['name'];
$customer_date = $_POST['date'];
$amt = $_POST['amt'];
$address = $_POST['address'];
$customer_mobile = $_POST['mobile'];

// session_start();
// $_SESSION["coupon_email"] = $customer_email;
// $_SESSION["password"] = $customer_name;

$sql_query = "INSERT INTO customer (customerName, customerEmail, Amount, Address, customerMobile)
VALUES ('$customer_name', '$customer_email', '$amt', '$address','$customer_mobile')";
if($db->query($sql_query)){


    $alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $pass = array();
    $alphaLength = strlen($alphabet) - 1;
    for ($i = 0; $i < 6; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    $offer = rand(0, 50);
    $coupon_code = implode($pass);
    $coupon_query = "INSERT INTO coupons (offer, description, code, email)
    VALUES ('$offer', 'This is a dummy coupon', '$coupon_code', '$customer_email')";
    if($db->query($coupon_query)){

        $user_query = "INSERT INTO users (email)
        VALUES ('$customer_email')";
        if($db->query($user_query)){
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, 'https://test.instamojo.com/api/1.1/payment-requests/');
            curl_setopt($ch, CURLOPT_HEADER, FALSE);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
            curl_setopt($ch, CURLOPT_HTTPHEADER,
                        array("X-Api-Key:test_ab4aeaa7a5ab1c922590cbef728",
                            "X-Auth-Token:test_c5e2ca73c1a597e2c9c9feab4c9"));
            $payload = Array(
                'purpose' => 'ELECTRONICS',
                'amount' => $amt,
                'phone' => $customer_mobile,
                'buyer_name' => $customer_name,
                'redirect_url' => 'http://localhost/Ode2Code2.0/billingsystem/PHP/database/redirect.php',
                'send_email' => true,
                'send_sms' => true,
                'email' => $customer_email,
                'allow_repeated_payments' => false
            );
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
            $response = curl_exec($ch);
            curl_close($ch);
            $response = json_decode($response);
            echo $response->payment_request->longurl;
        }
        else{
            echo "error";
        }
    }
    else{
        echo "error";
    }
}
else{
    echo "error";
}







?>
