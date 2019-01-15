$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-show").slideToggle();
    $(".walrus-hidden").toggle();
    $(".whale-hidden").toggle();
  });

  $(".clickable-whale").click(function() {
    $(".whale-show").slideToggle(function() {
      $(".whale-hidden").hide();
    });
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

});
