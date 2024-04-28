window.onload = function() {
    var html = document.documentElement;
    html.style.overflow = 'hidden'; // تعطيل التمرير لمنع التمرير أثناء ظهور الإعلان
  
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';
  
    // إخفاء المسدج بعد فترة زمنية قصيرة باستخدام animate.css
    setTimeout(function() {
      popup.classList.remove('animate__fadeIn');
      popup.classList.add('animate__fadeOut'); // استخدم animate__fadeOut للاختفاء
      setTimeout(function() {
        popup.style.display = 'none';
        html.style.overflow = ''; // استعادة التمرير بعد اختفاء الإعلان
      }, 1000); // زمن الانتقال في animate.css هو 1 ثانية
    }, 1500); // زمن انتظار قبل بدء عملية الانتقال هو 2 ثوانٍ
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
          window.location.href = 'restuarants.htm#buffalo';
          return false; 
      }
      if (searchInput.toLowerCase() === 'Desserts') {
          window.location.href = 'restuarants.htm#Desserts'; 
          return false;
      }
      if (searchInput.toLowerCase() === 'special-dish'||searchInput.toLowerCase()==='special dish') {
        window.location.href = 'restuarants.htm#special-dish'; 
        return false; 
    }
    if(searchInput.toLowerCase() === 'drinks'||searchInput.toLowerCase()==='coffee') {
      window.location.href = 'restuarants.htm#CAFE'; 
      return false; }
      else{
          document.getElementById("searchInput").style = "color:red;";
          return false;
      }
        document.getElementById("errorMessage").textContent = "";
        return true; 
    }
}
