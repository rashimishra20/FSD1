// ===========================
// Sticky Navbar
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#111";
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

    } else {

        header.style.background = "rgba(0,0,0,0.88)";
        header.style.boxShadow = "none";

    }

});

// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===========================
// Hero Background Slider
// ===========================

const hero = document.querySelector(".hero");

const heroImages = [

"images/hero1.jpg",
"images/hero2.jpg",
"images/hero3.jpg",
"images/hero4.jpg"

];

let currentImage = 0;

function changeHeroImage(){

    hero.style.backgroundImage =
    `url('${heroImages[currentImage]}')`;

    currentImage++;

    if(currentImage >= heroImages.length){

        currentImage = 0;

    }

}

changeHeroImage();

setInterval(changeHeroImage,5000);

// ===========================
// Scroll Reveal Animation
// ===========================

const revealElements = document.querySelectorAll(

".card,.about,.campus-card,.logo-card,.testimonial-box,.placement-grid img"

);

function reveal(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight-120){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="all .7s ease";

});

window.addEventListener("scroll",reveal);

reveal();

// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("class");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});

// ===========================
// Testimonial Slider
// ===========================

const testimonials=[

{
text:"ABES helped me achieve my dream placement in a top MNC.",
name:"Rahul Sharma"
},

{
text:"Excellent faculty and modern labs made learning enjoyable.",
name:"Anjali Verma"
},

{
text:"Campus life and clubs helped me grow professionally.",
name:"Aman Singh"
}

];

const testimonialBox=document.querySelector(".testimonial-box");

let index=0;

function changeTestimonial(){

testimonialBox.innerHTML=

`
<p>"${testimonials[index].text}"</p>
<h4>- ${testimonials[index].name}</h4>
`;

index++;

if(index===testimonials.length){

index=0;

}

}

changeTestimonial();

setInterval(changeTestimonial,4000);

// ===========================
// Button Hover Effect
// ===========================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ===========================
// Image Hover Animation
// ===========================

const images=document.querySelectorAll(".campus-card img,.placement-grid img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";
img.style.transition=".4s";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});