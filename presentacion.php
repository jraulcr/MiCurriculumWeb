<section id="inicio">
    <div class="ancla" id="scr1">   </div> 
    <aside id="aside">
        <div id="imagenFoto">
            <?php
            $img = file_get_contents('./img/foto.jpg');
            $data = base64_encode($img);
            echo "<img src='data:image/jpg;base64," . $data . "'  alt='mi foto  id='marcoImagen' class='imagen' />";
            ?> 
            <div class="tituloNombre">   
                <h1>JUAN RAÚL CRESPO</h1> 
                <h2><?= $puesto ?></h2>
            </div> 
            <div id="infoContacto">
                <ul class="contacto">
                    <li><a class="telefono" title="tel" href="tel:+34676938151" ondragstart="return false;"><img src="img/telefono.svg" alt="telefono" id="telefono" />+34 676 93 81 51</a></li>
                    <li><a href="mailto:jraulcr@gmail.com" title="mailto" ondragstart="return false;"><img src="img/sobre.svg" alt="correo" id="correo" />jraulcr@gmail.com</a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/jraulcrespo" title="linkedin.com" target="_blank" ondragstart="return false;"><img src="img/in.png" alt="redSocial" id="redSocial" />linkedin.com/in/jraulcrespo</a>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
    <section id="presentacion">
        <article id="article">
            <div class="acercaMi">
                <h2><?= $acercaMi ?></h2>
                <div><?= $contenidoAcercaMi ?></div>
                <a class="boton-pdf" title="app.box.com" href="https://app.box.com/s/tbmljnomrxqn3vd35k4efgkh80adoijn" target="_blank"> <img class="pdf" src="img/icono-pdf.png" ondragstart="return false;" ondrop="return false;" />
                    <p><?= $descargar ?></p>
                </a>
            </div>
        </article>
    </section>
</section>
<div style="clear:both"></div>