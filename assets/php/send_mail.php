<?php

// Email address that you want the form to be submitted to.

$recieve_mails_at = "support@interack.in";

$homePage = "/";
   
if (!isset($_REQUEST['email'])) {
   header( "Location: $homePage" );
}

   // Form Fields
   $name = $_REQUEST['name'];
   $email = $_REQUEST['email'];
   $message = $_REQUEST['message'];
   $headers = 'From: '.$email."\r\n" .
        'Reply-To: '.$email."\r\n" .
        'X-Mailer: PHP/' . phpversion();

   $msg = 
   "Name: " . $name . "\r\n" . 
   "Email: " . $email . "\r\n" . 
   "Message: " . $message ;


   // Send mail
   $send_email = mail( "$recieve_mails_at", "Contact Form", $msg, $headers);
   
   echo ($send_email) ? 'success' : 'error';

?>