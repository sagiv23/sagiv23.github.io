if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.matchMedia("(orientation: portrait)").matches) {
  window.addEventListener("load",function(){
    swal("Wait!", "Please rotate your screen to landscape mode for the best viewing experience!", "error");
  }); 
}