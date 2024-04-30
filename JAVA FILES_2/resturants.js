window.onload = function() {
    var html = document.documentElement;
    html.style.overflow = 'hidden'; 
  
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';
  
    setTimeout(function() {
      popup.classList.remove('animate__fadeIn');
      popup.classList.add('animate__fadeOut'); 
      setTimeout(function() {
        popup.style.display = 'none';
        html.style.overflow = ''; 
      }, 1000);
    }, 1500); 
  };
  
  
  function bookfun(){
    alert("you BOOKED the meal");
  }
  document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
      });
  //======================================
  function validateSearch() {
    var searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput === "") {
      document.getElementById("errorMessage").textContent = "Please enter a search query.";
      return false; 
  } else {
      if (searchInput.toLowerCase() === 'buffalo'||searchInput.toLowerCase() === 'food') {
          window.location.href = 'resturants.html#buffalo';
          return false; 
      }
      if (searchInput.toLowerCase() === 'Desserts') {
          window.location.href = 'resturants.html#Desserts'; 
          return false;
      }
      if (searchInput.toLowerCase() === 'special-dish'||searchInput.toLowerCase()==='special dish') {
        window.location.href = 'resturants.html#special-dish'; 
        return false; 
    }
    if(searchInput.toLowerCase() === 'drinks'||searchInput.toLowerCase()==='coffee') {
      window.location.href = 'resturants.html#CAFE'; 
      return false; }
      else{
          document.getElementById("searchInput").style = "color:red;";
          return false;
      }
        document.getElementById("errorMessage").textContent = "";
        return true; 
    }
}
