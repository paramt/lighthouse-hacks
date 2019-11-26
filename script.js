window.onload = function(){
    window.setTimeout(function(){
      document.getElementById("arrow").style.opacity = "1";
      document.getElementById("arrow").classList = "animated bounce";
    }, 1300)
}

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if(scrollTop == 0){
      document.getElementById("arrow").classList = "animated bounce";
    }
}, false);

$(document).ready(function() {
  //toggle the component with class slideout
  $(".box").click(function() {
    if ($('.slideout').is(':visible')) {
      $(".slideout").slideUp(300);
      $(".plusminus").text('+');
    }
    if ($(this).next(".slideout").is(':visible')) {
      $(this).next(".slideout").slideUp(300);
      $(this).find(".plusminus").text('+');
    } else {
      $(this).next(".slideout").slideDown(300);
      $(this).find(".plusminus").text('–');
    }
  });
});
