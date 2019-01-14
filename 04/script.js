$(function(){

$('.add_name').on('click', function(e) {
var addName = prompt('por favor agrega tu nombre')
  e.preventDefault();
  $('.names').prepend("<li>"+addName+"</li>");
 });




});






