<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $message = $_POST['message'];
    $formcontent="De: $name \nAsunto: $asunto \nEmail: $email \nMensaje: $message" ;
    $recipient = "jucepoxtan@gmail.com";
    $subject = "Formulario de contacto";
    $mailheader = "Correo: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo"<script type=\"text/javascript\">alert('El formulario fue enviado, me comunicaré contigo :)'); window.location='index.html';</script>";
?>

