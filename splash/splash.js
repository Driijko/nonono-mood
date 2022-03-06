gsap.set("#album-cover", {
  opacity: 0,
})

gsap.to("#album-cover", {
  duration:10,
  opacity: 1,
});
gsap.to("#filter-effect1", {
  duration: 10,
  attr: {
    stdDeviation: 0,
  },
  ease: "ease-in",
}); 

