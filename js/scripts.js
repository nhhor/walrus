$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickable2").click(function() {
    $('#clam-showing').fadeToggle();
    $('#clam-hidden').fadeToggle();
  });
});
