function layout () {
  // Redefine 'vh' in CSS based on what's actually available (excluding address bar).
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // Determine what orientation device has.
  // We add +1 to gutter lengths to avoid layout bugs that I don't quite understand.
  if (window.innerWidth <= window.innerHeight) {
    let aspectRatio = window.innerHeight / window.innerWidth;
    if (aspectRatio < 1.777) {
      let width = ((0.5625 * window.innerHeight) / window.innerWidth) * window.innerWidth;
      document.documentElement.style.setProperty("--w", `${width}px`);
      document.documentElement.style.setProperty("--h", `${window.innerHeight}px`);
      document.documentElement.style.setProperty("--gh", `${window.innerHeight + 1}px`);
      document.documentElement.style.setProperty("--gw", `${((window.innerWidth - width)/2) + 1}px`);
    }
    else {
      document.documentElement.style.setProperty("--h", `${window.innerWidth * 1.777}px`);
      document.documentElement.style.setProperty("--w", `${window.innerWidth}px`);
      document.documentElement.style.setProperty("--gh", `${((window.innerHeight - (window.innerWidth * 1.777))/2) + 1}px`);
      document.documentElement.style.setProperty("--gw", `${window.innerWidth + 1}px`);
    };
    // document.documentElement.style.setProperty("--orientation", "portrait");
  }
  else {
    let aspectRatio = window.innerWidth / window.innerHeight;
    if(aspectRatio < 1.6) {
      let height = ((0.625 * window.innerWidth) / window.innerHeight) * window.innerHeight;
      document.documentElement.style.setProperty("--h", `${height}px`);
      document.documentElement.style.setProperty("--w", `${window.innerWidth}px`);
      document.documentElement.style.setProperty("--gh", `${((window.innerHeight - height)/2)+1}px`);
      document.documentElement.style.setProperty("--gw", `${(window.innerWidth) + 1}px`);
    }
    else {
      let width = vh * 100 * 1.6;
      document.documentElement.style.setProperty("--h", `${window.innerHeight}px`);
      document.documentElement.style.setProperty("--w", `${width}px`);
      document.documentElement.style.setProperty("--gh", `${window.innerHeight + 1}px`);
      document.documentElement.style.setProperty("--gw", `${((window.innerWidth - width)/2) + 1}px`);
    }
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

// ANIMATION ////////////////////////////////////////////
gsap.to("#offset1", {
  duration: 6,
  delay: 2,
  attr: {
    offset: "5%",
  },
  ease: Power1.easein,
});

gsap.to("#offset2", {
  duration: 6,
  delay: 2,
  attr: {
    offset: "95%",
  },
  ease: Power1.easein,
});

gsap.to("#offset3", {
  duration: 6,
  delay: 2,
  attr: {
    offset: "10%",
  },
  ease: Power1.easein,
});

gsap.to(".paths1", {
  duration: 10,
  delay: 6,
  opacity: 1,
  attr: {
    "stroke-width": 200,
  }
});

// REDIRECTS ////////////////////////////////
function animatedExit() {
  gsap.to("#foreground", {
    duration: 5,
    "background-color": "hsla(250, 100%, 5%, 1)",
  });
};

function redirect(address) {
  animatedExit();
  setTimeout(()=> {
    window.location.href = address;
  }, 6000);
};

for (let link of document.getElementsByClassName("links")) {
  link.addEventListener("click", e=> {
    e.preventDefault();
    if (e.target.id === "tracks-link") {
      redirect("./tracks.html");
    } else if (e.target.id === "about-link") {
      redirect("./about.html");
    };
  });
};

