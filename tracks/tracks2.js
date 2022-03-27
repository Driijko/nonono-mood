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

// Can animation ------------------------------------------------
let tl2 = gsap.timeline({repeat: -1, delay: 0.28});
tl2.set(".rects2", {transformOrigin: "50% 50%"});
tl2.set(".rects2-2", {transformOrigin: "50% 50%"});

tl2.to("#rect2-1", {
  duration: 5,
  ease: "power4.in",
  opacity: 1,
}, 0);
tl2.to("#rect2-1", {
  duration: 1.05,
  ease: "power4.out",
  rotation: 360,
  repeat: -1,
}, 6);
tl2.to("#circle2-1", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(25, 100%, 50%)",
  ease: "steps(1)",
},0);
tl2.to(".rects2-2", {
  duration:7,
  opacity: 1,
  ease: "none",
  stagger: 7,
},25);
tl2.to("#rect2-2-1", {
  duration: 600,
  rotation: 10000,
  ease: "none",
}, 32);
tl2.to("#rect2-2-2", {
  duration: 600,
  rotation: -10000,
  ease: "none",
}, 39);
tl2.to("#rect2-2-3", {
  duration: 600,
  rotation: 10000,
  ease: "none",
}, 46);
tl2.to("#rect2-2-4", {
  duration: 600,
  rotation: -10000,
  ease: "none",
}, 53);
tl2.to("#rect2-2-5", {
  duration: 600,
  rotation: 10000,
  ease: "none",
}, 60);
tl2.to("#circle2-2", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(20, 100%, 50%)",
  ease: "steps(1)",
}, 73.55);
tl2.to("#circle2-3", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(15, 100%, 50%)",
  ease: "steps(1)",
}, 77.6);
tl2.to("#circle2-4", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(10, 100%, 50%)",
  ease: "steps(1)",
}, 81.65);
tl2.to("#circle2-5", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(5, 100%, 50%)",
  ease: "steps(1)",
}, 85.7);
tl2.to("#circle2-6", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(0, 100%, 50%)",
  ease: "steps(1)",
}, 89.75);
tl2.to("#circle2-7", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(355, 100%, 50%)",
  ease: "steps(1)",
}, 89.8);
tl2.to("#circle2-8", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(350, 100%, 50%)",
  ease: "steps(1)",
}, 89.85);
tl2.to("#circle2-9", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(345, 100%, 50%)",
  ease: "steps(1)",
}, 89.9);
tl2.to("#circle2-10", {
  duration: 0.5,
  repeat: -1,
  fill: "hsl(340, 100%, 50%)",
  ease: "steps(1)",
}, 89.95);

const firstPause = 107;
const firstPauseDuration = 93.5;
tl2.to("#circle2-2", {
  duration: firstPauseDuration,
  fill: "hsl(20, 100%, 30%)",
}, firstPause);
tl2.to("#circle2-3", {
  duration: firstPauseDuration,
  fill: "hsl(15, 100%, 30%)",
}, firstPause);
tl2.to("#circle2-4", {
  duration: firstPauseDuration,
  fill: "hsl(10, 100%, 30%)",
}, firstPause);
tl2.to("#circle2-5", {
  duration: firstPauseDuration,
  fill: "hsl(5, 100%, 30%)",
}, firstPause);
tl2.to("#circle2-6", {
  duration: firstPauseDuration,
  fill: "hsl(0, 100%, 30%)",
}, firstPause);
tl2.to("#circle2-7", {
  duration: firstPauseDuration,
  fill: "hsl(355, 100%, 30%)",
}, firstPause);
tl2.to("#circle2-8", {
  duration: firstPauseDuration,
  fill: "hsl(350, 100%, 30%)",
}, firstPause);
tl2.to("#circle2-9", {
  duration: firstPauseDuration,
  fill: "hsl(345, 100%, 30%)",
}, firstPause);
tl2.to("#circle2-10", {
  duration: firstPauseDuration,
  fill: "hsl(340, 100%, 30%)",
}, firstPause);
tl2.to("#rect2-2", {
  duration: 5,
  opacity: 1,
  ease: "power4.in",
}, firstPause);
tl2.to("#rect2-2", {
  duration: 1.05,
  ease: "power4.out",
  rotation: 360,
  repeat: -1,
}, firstPause + 5.525);
tl2.to(".rects2", {
  stroke: "hsla(30, 100%, 50%, 0.3)",
  duration: 20,
  strokeWidth: 400,
  ease: "steps(10)",
}, firstPause + 75);
tl2.to(".circles2", {
  fill: "hsl(250, 100%, 10%)",
  duration: 67,
  stagger: 7.33,
}, firstPause + 110);
tl2.to(".rects2", {
  duration: 0,
  strokeWidth: 1,
  ease: "none",
}, firstPause + 110);
tl2.pause();


let tl3 = gsap.timeline();
tl3.to("#rect3-1", {
  duration: 20,
  fill: "hsla(250, 100%, 60%, 0.8)",
  yoyo: true,
  ease: "none",
  repeat: -1,
});
tl3.to("#rect3-2", {
  duration: 23,
  fill: "hsla(240, 100%, 60%, 0.8)",
  yoyo: true,
  ease: "none",
  repeat: -1,
});
tl3.to("#rect3-3", {
  duration: 27,
  fill: "hsla(230, 100%, 60%, 0.8)",
  yoyo: true,
  ease: "none",
  repeat: -1,
});
tl3.to("#rect3-4", {
  duration: 30,
  fill: "hsl(220, 100%, 60%)",
  yoyo: true,
  ease: "none",
  repeat: -1,
});

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

let tl1 = gsap.timeline({delay: 6.7});
tl1.set(".rects5", {transformOrigin: "50% 50%",});
tl1.to(".lines5", {
  duration: 0.1,
  stroke: "hsla(0, 100%, 50%, 1)",
})
tl1.to(".hlines5", {
  duration: 4.2,
  stroke: "hsla(0, 100%, 50%, 0.1)",
  strokeWidth: 300,
  yoyo: true,
  repeat: -1,
  ease: "power4.out",
}, 8.6);
tl1.to(".vlines5", {
  stroke: "hsla(0, 100%, 0%, 0.9)",
  strokeWidth: 75,
  duration: 4.2,
  yoyo: true,
  repeat: -1,
  ease: "power4.out",
}, 12.8);

tl1.to(".rects5", {
  opacity: 1,
  delay: 18,
  duration: 20,
  ease: "power4.in",
  stagger: 10,
}, 0);
tl1.to(["#rect5-1", "#rect5-3"], {
  rotation: 10000,
  duration: 300,
  ease: "none",
}, 0);
tl1.to("#rect5-2", {
  rotation: -10000,
  duration: 300,
  ease: "none",
}, 0);
tl1.to(".rects5", {
  strokeWidth: 200,
  stroke: "hsla(0, 100%, 50%, 0.8)",
  duration: 20,
  ease: "none",
  repeat: -1,
  yoyo: true,
  stagger: 10,
}, 0);
tl1.to(".rects5", {
  strokeWidth: 200,
  stroke: "hsla(330, 100%, 40%, 0.5)",
  fill: "black",
  duration: 20,
  ease: "none",
}, 178);
tl1.to(".rects5", {
  strokeWidth: 1500,
  stroke: "hsla(0, 100%, 40%, 0.1)",
  fill: "red",
  duration: 110,
  ease: "none",
}, 198);
tl1.to("#test", {
  duration: 0,
  fill: "white",
}, 178);
tl1.to("#filter-effect5-1", {
  attr: {
    scale: 150,
  },
  duration: 150,
  ease: "none",
}, 178);

tl1.pause();