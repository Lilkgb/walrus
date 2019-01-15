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
});
