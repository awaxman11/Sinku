$(document).ready(function(){

  $('.learn-more').click(function(e) {
    e.preventDefault()   
    $.scrollTo($('#our-product'), 800);
  });

})