if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}



$(document).ready(function(){

    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
      });

      $('.subir').click(function(e){
          e.preventDefault();
          $('html, body').animate({
              scrollTop:1
          },500);
          return false;
      });

      


      function Formu(evento){
       //crear contenido



        var nosirve=document.querySelector('#nosirve');
        console.log(nosirve);


        var nuevoElemento=document.createElement('h5');
        var nuevoTexto=document.createTextNode("Por el momento no sirve");
        nuevoElemento.appendChild(nuevoTexto);
        nosirve.appendChild(nuevoElemento);

        evento.preventDefault();

        var nosirve=document.querySelector('#nosirve');
        var mensaje=("Por el momento no sirve");


        nosirve.textContent=mensaje;
      
      
      
      }

      var miForm=document.querySelector('#formulario');

      miForm.addEventListener("submit", Formu);


   
});