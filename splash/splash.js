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

document.getElementById("enter-link").addEventListener("click", e => {
  e.preventDefault();
  gsap.to("#album-cover", {
    duration: 5,
    opacity: 0,
  });
  gsap.to("#filter-effect1", {
    duration: 5,
    attr: {
      stdDeviation: 50,
    },
  });
  gsap.to(e.target, {
    duration: 5,
    opacity: 0,
  });
  setTimeout(()=> {
    window.location.href = "./menu.html";
  }, 6000)
})
