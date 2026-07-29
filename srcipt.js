// Welcome message
window.addEventListener("load", () => {
    alert("Welcome to the Tribute Page of Dr. A. P. J. Abdul Kalam!");
});

// Smooth scrolling for internal links (if you add a navigation bar)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Card hover effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

// Display current year in footer
const footer = document.querySelector("footer p");
footer.innerHTML += ` © ${new Date().getFullYear()}`;