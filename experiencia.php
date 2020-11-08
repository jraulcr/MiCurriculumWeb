<?php

$datosExp = file_get_contents("./json/experiencia_$idioma.json");

if ($datosExp) {
    $datos = json_decode($datosExp, true);
    //$cuantosHay = count($datos["experiencia"]);
    $expers = $datos["experiencia"];

    function getExperiencia($expers) {
        echo "<ul id=\"experienciaLista\">";
        foreach ($expers as $exp) {
            echo "<li>";
            echo "<div class=\"experienciaPeriodo\">";
            echo "   <div class=\"empleo-cargo\">";
            echo "       <h3>$exp[cargo]</h3>";
            echo "       <hr/>";
            echo "       <h4>$exp[empresa]</h4>";
            echo "   </div>";
            echo "   <div class=\"periodoTrabajado\">";
            echo "       <h4>$exp[fecha_periodo]</h4>";
            echo "   </div>";
            echo "   <div class=\"descripcion\">";
            echo "       <p>$exp[funciones]</p>";
            echo "   </div>";
            echo "   </div>";
            echo "</li>";
        }
        echo "</ul>";
    }
} else {
    debug_console_formac("Error en la carga del JSON en experiencia.php");
}
?>

<section id="experiencia">
    <div class="ancla" id="scr2"></div>
    <div class="titulo">
        <img class="iconoTitulo" src="img/experiencia.png" alt="experiencia"> 
        <h2><?= $experiencia ?></h2>
    </div>     
    <div style="clear:both"></div>
    <div class="bloqueExperiencia">
        <?php
        getExperiencia($expers);
        ?>
    </div>
</section>
<div style="clear:both"></div>