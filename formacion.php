<?php
$datosCursos = file_get_contents("./json/cursos_$idioma.json");

if ($datosCursos) {
    $datos = json_decode($datosCursos, true);
    $hay = count($datos["cursos"]);
    $cursos = $datos["cursos"];
    $verCertifLiteral = $verCertificado;

    function getFormacion($cursos, $verCertifLiteral) {
        echo "<ul id=\"formacionLista\">";
        foreach ($cursos as $curso) {

            echo "<li style=\"display: none;\">";
            echo "<div class=\"content\">";
            echo "<div class=\"curso\">";
            echo "<h3>$curso[nombre_curso]</h3>";
            echo "<a title=\"$verCertifLiteral\" href=\"$curso[urlCert]\" 
                    target=\"_blank\"><div class=\"titulacionImg\"></div></a>";
            echo "</div>";
            echo "<h4>$curso[academia]</h4>";
            echo "</div>";
            echo "<div class=\"point\"></div>";
            echo "<div class=\"date\">";
            echo "<h4>$curso[fecha]</h4>";
            echo "</div>";
            echo "</li>";
        }
        echo "</ul>";
    }

} else {
    debug_console_formac("Error en la carga del JSON en formacion.php");
}
?>

<section id="formacion">
    <div class="ancla" id="scr3"></div>
    <div class="titulo">
        <img class="iconoTitulo" src="img/formacion.png" alt="formacion"> 
        <h2><?= $formacion ?></h2>
    </div>   
    <div style="clear:both"></div>
    <div class="timeline">
        <?php
        getFormacion($cursos, $verCertifLiteral);
        ?>
    </div>
</section>
<div style="clear:both"></div>