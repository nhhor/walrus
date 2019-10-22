$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickable2").click(function() {
    $('#clam-showing').fadeToggle();
    $('#clam-hidden').fadeToggle();
  });
  $('h1').click(function() {
    $('#left').toggle();
    $('#middle').toggle();
    $('#right').toggle();
  });
  $('#teaser').hover(function() {
    $('#reveal').toggle();
    $("body").css("background-color", "#00ff00");


  });
});
