const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("mobileMenu");

// Toggle mobile menu
toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Optional: Add shadow on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 10) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        const offset = 100; // header height

        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});


const modal = document.getElementById("demoModal");
const form = document.getElementById("demoForm");
const error = document.getElementById("formError");
const box = document.getElementById("modalBox");

function openModal() {
    document.getElementById("demoModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("demoModal").style.display = "none";
}

/* close outside */
window.onclick = function (e) {
    const modal = document.getElementById("demoModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".fd-tab");
    const contents = document.querySelectorAll(".fd-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            const id = this.getAttribute("data-tab");

            // remove active
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // add active to clicked
            this.classList.add("active");

            // match content
            const activeContent = document.querySelector(
                `.fd-content[data-content="${id}"]`
            );

            if (activeContent) {
                activeContent.classList.add("active");
            }

        });
    });

    const track = document.querySelector(".testi-track");
    const cards = document.querySelectorAll(".testi-card");

    let index = 0;

    function updateSlider() {
        track.style.transform = `translateX(-${index * 350}px)`;

        cards.forEach(c => c.classList.remove("active"));
        if (cards[index]) {
            cards[index].classList.add("active");
        }
    }

    setInterval(() => {
        index = (index + 1) % cards.length;
        updateSlider();
    }, 4000);
});

/* FORM VALIDATION */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        error.innerText = "Please fill all required fields";

        box.classList.add("shake");
        setTimeout(() => box.classList.remove("shake"), 300);
    } else {
        error.classList.add("success");
        error.innerText = "✅ Request submitted successfully!";

        form.reset();
    }
});







