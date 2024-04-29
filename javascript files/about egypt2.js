function myFunction(x) {
    if (x.matches) { 
      document.body.style.backgroundColor = "#edc098";
    } else {
     document.body.style.backgroundColor = "#f5f5f5";
    }
  }
  var x = window.matchMedia("(max-width: 700px)")
  
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
  });