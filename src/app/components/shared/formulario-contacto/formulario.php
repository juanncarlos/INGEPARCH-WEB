<?php

$destino = "juann200913@gmail.com";
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$asunto = $_POST['asunto'];


$header = "Enviado desde la pagina de jc";
$contenido = "Nombre: " . $nombre  . "\nCorreo: " . $email . "\nTelefono: " . $telefono . "\nMensaje: " . $asunto;

mail($destino,"Contacto", $contenido);
echo "<script> alert('El mensaje fue enviado correctamente'); </script>";
echo "<script> setTimeout(\"location.href='index.html'\", 1000)</script>";
?>