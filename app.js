const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");

        hamburger.addEventListener("click", () => {
            // Toggle active class for hamburger animation
            hamburger.classList.toggle("active");
            // Toggle active class for nav menu
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking on a link
        document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        }));

// const coming = document.querySelectorAll(".com").forEach(button => {
//     button.addEventListener("click", () => {
//         alert("Feature might not availble")
//     })
// })

const buttons = document.querySelectorAll('.com');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closePopup = document.getElementById('closePopup');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        popup.style.display = "block";
        overlay.style.display = "block";
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = "none";
    overlay.style.display = "none";
});

overlay.addEventListener('click', () => {
    popup.style.display = "none";
    overlay.style.display = "none";
});

