if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.matchMedia("(orientation: portrait)").matches) {
  window.addEventListener("load",function(){
    swal("!חכו", "!אנא סובב את המסך למצב רוחבי עבור חווית הצפייה הטובה ביותר", "error");
  }); 
}

var Movies = new Typed(".Title", {
  strings:["Sagiv23"],
  typeSpeed : 100 , 
  backSpeed : 100 , 
  loop:true
})

function sl_qu() {
  document.getElementById("_qu").style.display = 'block';
  document.getElementById("_qu").scrollIntoView({ behavior: 'smooth'});
}

function qu_w() {
  document.getElementById("_w").style.display = 'block';
  document.getElementById("_w").scrollIntoView({ behavior: 'smooth'});
}

function w_qu() {
  document.getElementById("_qu").style.display = 'block';
  document.getElementById("_qu").scrollIntoView({ behavior: 'smooth'});
}

function w_url(){
  document.getElementById("_url").style.display = 'block';
  document.getElementById("_url").scrollIntoView({ behavior: 'smooth'});
}

function url_w() {
  document.getElementById("_w").style.display = 'block';
  document.getElementById("_w").scrollIntoView({ behavior: 'smooth'});
}

function w_th(){
  document.getElementById("_th").style.display = 'block';
  document.getElementById("_th").scrollIntoView({ behavior: 'smooth'});
}

function th_url() {
  document.getElementById("_url").style.display = 'block';
  document.getElementById("_url").scrollIntoView({ behavior: 'smooth'});
}

function video_th() {
  document.getElementById("_th").style.display = 'block';
  document.getElementById("_th").scrollIntoView({ behavior: 'smooth'});
}

function th_video() {
  document.getElementById("_video").style.display = 'block';
  document.getElementById("_video").scrollIntoView({ behavior: 'smooth'});
}




function sl() {
  document.getElementById("sl").style.display = 'block';
  document.getElementById("sl").scrollIntoView({ behavior: 'smooth'});
}