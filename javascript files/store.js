function scrollToLatestProducts() {
    var latestProductsHeading = document.getElementById("latestProductsHeading");
    latestProductsHeading.scrollIntoView({ behavior: "smooth", block: "start" });
}


    function showMessage() {
        alert("Stay tuned for our new products!");
    }

    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.getElementById('searchInput');
        const cards = document.querySelectorAll('.card');
    
        searchInput.addEventListener('input', function () {
            const searchText = searchInput.value.toLowerCase();
    
            cards.forEach(card => {
                const desc = card.querySelector('.desc').textContent.toLowerCase();
                if (searchText === "accessories" && desc.includes("accessories")) {
                    card.classList.add('highlight');
                } else if (searchText === "clothes" && desc.includes("clothes")) {
                    card.classList.add('highlight');
                } else if (searchText === "statue" && desc.includes("statue")) {
                    card.classList.add('highlight');
                } else {
                    card.classList.remove('highlight');
                }
            });
        });
    });

        function showBuyForm() {
            var buyForm = document.getElementById("buyForm");
            buyForm.style.display = "block";
        }
    
        function closeForm() {
            var buyForm = document.getElementById("buyForm");
            buyForm.style.display = "none";
        }
    
        var buyButtons = document.querySelectorAll(".btn");
        buyButtons.forEach(function(button) {
            button.addEventListener("click", showBuyForm);
        });


       function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var address = document.getElementById("address").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var paymentMethod = document.getElementById("paymentMethod").value;

    if (firstName === "" || lastName === "" || address === "" || phone === "" || email === "" || paymentMethod === "") {
        alert("Please fill in all fields.");
        return false; 
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; 
    }

    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false; 
    }
}