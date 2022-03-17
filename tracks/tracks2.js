// TRACK ANIMATIONS ///////////////////////////////////////////////////
// Hunger animation -------------------------------------------------
let tl1 = gsap.timeline({yoyo: true, repeat: 10, repeatDelay: 1,});
tl1.to(".triangle", {
  duration: 3.5,
  fill: "hsla(250, 100%, 50%, 0.1)",
  stroke: "hsla(250, 100%, 0%, 0.7)",
  strokeWidth: 5,
  stagger: 0.5,
})
.to(".triangle", {
  duration: 3.5,
  fill: "hsla(250, 100%, 20%, 0.1)",
  stagger: 0.5,
  stroke: "hsla(250, 100%, 10%, 0.5)",
  strokeWidth: 10,
});
tl1.pause();