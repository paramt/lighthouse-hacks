window.onload = function(){
    window.setTimeout(function(){
      document.getElementById("arrow").style.opacity = "1";
      document.getElementById("arrow").classList = "animated bounce";
    }, 1300)
}

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if(scrollTop !== 0){
      document.getElementById("arrow").classList = "animated fadeOutUp";
    } else {
      document.getElementById("arrow").classList = "animated bounce";
    }
}, false);
