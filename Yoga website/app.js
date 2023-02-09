const navBar = document.querySelector('#navBar');
const loader = document.querySelector('.loader');
const menubtn = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu');
const btns = document.querySelectorAll('.btn');
let testominalContent = document.querySelector('.testominal .content .content-inf');
let testominalAuthor = document.querySelector('.testominal .content .author');

let currentItem = 0;
function showPerson(person) {
    const item = testominals[person];
    testominalContent.textContent = item.content;
    testominalAuthor.textContent = item.author;

}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'btn-next') {
            currentItem++;
            if (currentItem > testominals.length - 1) {
                currentItem = 0;
            }
        } else {
            currentItem--;
            if (currentItem < 0) {
                currentItem = testominals.length - 1;
            }
        }
        showPerson(currentItem);
    })
})




menubtn.addEventListener('click', () => {
    sideMenu.classList.toggle('nav-active');

    const navLinks = document.querySelectorAll('.side-menu .menu li');
    console.log(navLinks);

    navLinks.forEach((link, index) => {

        link.addEventListener('click', () => {
            sideMenu.classList.remove('nav-active');
            menubtn.classList.remove('toggle');
        });

        if (link.style.animation) {
            link.style.opacity = 1;
            link.style.animation = '';
        }
        else {
            link.style.opacity = 0;
            link.style.animation = `navLinkFate 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    })
    menubtn.classList.toggle('toggle');
})



gsap.to('.nav-bar', {
    duration: 0.5,
    ease: "power1.in",
    top: '0'
});

gsap.from('body', {
    duration: 1,
    opacity: 0,
    ease: 'power1.in'
});
gsap.from('.title-content-main', {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'power1.in'
});

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const zooms = document.querySelectorAll('.zoom');
const fadersleft = document.querySelectorAll('.from-left-card');
const cardfaders = document.querySelectorAll('.card-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

zooms.forEach(zoom => {
    appearOnScroll.observe(zoom);
})

fadersleft.forEach(fd => {
    appearOnScroll.observe(fd);
})

cardfaders.forEach(card => {
    appearOnScroll.observe(card);
})
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navBar.classList.add('active-nav');

    } else {
        navBar.classList.remove('active-nav');
    }


});

window.addEventListener('load', () => {
    loader.style.display = 'none';
})


const links = document.querySelectorAll('a[href^="#"]');

links.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})






