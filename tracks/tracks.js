// TRACK ANIMATIONS ///////////////////////////////////////////////////
// Hunger animation -------------------------------------------------
// delay : 12
let tl1 = gsap.timeline({yoyo: true, repeat: 10, repeatDelay: 1, delay: 12});
tl1.to(".triangle", {
  duration: 3.5,
  opacity: 1,
  stagger: 0.5,
  repeat: -1,
  yoyo: true,
  repeatDelay: 2,
},0);
tl1.to(".triangle", {
  duration: 4,
  strokeWidth: 5,
  stroke: "hsla(300, 100%, 50%, 0.5)",
  repeat: -1,
  yoyo: true,
  repeatDelay: 1.3,
  stagger: 0.7,
}, 0);
tl1.to([".paths1", ".ellipses1"], {
  duration: 10, //10
  ease: "power2.in",
  opacity: 1,
}, 35); //35
tl1.to([".paths1", ".ellipses1"], {
  duration: 30,
  fill: "hsla(300, 100%, 50%, 0.2)",
  ease: "power2.in",
  yoyo: true,
  repeat: -1,
}, 45); //45
const duration1 = 60; // 60
const startTime1 = 60; //60
const repeatDelay1 = 56;
tl1.to("#path1-1", {
  duration: duration1,
  attr: {
    d: "M 500,190 Q -400,0 500,1200 Z",
  },
  ease: "none",
  yoyo: true,
  repeatDelay: repeatDelay1,
  repeat: 1,
}, startTime1);
tl1.to("#path1-2", {
  duration: duration1,
  attr: {
    d: "M 500,190 Q 1400,0 500,1200 Z",
  },
  ease: "none",
  yoyo: true,
  repeatDelay: repeatDelay1,
  repeat: 1,
}, startTime1);
tl1.to("#path1-3", {
  duration: duration1,
  attr: {
    d: "M 500,510 Q 200,500 500,1200 Z",
  },
  ease: "none",
  yoyo: true,
  repeatDelay: repeatDelay1,
  repeat: 1,
}, startTime1);
tl1.to("#path1-4", {
  duration: duration1,
  attr: {
    d: "M 500,510 Q 800,500 500,1200 Z",
  },
  ease: "none",
  yoyo: true,
  repeatDelay: repeatDelay1,
  repeat: 1,
}, startTime1);
tl1.to("#path1-5", {
  duration: duration1,
  attr: {
    d: "M 500,1700 Q 0,900 500,190 Z",
  },
  ease: "none",
  yoyo: true,
  repeatDelay: repeatDelay1,
  repeat: 1,
}, startTime1);
tl1.to("#path1-6", {
  duration: duration1,
  attr: {
    d: "M 500,1700 Q 1000,900 500,190 Z",
  },
  ease: "none",
  yoyo: true,
  repeatDelay: repeatDelay1,
  repeat: 1,
}, startTime1);
tl1.to([".paths1", ".ellipses1"], {
  duration: 1.35,
  stroke: "hsl(300, 100%, 50%)",
  strokeWidth: 10,
  ease: "power1.out",
  yoyo: true,
  repeat: 18,
}, 199.5);
tl1.to(".ellipses1", {
  duration: 45,
  strokeWidth: 700,
  stroke: "hsla(250, 100%, 80%, 0.1)",
  ease: "none",
},245);
tl1.pause();

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

// Empty Mirror animation ------------------------------------
let tl3 = gsap.timeline({delay: 14});
tl3.set("#rect3-1", {transformOrigin: "50% 50%", svgOrigin: "50% 50%"});
tl3.to("#rect3-1", {
  duration: 23,
  fill: "hsla(250, 100%, 60%, 0.8)",
  yoyo: true,
  ease: "none",
  repeat: -1,
}, 0);
tl3.to("#rect3-2", {
  duration: 70,
  fill: "hsla(240, 100%, 60%, 0.8)",
  yoyo: true,
  ease: "none",
  repeat: -1,
}, 0);
tl3.to("#rect3-3", {
  duration: 34,
  fill: "hsla(230, 100%, 40%, 0.8)",
  yoyo: true,
  ease: "none",
  repeat: -1,
}, 0);
tl3.to("#rect3-4", {
  duration: 60,
  fill: "hsl(220, 100%, 10%)",
  yoyo: true,
  ease: "none",
  repeat: -1,
}, 0);
tl3.pause();


// Black Rainbow animation ---------------------------------------
let tl4 = gsap.timeline({yoyo:true, repeat:1});
gsap.set(".rects4", {transformOrigin: "50% 50%"});
const duration4 = 60;
tl4.to("#rect4-1", {
  duration: duration4,
  ease: "none",
  scaleX: 0.8,
}, 0);
tl4.to("#rect4-2", {
  duration: duration4,
  fill: "hsla(250, 100%, 50%, 1)",
  ease: "none",
  scaleX: 1.1,
  scaleY: 0.9,
}, 0);
tl4.to("#rect4-3", {
  fill: "hsla(250, 100%, 20%, 1)",
  duration: duration4,
  translateY: "60%",
  ease: "none",
}, 0);
tl4.to("#rect4-4", {
  scaleY: 3,
  fill: "hsla(250, 100%, 20%, 0.5)",
  duration: duration4,
  translateY: "-50%",
  ease: "none",
}, 0);

tl4.to("#rect4-1", {
  duration: duration4,
  ease: "none",
  fill: "hsl(0, 100%, 70%)",
}, duration4);
tl4.to("#rect4-2", {
  duration: duration4,
  fill: "hsla(50, 100%, 50%, 0.5)",
  ease: "none",
}, duration4);
tl4.to("#rect4-3", {
  fill: "hsla(50, 100%, 80%, 0.3)",
  duration: duration4,
  translateY: "75%",
  translateX: "-40%",
  scaleY: 2.8,
  scaleX: 1.8,
  ease: "none",
}, duration4);
tl4.to("#rect4-4", {
  scaleY: 5,
  fill: "hsla(50, 100%, 50%, 0.5)",
  duration: duration4,
  translateY: "-100%",
  translateX: "10%",
  ease: "none",
}, duration4);

tl4.to("#rect4-1", {
  duration: duration4,
  ease: "none",
  fill: "hsl(0, 100%, 50%)",
  scaleX: 1.1
}, duration4 * 2);
tl4.to("#rect4-2", {
  duration: duration4,
  scaleX: 1.6,
  scaleY: 0.7,
  fill: "hsla(20, 100%, 50%, 0.5)",
  ease: "none",
}, duration4 * 2);
tl4.to("#rect4-3", {
  fill: "hsla(0, 100%, 50%, 0.8)",
  duration: duration4,
  translateY: "75%",
  translateX: "0%",
  scaleY: 1.5,
  scaleX: 3.8,
  ease: "none",
}, duration4 * 2);
tl4.to("#rect4-4", {
  scaleY: 2,
  scaleX: 2.1,
  fill: "hsla(20, 100%, 50%, 0.4)",
  duration: duration4,
  translateY: "-100%",
  translateX: "0%",
  ease: "none",
}, duration4 * 2);

tl4.to("#rect4-1", {
  duration: duration4,
  ease: "none",
  fill: "hsl(0, 100%, 0%)",
  scaleX: 1.1
}, duration4 * 3);
tl4.to("#rect4-2", {
  duration: duration4,
  scaleX: 1.6,
  scaleY: 0.7,
  fill: "hsla(0, 100%, 50%, 0.1)",
  ease: "none",
}, duration4 * 3);
tl4.to("#rect4-3", {
  fill: "hsla(0, 100%, 50%, 0.8)",
  duration: duration4,
  translateY: "75%",
  translateX: "0%",
  scaleY: 1.5,
  scaleX: 3.8,
  ease: "none",
}, duration4 * 3);
tl4.to("#rect4-4", {
  scaleY: 1.5,
  scaleX: 2.1,
  fill: "hsla(20, 100%, 0%, 1)",
  duration: duration4,
  translateY: "-100%",
  translateX: "0%",
  ease: "none",
}, duration4 * 3);
tl4.pause();

// Police Truck animation ---------------------------------
let tl5 = gsap.timeline({delay: 6.7});
tl5.set(".rects5", {transformOrigin: "50% 50%",});
tl5.to(".lines5", {
  duration: 0.1,
  stroke: "hsla(0, 100%, 50%, 1)",
},0)
tl5.to(".hlines5", {
  duration: 4.2,
  stroke: "hsla(0, 100%, 50%, 0.1)",
  strokeWidth: 300,
  yoyo: true,
  repeat: -1,
  ease: "power4.out",
}, 8.6);
tl5.to(".vlines5", {
  stroke: "hsla(0, 100%, 0%, 0.9)",
  strokeWidth: 75,
  duration: 4.2,
  yoyo: true,
  repeat: -1,
  ease: "power4.out",
}, 12.8);

tl5.to(".rects5", {
  opacity: 1,
  delay: 18,
  duration: 20,
  ease: "power4.in",
  stagger: 10,
}, 0);
tl5.to(["#rect5-1", "#rect5-3"], {
  rotation: 10000,
  duration: 300,
  ease: "none",
}, 0);
tl5.to("#rect5-2", {
  rotation: -10000,
  duration: 300,
  ease: "none",
}, 0);
tl5.to(".rects5", {
  strokeWidth: 200,
  stroke: "hsla(0, 100%, 50%, 0.8)",
  duration: 20,
  ease: "none",
  repeat: -1,
  yoyo: true,
  stagger: 10,
}, 0);
tl5.to(".rects5", {
  strokeWidth: 200,
  stroke: "hsla(330, 100%, 40%, 0.5)",
  fill: "black",
  duration: 20,
  ease: "none",
}, 178);
tl5.to(".rects5", {
  strokeWidth: 1500, 
  stroke: "hsla(250, 100%, 40%, 0.1)",
  fill: "red",
  duration: 55, 
  ease: "none",
}, 198);
tl5.to(".rects5", {
  strokeWidth: 1,
  stroke: "hsla(360, 100%, 50%, 1)",
  duration: 50,
}, 253);
tl5.to("#filter-effect5-1", {
  attr: {
    scale: 150,
  },
  duration: 150,
  ease: "none",
}, 178);

tl5.pause();

let width = 0;
let orienationVar;

function layout () {
  // Redefine 'vh' in CSS based on what's actually available (excluding address bar).
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // Determine what orientation device has.
  // We add +1 to gutter lengths to avoid layout bugs that I don't quite understand.
  if (window.innerWidth <= window.innerHeight) {
    let aspectRatio = window.innerHeight / window.innerWidth;
    if (aspectRatio < 1.777) {
      width = ((0.5625 * window.innerHeight) / window.innerWidth) * window.innerWidth;
      document.documentElement.style.setProperty("--w", `${width}px`);
      document.documentElement.style.setProperty("--h", `${window.innerHeight}px`);
      document.documentElement.style.setProperty("--gh", `${window.innerHeight + 1}px`);
      document.documentElement.style.setProperty("--gw", `${((window.innerWidth - width)/2) + 1}px`);
    }
    else {
      width = window.innerWidth;
      document.documentElement.style.setProperty("--h", `${window.innerWidth * 1.777}px`);
      document.documentElement.style.setProperty("--w", `${window.innerWidth}px`);
      document.documentElement.style.setProperty("--gh", `${((window.innerHeight - (window.innerWidth * 1.777))/2) + 1}px`);
      document.documentElement.style.setProperty("--gw", `${window.innerWidth + 1}px`);
    };
    orientationVar = "portrait";
    // document.documentElement.style.setProperty("--orientation", "portrait");
  }
  else {
    let aspectRatio = window.innerWidth / window.innerHeight;
    if(aspectRatio < 1.6) {
      let height = ((0.625 * window.innerWidth) / window.innerHeight) * window.innerHeight;
      width = window.innerWidth;
      document.documentElement.style.setProperty("--h", `${height}px`);
      document.documentElement.style.setProperty("--w", `${window.innerWidth}px`);
      document.documentElement.style.setProperty("--gh", `${((window.innerHeight - height)/2)+1}px`);
      document.documentElement.style.setProperty("--gw", `${(window.innerWidth) + 1}px`);
    }
    else {
      width = vh * 100 * 1.6;
      document.documentElement.style.setProperty("--h", `${window.innerHeight}px`);
      document.documentElement.style.setProperty("--w", `${width}px`);
      document.documentElement.style.setProperty("--gh", `${window.innerHeight + 1}px`);
      document.documentElement.style.setProperty("--gw", `${((window.innerWidth - width)/2) + 1}px`);
    }
    orientationVar = "landscape";
    document.documentElement.style.setProperty("--orientation", "landscape");
  }
}

layout();

function resize() {
  resizeReady = true;
  layout();
}

let resizeReady = true;
window.addEventListener("resize", ()=> {
  if(resizeReady) {
    resizeReady = false;
    setTimeout(resize, 2000);
  }
});

// TRACK ANIMATIONS /////////////////////////////////////////
let currentAnimation = tl1;
let currentAnimationElement = document.getElementById("track-animation1");
currentAnimationElement.style.display = "block";

// AUDIO ELEMENT /////////////////////////////////////////////
const audioPlayer = document.getElementById("audio-player");
audioPlayer.addEventListener("ended", ()=> {
  currentAnimation.restart(true);
  currentAnimation.pause();
  switchToPlay();
});

// TRACK NAME //////////////////////////////////////////////
let trackNameElement = document.getElementById("track-name");
trackNameElement.innerHTML = "Hunger";

function switchTrackName(trackName) {
  const tl = gsap.timeline();
  tl.to(trackNameElement, {
    duration: 1,
    transform: "rotateY(90deg)", 
  });
  tl.to(trackNameElement, {
    duration: 1,
    transform: "rotateY(0deg)",
  })
  setTimeout(()=> {
    trackNameElement.innerHTML = trackName; 
  }, 1000);
}

// PLAY-PAUSE-BUTTON //////////////////////////////////////////
let buttonState = "play";
function switchToPause() {
  buttonState = "pause";
  currentAnimation.play();
  gsap.to("#pause-play-icon1", {
    duration: 1,
    attr: {
      d: "M 20,20 L 40,20 L 40,80 L 20,80",
    },
  });
  
  gsap.to("#pause-play-icon2", {
    duration: 1,
    attr: {
      d: "M 55,20 L 75,20 L 75,80 L 55,80 Z",
    },
  });
};

function switchToPlay() {
  buttonState = "play";
  currentAnimation.pause();
  gsap.to("#pause-play-icon1", {
    duration: 1,
    attr: {
      d: "M 30,20 L 55,35 L 55,65 L 30,80 Z",
    },
  });
  
  gsap.to("#pause-play-icon2", {
    duration: 1,
    attr: {
      d: "M 55,35 L 80,50 L 55,65 L 54,65 Z",
    },
  });
};

document.getElementById("pause-play-button").addEventListener("click", e => {
  if (buttonState === "play") {
    switchToPause();
    audioPlayer.play();
  } else {
    switchToPlay();
    audioPlayer.pause();
  }
});

// TRACK BUTTONS ////////////////////////////////////////////
for (let trackButton of document.getElementsByClassName("track-button")) {
  trackButton.addEventListener("click", e => {
    currentAnimationElement.style.display = "none";
    currentAnimation.restart(true);
    currentAnimation.pause();
    if (e.target.id === "hunger") {
      currentAnimationElement = document.getElementById("track-animation1");
      currentAnimation = tl1;
      switchTrackName("Hunger");
      audioPlayer.src = "./assets/audio/hunger.mp3";
    } else if (e.target.id === "can") {
      currentAnimationElement = document.getElementById("track-animation2");
      currentAnimation = tl2;
      switchTrackName("Can");
      audioPlayer.src = "./assets/audio/can.mp3";
    } else if (e.target.id === "empty-mirror") {
      currentAnimationElement = document.getElementById("track-animation3");
      currentAnimation = tl3;
      switchTrackName("Empty Mirror");
      audioPlayer.src = "./assets/audio/empty-mirror.mp3";
    } else if (e.target.id === "black-rainbow") {
      currentAnimationElement = document.getElementById("track-animation4");
      currentAnimation = tl4;
      switchTrackName("Black Rainbow / Black Gold");
      audioPlayer.src = "./assets/audio/black-rainbow-black-gold.mp3";
    } else if (e.target.id === "police-truck") {
      currentAnimationElement = document.getElementById("track-animation5");
      currentAnimation = tl5;
      switchTrackName("Police Truck");
      audioPlayer.src = "./assets/audio/police-truck.mp3"
    };
    if (buttonState = "pause") {
      switchToPlay();
    };
    currentAnimationElement.style.display = "block";
  });
}

// ABOUT LINK ///////////////////////////////////////////////////
document.getElementById("about-link").addEventListener("click", e => {
  e.preventDefault();
  gsap.to(".vp", {
    duration: 5,
    opacity: 0,
  });
  setTimeout(()=> {
    window.location.href="./about.html";
  },5000);
});



