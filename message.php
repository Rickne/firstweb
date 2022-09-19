<?php
error_reporting(E_ERROR | E_PARSE);
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    if(!empty($email) && !empty($message)){
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
        $receiver = "rapprogpurp123@gmail.com";
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage: $message";
        $sender = "From: $email";

            if(mail($receiver, $subject, $body, $sender)){
                echo"Your message has been sent";
            }
            else{
                echo"Failed to send your message";
            }
        }
        else{
            echo"Invalid email address!";
        }
    }
    
?>