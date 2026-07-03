// ===============================
// AOS INITIALIZATION
// ===============================

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(46,139,87,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

    } else {

        navbar.style.background = "rgba(255,255,255,.15)";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// IMPACT COUNTER
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.dataset.target;

    let count = 0;

    const speed = target / 120;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#2E8B57";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.transition = ".4s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".primary-btn,.secondary-btn,.btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        let circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.style.position = "absolute";

        circle.style.background = "rgba(255,255,255,.4)";

        circle.style.borderRadius = "50%";

        circle.style.transform = "scale(0)";

        circle.style.animation = "ripple .6s linear";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

// ===============================
// FLOATING PROJECT CARDS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.animation = `floatCard 4s ease-in-out ${index * 0.3}s infinite`;

});

// ===============================
// GALLERY ZOOM EFFECT
// ===============================

const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        image.classList.toggle("zoomed");

    });

});


// ===============================
// HERO TEXT TYPING EFFECT
// ===============================

const heroHeading = document.querySelector(".hero-content h1");

const originalText = heroHeading.innerHTML;

heroHeading.innerHTML = "";

let i = 0;

function typing() {

    if (i < originalText.length) {

        heroHeading.innerHTML += originalText.charAt(i);

        i++;

        setTimeout(typing, 40);

    }

}

typing();


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("%cWelcome to InAmigos Foundation Website",
    "color:green;font-size:20px;font-weight:bold");
const slides = document.querySelectorAll(".hero-slider img");

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);