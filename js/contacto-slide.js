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



// LIGTHBOX

// LIGTHBOX