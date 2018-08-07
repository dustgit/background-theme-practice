$(document).ready(function(){
  console.log("ready")
  $('#button-default-theme').click(function(){
    $("body").removeClass();
    $("body").addClass("default-theme");
    console.log("clicked")
  });

  $('#button-dark-theme').click(function(){
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });
});
