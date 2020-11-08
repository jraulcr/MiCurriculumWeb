<?php
//cargar el fichero de multiidioma
include "idioma.php";
//cargar el fichero de variables que corresponda al idioma seleccionado
include "literales_$idioma.php";
?>

<!DOCTYPE html>

<html lang="<?= $idioma ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width" initial-scale="1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="robots" content="noindex" />
        <meta name="robots" content="noimageindex" />
        <meta name="googlebot" content="noindex" />
        <meta name="googlebot" content="noimageindex" />

        <title>Currículum de Juan Raúl Crespo</title>

        <link rel="stylesheet" href="css/estilos.css">
        <link rel="shortcut icon" href="../img/ico/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="../img/ico/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="../img/ico/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" href="../img/ico/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" href="../img/ico/touch-icon-iphone4.png" />

        <script src="js/jquery-3.4.1.js"></script>
        <!-- Elimina los prefijos en los CSS (https://leaverou.github.io/prefixfree) -->
        <script src="js/prefixfree.min.js"></script>
        <script src="js/scripts.js"></script>        
    </head>

    <body ondragstart="return false" oncontextmenu="return false" onselectstart="return false" onkeydown="return false"> 
        <?php
        require('menu.php');
        require('presentacion.php');
        require('experiencia.php');
        require('formacion.php');
        require('conocimientos.php');
        ?>
    </body>
</html>