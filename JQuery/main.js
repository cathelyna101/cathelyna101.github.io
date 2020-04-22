$(document).ready(function() {
  console.log("page loaded");


 //  $("#title").click(function(){$("#title").html("How to Apologize To your Cat<em>Consistently</em>");})
 // {
 $("#title").click(function(){
   $("#consistenly").show();
 });


$("#what").mouseover(function(){
  $("#catpic").fadeIn(500);
})

$("#what").mouseleave(function(){
  $("#catpic").fadeOut(500);
})

$("#ones").mouseover(function(){
  $("h3").css("font-size", "30pt");
})

$("#what").mouseleave(function(){
  $("h3").css("font-size", "11pt");})

  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});
