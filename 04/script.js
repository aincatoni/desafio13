$(function(){

$('.add_name').on('click', function(e) {
var addName = prompt('por favor agrega tu nombre')
  $('.names').prepend('<li><span>' + addName + '</span>' + '<a href="#" class="remove_name">Eliminar Nombre</a>' + '</li>');
  e.preventDefault();
 });

 $('body').on('click', 'a', function () {
  $(this).parent().remove();
})


});






