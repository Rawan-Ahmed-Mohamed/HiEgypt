function scrollToLatestProducts() {
    var latestProductsHeading = document.getElementById("latestProductsHeading");
    latestProductsHeading.scrollIntoView({ behavior: "smooth", block: "start" });
}
function checkLogin() {
    var isLoggedIn = false; 
    if (!isLoggedIn) {
        alert("You must log in first to buy.");
    } else {
    }
}

var buyButtons = document.querySelectorAll(".btn");
buyButtons.forEach(function(button) {
    button.addEventListener("click", checkLogin);
});

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