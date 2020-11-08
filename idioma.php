<?php

//array con los idiomas permitidos
$idiomasPermitidos = array('es', 'ca');

//seleccionar un idioma por defecto
$idioma = 'es';

//recuperar el idioma del navegador
$idiomaNavegador = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

//comprobar que el idioma del navegador se encuentre dentro de los idiomas permitidos
if (in_array($idiomaNavegador, $idiomasPermitidos)) {
    $idioma = $idiomaNavegador;
}

//comprobar si el usuario ha pulsado sobre los enlaces de cambio de idioma
if (isset($_GET['idioma'])) {
    //verificar que el idioma seleccionado se encuentre entre los permitidos
    if (in_array($_GET['idioma'], $idiomasPermitidos)) {
        $idioma = $_GET['idioma'];
    }
}

//determinar en que página nos encontramos cuando se realiza el cambio de idioma
$archivo = basename($_SERVER['PHP_SELF']);
?>