<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $message = $_POST['message'];
    $formcontent="De: $name \n Asunto: $asunto \n Email: $email \n Mensaje: $message" ;
    $recipient = "jucepoxtan@gmail.com";
    $subject = "Formulario de contacto";
    $mailheader = "Correo: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    // echo "Gracias por contactarte!" . " -" . "<a href='index.html' style='text-decoration:none; color:#ff0099; background: black; text-align: center;'> Regresar</a>";
    echo"<script type=\"text/javascript\">alert('El formulario fue enviado, me comunicare contigo :)'); window.location='index.html';</script>"; 
    // echo "swal("Good job!", "You clicked the button!", "success")"; 
?>