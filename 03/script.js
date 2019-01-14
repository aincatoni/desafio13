$(function(){

  var liCuarto = $("li:nth-child(4)");
  var liSexto = $("li:nth-child(6)");
  
  $(function() {

    $(liCuarto).append('<ul><li><a href="#">link 4.a</a></li></ul>');
    $(liCuarto).before('<li><a href="#">link 3.5</a></li>');

    });

    $(function (){

      $(liSexto).prepend("'😎' *(emoji de la cara con los anteojos de sol)*");
      $(liSexto).after('🙂');
  
      })


});



