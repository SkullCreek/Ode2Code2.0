<?php

    $db = new mysqli("localhost","root","","billing");
    if($db->connect_error){
        die("Database Not Connected");
    }

?>