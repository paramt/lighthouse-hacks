window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if(scrollTop !== 0){
    document.body.style.backgroundColor = "#6600cc";
  } else {
    document.body.style.backgroundColor = "white";
  }
})
