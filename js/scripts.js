/* global mostrarimg */

window.addEventListener('DOMContentLoaded', () => {
  
    //**Menu**//
    $(document).ready(function () {
        $(document).delegate('.menu', 'click', function (event) {
            $(this).addClass('menuAbierto');
            event.stopPropagation();
        });
        $(document).delegate('body', 'click', function (event) {
            $('.menu').removeClass('menuAbierto');
            event.stopPropagation();
        });
        $(document).delegate('.cls', 'click', function (event) {
            $('.menu').removeClass('menuAbierto');
            event.stopPropagation();
        });
    });
    
    //**Scrool dinamico**//
    $(document).ready(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
             location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200);
                    return false;
                }
            }
        });
    });

    //**Experiencia dinamico**//
    $(document).ready(function () {

        var listaExperiencia = $('ul#experienciaLista li').hide();
        var portrait = window.matchMedia("(orientation: portrait)");
        var landscape = window.matchMedia("(orientation: landscape)");
        var portraitMobile = window.matchMedia("(min-width:320px) and (max-width: 480px)");
        var landscapeMobile = window.matchMedia("(max-width: 767px)");
        var portraitTablet = window.matchMedia("(min-width:481px) and (max-width: 768px)");
        var landscapeTablet = window.matchMedia("(min-width:768px) and (max-width: 1024px)");

        $(window).scroll(() => {
            
            if ($(window).scrollTop() === 0 ||
                $(window).scrollTop() <= 50) {
                listaExperiencia.hide();
            }

            if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                $(window).scrollTop() >= 400) {
                // alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                var i = 0;
                (function mostrarimg() {
                    listaExperiencia.eq(i++).fadeIn(600, mostrarimg);
                })();

                // you're in PORTRAIT mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                portrait.matches &&
                portraitMobile.matches &&
                $(window).scrollTop() >= 900) {

               // alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                var i = 0;
                (function mostrarimg() {
                    listaExperiencia.eq(i++).fadeIn(500, mostrarimg);
                })();

                // you're in LANDSCAPE mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                landscape.matches &&
                landscapeMobile.matches &&
                $(window).scrollTop() >= 1000) {

               // alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                var i = 0;
                (function mostrarimg() {
                    listaExperiencia.eq(i++).fadeIn(800, mostrarimg);
                })();

                // you're in PORTRAIT Tablet mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                portrait.matches &&
                portraitTablet.matches &&
                $(window).scrollTop() >= 900) {

               
                //alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                var i = 0;
                (function mostrarimg() {
                    listaExperiencia.eq(i++).fadeIn(500, mostrarimg);
                })();

                // you're in LANDSCAPE TABLET mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                window.matchMedia("(orientation: landscape)").matches &&
                landscapeTablet.matches &&
                $(window).scrollTop() >= 400) {

               // alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                var i = 0;
                (function mostrarimg() {
                    listaExperiencia.eq(i++).fadeIn(600, mostrarimg);
                })();
            }
        });
    });

    /**Formacion dinamico**/
    $(document).ready(function () {

        var portrait = window.matchMedia("(orientation: portrait)");
        var landscape = window.matchMedia("(orientation: landscape)");
        var portraitMobile = window.matchMedia("(min-width:320px) and (max-width: 480px)");
        var landscapeMobile = window.matchMedia("(max-width: 767px)");
        var portraitTablet = window.matchMedia("(min-width:481px) and (max-width: 768px)");
        var landscapeTablet = window.matchMedia("(min-width:768px) and (max-width: 1024px)");
        $(".timeline").removeClass("timelineLinea");

        $(window).scroll(() => {

            if ($(window).scrollTop() === 0 ||
                $(window).scrollTop() <= 50) {
                $(".timeline").removeClass("timelineLinea");
                $("ul#formacionLista li").hide();
            }

            if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                $(window).scrollTop() >= 1000) {

                $(".timeline").addClass("timelineLinea").fadeIn(600);

                var i = 0;
                (function mostrarimg() {
                    $("ul#formacionLista li").eq(i++).fadeIn(400, mostrarimg);
                })();

                // you're in PORTRAIT mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                portrait.matches &&
                portraitMobile.matches &&
                $(window).scrollTop() >= 2200) {

                //alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                $(".timeline").addClass("timelineLinea").fadeIn(600);

                var i = 0;
                (function mostrarimg() {
                    $("ul#formacionLista li").eq(i++).fadeIn(800, mostrarimg);
                })();

                // you're in LANDSCAPE mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                landscape.matches &&
                landscapeMobile.matches &&
                $(window).scrollTop() >= 2000) {

                //alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                $(".timeline").addClass("timelineLinea").fadeIn(600);
                var i = 0;
                (function mostrarimg() {
                    $("ul#formacionLista li").eq(i++).fadeIn(800, mostrarimg);
                })();

                // you're in PORTRAIT Tablet mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                portrait.matches &&
                portraitTablet.matches &&
                $(window).scrollTop() >= 2000) {

               //alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                $(".timeline").addClass("timelineLinea").fadeIn(600);
                var i = 0;
                (function mostrarimg() {
                    $("ul#formacionLista li").eq(i++).fadeIn(700, mostrarimg);
                })();

                // you're in LANDSCAPE TABLET mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                landscape.matches &&
                landscapeTablet.matches &&
                $(window).scrollTop() >= 1200) {

                //alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                $(".timeline").addClass("timelineLinea").fadeIn(600);
                var i = 0;
                (function mostrarimg() {
                    $("ul#formacionLista li").eq(i++).fadeIn(700, mostrarimg);
                })();
            }
        });
    });


    /**Conocimientos dinamico**/
    $(document).ready(function () {

        var listaConoc = $('div#conocimientoLista div').hide();
        var portrait = window.matchMedia("(orientation: portrait)");
        var landscape = window.matchMedia("(orientation: landscape)");
        var portraitMobile = window.matchMedia("(min-width:320px) and (max-width: 480px)");
        var landscapeMobile = window.matchMedia("(max-width: 767px)");
        var portraitTablet = window.matchMedia("(min-width:481px) and (max-width: 768px)");
        var landscapeTablet = window.matchMedia("(min-width:768px) and (max-width: 1024px)");

        $(window).scroll(() => {

            if ($(window).scrollTop() === 0 ||
                $(window).scrollTop() <= 50) {
                listaConoc.hide();
            }

            if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                $(window).scrollTop() >= 2800) {

               // alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                var i = 0;
                (function mostrarimg() {
                    listaConoc.eq(i++).fadeIn(500, mostrarimg);
                })();

                // you're in PORTRAIT mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                portrait.matches &&
                portraitMobile.matches &&
                $(window).scrollTop() >= 4800) {

                var i = 0;
                (function mostrarimg() {
                    listaConoc.eq(i++).fadeIn(500, mostrarimg);
                })();

                // you're in LANDSCAPE mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                landscape.matches &&
                landscapeMobile.matches &&
                $(window).scrollTop() >= 4500) {

                //alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                var i = 0;
                (function mostrarimg() {
                    listaConoc.eq(i++).fadeIn(500, mostrarimg);
                })();

                // you're in PORTRAIT Tablet mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                portrait.matches &&
                portraitTablet.matches &&
                $(window).scrollTop() >= 4500) {

              //  alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                var i = 0;
                (function mostrarimg() {
                    listaConoc.eq(i++).fadeIn(500, mostrarimg);
                })();

                // you're in LANDSCAPE TABLET mode
            } else if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) &&
                landscape.matches &&
                landscapeTablet.matches &&
                $(window).scrollTop() >= 3100) {

                //alert("La barra vertical se ha movido " + $(window).scrollTop() + " pixels");
                var i = 0;
                (function mostrarimg() {
                    listaConoc.eq(i++).fadeIn(500, mostrarimg);
                })();
            }
        });
    });
});  