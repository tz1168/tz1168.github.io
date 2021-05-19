<?php

$name= $_POST['name'];
$visitor_email= $_POST['email'];
$message=$_POST['message'];

$email_from='1542215269@qq.com';

$email_subject="New Form Submission";

$email_body="User Name:$name.\n".
               "User Email: $visitor_email.\n".
                  "User Message: $message.\n";

$to="tz1168@nyu.edu";
$headers="From:$email_from \r\n";
$headers .="Reply-To:$visitor_email \r\n";

mail($to,$email_subjecr,$email_body,$headers);

header("Location: contact.html");


?>