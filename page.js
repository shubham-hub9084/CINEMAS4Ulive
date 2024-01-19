// JavaScript code to change the button text based on the page
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("clickHereButton");
    var currentPage = window.location.pathname;

    if (currentPage === "/home.html") {
        button.textContent = "Go to Home";
    } else if (currentPage === "/about.html") {
        button.textContent = "Learn More";
    } else if (currentPage === "/contact.html") {
        button.textContent = "Contact Us";
    } else {
        button.textContent = "Click Here"; // Default text
    }
});
