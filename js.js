if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.matchMedia("(orientation: portrait)").matches) {
  window.addEventListener("load",function(){
    swal("Wait!", "Please rotate your screen to landscape mode for the best viewing experience!", "error");
  }); 
}

function sl_qu() {
  document.getElementById("_qu").style.display = 'block';
  document.getElementById("_qu").scrollIntoView({ behavior: 'smooth'});
}

function qu_sl() {
  document.getElementById("sl").style.display = 'block';
  document.getElementById("sl").scrollIntoView({ behavior: 'smooth'});
}

function qu_w() {
  document.getElementById("_w").style.display = 'block';
  document.getElementById("_w").scrollIntoView({ behavior: 'smooth'});
}

function w_sl() {
  document.getElementById("sl").style.display = 'block';
  document.getElementById("sl").scrollIntoView({ behavior: 'smooth'});
}
