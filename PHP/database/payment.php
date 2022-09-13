<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
require("../connection/database.php");

// fetching data

$customer_email = $_POST['email'];
$customer_name = $_POST['mobile'];
$customer_date = $_POST['date'];


echo $customer_email;




// payment gateway

// $ch = curl_init();

// curl_setopt($ch, CURLOPT_URL, 'https://api.instamojo.com/v2/payment_requests/');
// curl_setopt($ch, CURLOPT_HEADER, FALSE);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
// curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
// curl_setopt($ch, CURLOPT_HTTPHEADER,array('Authorization: Bearer y70kak2K0Rg7J4PAL8sdW0MutnGJEl'));

// $payload = Array(
//   'purpose' => 'Billing',
//   'amount' => '2500',
//   'buyer_name' => 'John Doe',
//   'email' => 'foo@example.com',
//   'phone' => '9999999999',
//   'redirect_url' => 'http://www.example.com/redirect/',
//   'send_email' => 'True',
//   'send_sms' => 'True',
//   'webhook' => 'http://www.example.com/webhook/',
//   'allow_repeated_payments' => 'False'
// );

// curl_setopt($ch, CURLOPT_POST, true);
// curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
// $response = curl_exec($ch);
// curl_close($ch); 

?>
