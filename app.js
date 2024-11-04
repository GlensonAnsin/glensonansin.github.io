// sticky navbar
const navbar = document.querySelector('nav');
const themeheading = document.querySelector('.theme-colors h2');

window.addEventListener('scroll', () => {
    if (scrollY > 30) {
        navbar.classList.add('active');
        themeheading.classList.add('active');
    }
    else { 
        navbar.classList.remove('active')
        themeheading.classList.remove('active')
    }
})

// scroll-to-top btn
const scrolltotop = document.querySelector('.scrolltotop a');

window.addEventListener('scroll', () => {
    if (scrollY > 1000) {
        scrolltotop.classList.add('active');
    }
    else (
        scrolltotop.classList.remove('active')
    )
})

// toggle dark/light mode
const moon = document.querySelector('.uil-moon');
const sun = document.querySelector('.uil-sun');

moon.addEventListener('click', () => {
    document.body.classList.add('darkmode');
    moon.style.display = 'none';
    sun.style.display = 'block';
})

sun.addEventListener('click', () => {
    document.body.classList.remove('darkmode');
    moon.style.display = 'block';
    sun.style.display = 'none';
})

// show/hide toggle nav list-items For responsive layout 
const listitems = document.querySelector('nav ul');

function listItems() {
    listitems.classList.toggle('listitems');
}
   
// add scrollreveal effect
ScrollReveal().reveal('.reveal',
    {
        interval: 100,
        origin: 'bottom',
        distance: "100px",
        scale: 0.85,
        delay: 300
    }
);

// handle form submission
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_ksamalm', 'template_hxhity9', this)
            .then(() => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message.', error);
            });
    });
}