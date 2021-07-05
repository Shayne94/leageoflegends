if ($(window).width() > 768) {
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("p-skin-detail__box-inner--item");
    var dots = document.getElementsByClassName("p-skin-detail__box-list--item");
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
  }
}


// var h_skintext = $('.p-skin-detail__box-inner--txt').height();
// $('.p-skin-detail__left, .p-skin-detail__right').css({'bottom': h_skintext})
