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
    $("#right").removeClass("noBackground");
    $("#right").addClass("green-background");

  });
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("lightTheme")
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("darkTheme")
  });
  $("button#noTheme").click(function() {
    $("body").removeClass();
  });
  $("p").click(function() {
    $(this).toggleClass("highlight")
  });
});
