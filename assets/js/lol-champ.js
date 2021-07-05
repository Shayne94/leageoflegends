if ($(window).width() > 768) {
  //Champ-detail Ability
  var slideIndex01 = 1;
  showSlides01(slideIndex01);
  
  function currentSlide01(j) {
    showSlides01(slideIndex01 = j);
  }
  
  function showSlides01(j) {
    var i;
    var abilitylist = document.getElementsByClassName("p-champ-detail__ability-list--item");
    var abilitytxt = document.getElementsByClassName("p-champ-detail__ability-txt--item");
    var abilityvid = document.getElementsByClassName("p-champ-detail__ability-vid--item");
    if (j > abilitytxt.length) {slideIndex01 = 1}
    if (j < 1) {slideIndex01 = abilitytxt.length}
    for (i = 0; i < abilitytxt.length; i++) {
      abilitytxt[i].style.display = "none";
      abilityvid[i].style.display = "none";
    }
    for (i = 0; i < abilitylist.length; i++) {
      abilitylist[i].className = abilitylist[i].className.replace(" active", "");
    }
    abilitytxt[slideIndex01-1].style.display = "block";
    abilityvid[slideIndex01-1].style.display = "block";
    abilitylist[slideIndex01-1].className += " active";
  }

  //Champ-detail Skin
  var slideIndex02 = 1;
  showSlides02(slideIndex02);
  
  function currentSlide02(n) {
    showSlides02(slideIndex02 = n);
  }
  
  function showSlides02(n) {
    var m;
    var skinlist = document.getElementsByClassName("p-champ-detail__skin-list--item");
    var skininner = document.getElementsByClassName("p-champ-detail__skin-inner--item");
    if (n > skininner.length) {slideIndex02 = 1}
    if (n < 1) {slideIndex02 = skininner.length}
    for (m = 0; m < skininner.length; m++) {
      skininner[m].style.display = "none";
    }
    for (m = 0; m < skinlist.length; m++) {
      skinlist[m].className = skinlist[m].className.replace(" active", "");
    }
    skininner[slideIndex02-1].style.display = "block";
    skinlist[slideIndex02-1].className += " active";
  }
}