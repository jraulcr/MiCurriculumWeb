<?php

$datosImgLogo = file_get_contents("./json/conocimientos_es.json");

if ($datosImgLogo) {
    $dat = json_decode($datosImgLogo, true);
    //$cuantosHay = count($dat["logosImg"]);
    $logosImagen = $dat["logosImg"];

    function getLogosImg($logosImagen) {
        $contador = 0;
        echo "<div id=\"conocimientoLista\" class=\"auto-grid\">";
        foreach ($logosImagen as $logoImg) {
            $contador = $contador + 1;
            echo "<div><img src=\"$logoImg[urlImgLogo]\" alt=\"$logoImg[altImagen]\"></div>";
        }
        echo "</div>";
    }

} else {
    debug_console_conoc("Error en la carga del JSON en conocimientos.php");
}
?>
<section id="conocimientos">
    <div class="ancla" id="scr4">
        <div class="titulo">
            <img class="iconoTitulo" src="img/conocimientos.png" alt="conocimientos"> 
            <h2><?= $conocimientos ?></h2>
        </div>
        <div style="clear:both"></div>
        <div class="conocimientos-contenedor">
            <?php
            getLogosImg($logosImagen);
            ?>
        </div>
    </div>
</section>
<div style="clear:both"></div>