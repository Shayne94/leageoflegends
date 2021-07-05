$(document).ready(function (e) {
  
  //menu
  $('.c-header__toggle').click(function(){
    $(this).toggleClass('active');
    $(this).parents().find('.c-header__nav').toggleClass('active');
  });
  
  $('.c-backtop').click(function () {
    $('html, body').animate({scrollTop: 0}, 500);
  });
  
  $(window).on('load scroll',function(){
    if($(window).scrollTop() <= 50) {	
      $('.c-backtop').fadeOut();
    } else {
      $('.c-backtop').fadeIn();
    }
  });
  //Cinematic
  $(function () {
    $(".p-cine__item").on("click", function () {
      $(".p-cine__video--inner").attr({
        "src": $(this).attr("movieurl"),
        "autoplay": "autoplay"
        
      });
      $(".p-cine__item").removeClass("active");
      $(this).addClass("active");
    })
    $(".p-cine__video--inner").attr({
      "src": $(".p-cine__item").eq(0).attr("movieurl"),
    });
  });

});


