function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    document.querySelector(".contact-form").reset();
}

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".nav-links").classList.remove("show");
    });
});