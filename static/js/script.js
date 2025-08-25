/*================ Scroll Sections Active Link =================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

function scrollHandler() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*===================== sticky navbar =======================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 600);

    /*=========Remove toggle Icon and navbar when click navbar link(scroll)==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

window.onscroll = scrollHandler;

window.onload = scrollHandler;


/*===================== Scroll Reveal =======================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    display: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form, .skills-container, .portfolio-container'
, { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*===================== typed js =======================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*================ Toggle Icon Navbar =================*/
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//=================== Header Colored ======================//
const header = document.querySelector(".header");
const homeSection = document.querySelector(".home");

function checkHeader() {
  const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
  if (window.scrollY < homeBottom - 650) {
    // in home : header is transparent
    header.classList.remove("colored");
  } else {
    // after home : header is colored
    header.classList.add("colored");
  }
}

// first check when loaded
document.addEventListener("DOMContentLoaded", checkHeader);

// second check after any scroll
window.addEventListener("scroll", checkHeader);


//================= NProgress ====================//

// when loading...
NProgress.start();

// when loading is complete
window.addEventListener("load", () => {
  NProgress.done();
});
