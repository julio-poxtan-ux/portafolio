 // INICIO Slider
     $(document).ready(function() {
            $("#skills-slider").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                itemsDesktop: [1500, 3],
                itemsDesktopSmall: [1300, 3]
            });
        });
 // FIN SLIDER

// VALIDACION DE FORMULARIO

       function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz1234567890";
       especiales = "8-37-39-46";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
    }
// VALIDACION DE FORMULARIO

// ANALITYCS
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-103445255-1', 'auto');
  ga('send', 'pageview');
// ANALITYCS

// LIGTHBOX

// LIGTHBOX