// GSAP Animation Example
gsap.from(".hero h1", {
  duration: 2,
  opacity: 0,
  y: -50,
  ease: "bounce",
});

gsap.from(".cta-btn", {
  duration: 2,
  opacity: 0,
  scale: 0.8,
  delay: 1,
  ease: "power1.out",
});

// Scroll Magic for Scroll Animations
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: ".projects",
  duration: 400,
  triggerHook: 0.7
})
.setClassToggle(".projects", "active")
.addTo(controller);