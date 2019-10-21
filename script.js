window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if(scrollTop !== 0){

  } else {
    document.body.style.backgroundColor = "white";
  }
})
