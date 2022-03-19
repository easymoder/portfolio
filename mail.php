<?php 

$myemail = 'hey@lauramessinger.com';
$name = $_POST['name']; 
$email_address = $_POST['email']; 
$message = $_POST['message']; 


$to = $myemail; 
$email_subject = "form submission from $name";
$email_body = " u got a new message. \n name: $name \n email: $email_address \n message: \n $message"; 

$headers = "From: $myemail\n"; 
$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);

?>