gsap.registerPlugin(ScrollTrigger);

//intial page load animation
const pageIntro = gsap.timeline({
    defaults: {duration: 1, ease: "power2.inOut"}
});
pageIntro.from("body", {opacity: 0,duration:0.6})
.from(".header__content>*",{
    y:30,
    opacity:0,
    duration:0.8,
    stagger:0.2
}).from(".header__image",{
    scale:1.1,
    opacity:0,
    duration:1.2
},"-=1")

//scroll animations for each section
const sections = gsap.utils.toArray(".about, .products,.stories");
sections.forEach((section, i) => {
   gsap.from(
    section.querySelectorAll("h2,p,.stat,.product-card,.story-card"),{
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    }
   )
});

//smooth parallax effect
gsap.to(".header__image",{
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end:"bottom top",
        scrub: 1
    }
})