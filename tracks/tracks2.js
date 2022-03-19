// TRACK ANIMATIONS ///////////////////////////////////////////////////
// Hunger animation -------------------------------------------------
// let tl1 = gsap.timeline({yoyo: true, repeat: 10, repeatDelay: 1,});
// tl1.to(".triangle", {
//   duration: 3.5,
//   fill: "hsla(250, 100%, 50%, 0.1)",
//   stroke: "hsla(250, 100%, 0%, 0.7)",
//   strokeWidth: 5,
//   stagger: 0.5,
// })
// .to(".triangle", {
//   duration: 3.5,
//   fill: "hsla(250, 100%, 20%, 0.1)",
//   stagger: 0.5,
//   stroke: "hsla(250, 100%, 10%, 0.5)",
//   strokeWidth: 1,
// });
// tl1.pause();
let tl1 = gsap.timeline({yoyo:true});
tl1.to("#circle2-6", {
  fill: "hsla(50, 100%, 50%, 1)",
  // duration: 0.261,
  duration: 0.53,
  ease: "steps(1)",
  repeat: -1,
});
tl1.to("#circle2-5", {
  fill: "hsla(40, 100%, 50%, 1)",
  duration: 0.53,
  ease: "steps(1)",
  repeat: -1,
}, 10)
tl1.pause();

let tl2 = gsap.timeline();

let tl3 = gsap.timeline();

let tl4 = gsap.timeline({yoyo:true, repeat:1});
tl4.to("#rect4-1", {
  duration: 60,
  fill: "hsl(250, 100%, 50%)",
  ease: "power1.in",
},"tlp1");
tl4.to("#rect4-1", {
  duration: 60, 
  fill: "hsl(50, 100%, 70%)",
  ease: "power1.in",
},"tlp2");
tl4.to("#rect4-1", {
  duration: 60, 
  fill: "hsl(0, 100%, 80%)",
  ease: "power1.in",
},"tlp3");
tl4.to("#rect4-1", {
  duration: 60, 
  fill: "hsl(250, 100%, 5%)",
  ease: "power1.in",
},"tlp4");
tl4.to("#rect4-2", {
  duration: 60,
  fill: "hsla(10, 100%, 70%, 0.3)",
  transform: "scale(155%) translate(-18%, 10%)",
  ease: "power1.in",
},"tlp1");
tl4.to("#rect4-2", {
  duration: 60,
  fill: "hsla(50, 100%, 50%, 1)",
  transform: "scale(150%, 300%) translate(-30%, -5%)",
  ease: "power1.in",
},"tlp2");
tl4.to("#rect4-2", {
  duration: 60,
  fill: "hsla(0, 100%, 50%, 0.5)",
  transform: "scale(280%) translate(-32%, -5%)",
  ease: "power1.in",
},"tlp3");
tl4.to("#rect4-2", {
  duration: 60,
  fill: "hsla(0, 100%, 80%, 0.3)",
  ease: "power1.in",
},"tlp4");
tl4.to("#rect4-3", {
  duration: 60,
  fill:"hsla(40, 100%, 60%, 0.3)",
  ease: "power1.in",
  transform: "scale(200%) translate(-25%, -35%)",
},"tlp1");
tl4.to("#rect4-3", {
  duration: 60,
  fill:"hsla(50, 100%, 80%, 0.8)",
  ease: "power1.in",
  transform: "scale(110%, 220%) translate(10%, -38%)",
},"tlp2");
tl4.to("#rect4-3", {
  duration: 60,
  fill:"hsla(50, 100%, 60%, 0.6)",
  ease: "power1.in",
  transform: "scale(220%, 50%) translate(-27%, 10%)",
},"tlp3");
tl4.to("#rect4-3", {
  duration: 60,
  fill:"hsla(0, 100%, 50%, 0.6)",
  ease: "power1.in",
},"tlp4");
tl4.to("#rect4-4", {
  duration: 60,
  fill:"hsla(250, 100%, 50%, 0.5)",
},"tlp1");
tl4.to("#rect4-4", {
  duration: 60,
  fill:"hsla(50, 100%, 50%, 0.3)",
},"tlp2");
tl4.to("#rect4-4", {
  duration: 60,
  fill:"hsla(330, 100%, 50%, 0.3)",
},"tlp3");
tl4.to("#rect4-4", {
  duration: 60,
  fill:"hsla(250, 100%, 10%, 0)",
},"tlp3");
tl4.pause();

let tl5 = gsap.timeline();