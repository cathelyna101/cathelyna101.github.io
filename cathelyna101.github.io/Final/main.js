$(document).ready(function() {
  console.log("page loaded");
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


$("#tumpengg").mouseover(function(){
  $(".tumpeng").css("border-color", "red");
})

$("#tumpengg").mouseleave(function(){
  $(".tumpeng").css("border-color", "white");})

  $(".makan").mouseover(function(){
    $(".makan").css("font-size", "30pt");
  })

  $(".makan").mouseleave(function(){
    $(".makan").css("font-size", "12pt");})

    $("#our").click(function(){
      $("h2").animate({left:'250px'});})

    });
