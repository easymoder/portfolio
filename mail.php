<?php 

$myemail = 'hey@lauramessinger.com';
$name = $_POST['name']; 
$email_address = $_POST['email']; 
$message = $_POST['message']; 


$to = $myemail; 
$email_subject = "Form submission from: $name";
$email_body = "You received a new message. ".
"Here are the details:\n Name: $name \n Email: $email_address \n Message: \n $message"; 

$headers = "From: $myemail\n"; 
$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);

?>