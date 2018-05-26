$(document).ready(function(){
    // first page
    $(".Content1").click(function(){
        $(".Content2").removeClass("w3-hide");
        $(".Content1").addClass("w3-hide");
        $(".Content3").addClass("w3-hide");
    });
    
    $(".Content3").click(function(){
        $(".Content4").removeClass("w3-hide");
        $(".Content1").addClass("w3-hide");
        $(".Content3").addClass("w3-hide");
    });
    // secound page
   $(".Content2").click(function(){
        $(".Content1").removeClass("w3-hide");
        $(".Content3").removeClass("w3-hide");
        $(".Content2").addClass("w3-hide");
    });
  
    $(".Content4").click(function(){
        $(".Content1").removeClass("w3-hide");
        $(".Content3").removeClass("w3-hide");
        $(".Content4").addClass("w3-hide");
    });



});