window.setTimeout(function(){
    //document.getElementById("arrow").style.opacity = "1";
    //document.getElementById('arrow').classList = 'animated bounce';
  }, 800)

  window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if(scrollTop !== 0){
      //document.getElementById('arrow').classList = 'animated fadeOutUp';
      document.body.style.backgroundColor = "#6600cc";
      //document.getElementById('main').classList = 'main-streched';
    } else {

      //document.getElementById('arrow').classList = 'animated bounce';
      //document.getElementById('main').classList = 'main';
      document.body.style.backgroundColor = "white";
    }
  })
