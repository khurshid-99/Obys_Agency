const h2 = document.querySelector("#line_part_1 h2");
const cursor = document.querySelector("#cursor");
const videoContainer = document.querySelector(".video_container");
const videoCursor = document.querySelector(".video_cursor");
const i1 = document.querySelector(".video_cursor #i1");
const i2 = document.querySelector(".video_cursor #i2");
const hero3 = document.querySelector("#hero3");
const video = document.querySelector(".video_container video");

function locomotivScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function loder() {
  let tl = gsap.timeline();
  tl.from("#loder .line h1, .line p", {
    y: 160,
    duration: 0.6,
    stagger: 0.5,
    delay: 0.5,
    opacity: 1,
  });
  tl.to("#loder .line h3", {
    opacity: 1,
    duration: 0.3,
    onStart: function () {
      let count = "";
      setInterval(function () {
        if (count === 100) {
          clearInterval();
        } else {
          count++;
          h2.innerHTML = count;
        }
      }, 30);
    },
  });
  tl.from("#loder .line #line_part_1 h2", {
    opacity: 0,
    delay: 0.3,
    duration: 0.5,
  });
  tl.from("#loder .line p", {
    opacity: 0,
    duration: 0.5,
  });
  tl.to("#loder, #loder .line h1, .line p", {
    opacity: 0,
    duration: 0.5,
    delay: 3,
    display: "none",
  });
  tl.from("#page1", {
    opacity: 0,
    delay: 0.2,
    y: 1500,
    duration: 0.5,
    ease: Power4,
  });
  tl.from("#page1 nav, #page1_part2", {
    opacity: 0,
    ease: Power4,
    scale: 0,
  });
  tl.from("#page1 .hero h1, #page1 #hero3 div", {
    y: 150,
    opacity: 0,
    stagger: 0.3,
    duration: 0.5,
  });
  tl.from("#page2 .video_container", {
    opacity: 0,
    y: 150,
  });
}

function crsrAnamation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  Shery.makeMagnet("#page1 nav .nav_part2 ul li");

  // ------------------------------

  function cursorAnamation() {
    videoContainer.addEventListener("mouseenter", function () {
      videoContainer.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
          opacity: 0,
          display: "none",
          scale: 0,
        });
      });
    });
    videoContainer.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        opacity: 1,
        display: "initial",
        scale: 1,
      });
    });
  }
  cursorAnamation();

  let flag = 0;
  video.addEventListener("click", function () {
    if (flag === 0) {
      video.play();
      video.style.opacity = 1;
      i1.style.opacity = 0;
      i2.style.opacity = 1;
      gsap.to(".video_cursor", {
        scale: 0.3,
      });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      i1.style.opacity = 1;
      i2.style.opacity = 0;
      gsap.to(".video_cursor", {
        scale: 1,
      });
      flag = 0;
    }
  });
}

function shreyAniimation() {
  Shery.imageEffect(".page3_img_div", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749691738595 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.4, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.9, range: [0, 10] },
      metaball: { value: 0.4, range: [0, 2] },
      discard_threshold: { value: 0.7, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}

function videoCursorAnamition() {
  videoContainer.addEventListener("mousemove", (e) => {
    const rect = videoContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    videoCursor.style.left = x + "px";
    videoCursor.style.top = y + "px";
  });
  videoContainer.addEventListener("mouseenter", () => {
    videoCursor.style.display = "block";

    i1.style.position = "absolute";
    i1.style.top = "50%";
    i1.style.left = "50%";
    i1.style.transform = "translate(-50%, -50%)";
  });
  videoContainer.addEventListener("mouseleave", () => {
    videoCursor.style.display = "flex";
    videoCursor.style.alignItems = "center";
    videoCursor.style.justifyContent = "center";
    videoCursor.style.position = "absolute";
    videoCursor.style.left = "80%";
    videoCursor.style.top = "-10%";
  });
}
function page1FlageAnamation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#page1_flag", {
      x: dets.x,
      y: dets.y,
    });
  });

  hero3.addEventListener("mouseenter", function () {
    gsap.to("#page1_flag", {
      opacity: 1,
    });
  });
  hero3.addEventListener("mouseleave", function () {
    gsap.to("#page1_flag", {
      opacity: 0,
    });
  });
}

locomotivScroll();
loder();
crsrAnamation();
videoCursorAnamition();
shreyAniimation();
page1FlageAnamation();

// -------------------------

// ------------------
function Page3(params) {
  
const page3Part1Inner1Text = document.querySelector(".page3_part1_inner1");
const page3Part1Inner2Text = document.querySelector(".page3_part1_inner2");
const page3Part2Inner2Text = document.querySelector(".page3_part2_inner2");
const page3Part2Inner3Text = document.querySelector(".page3_part2_inner3");
const page3Part3Inner1Text = document.querySelector(".page3_part3_inner1");
const page3Part3Inner3Text = document.querySelector(".page3_part3_inner3");

page3Part1Inner1Text.addEventListener("mouseenter", function (e) {
  gsap.to(".page3_part1_inner1_text h3", {
    y: -50,
  });
});
page3Part1Inner1Text.addEventListener("mouseleave", function (e) {
  gsap.to(".page3_part1_inner1_text h3", {
    y: 0,
  });
});

page3Part1Inner2Text.addEventListener("mouseenter", function (e) {
  gsap.to(".page3_part1_inner2_text h3", {
    y: -50,
  });
});
page3Part1Inner2Text.addEventListener("mouseleave", function (e) {
  gsap.to(".page3_part1_inner2_text h3", {
    y: 0,
  });
});

page3Part2Inner2Text.addEventListener("mouseenter", function (e) {
  gsap.to(".page3_part2_inner2_text h3", {
    y: -50,
  });
});
page3Part2Inner2Text.addEventListener("mouseleave", function (e) {
  gsap.to(".page3_part2_inner2_text h3", {
    y: 0,
  });
});

page3Part2Inner3Text.addEventListener("mouseenter", function (e) {
  gsap.to(".page3_part2_inner3_text h3", {
    y: -50,
  });
});
page3Part2Inner3Text.addEventListener("mouseleave", function (e) {
  gsap.to(".page3_part2_inner3_text h3", {
    y: 0,
  });
});

page3Part3Inner1Text.addEventListener("mouseenter", function (e) {
  gsap.to(".page3_part3_inner1_text h3", {
    y: -50,
  });
});
page3Part3Inner1Text.addEventListener("mouseleave", function (e) {
  gsap.to(".page3_part3_inner1_text h3", {
    y: 0,
  });
});

page3Part3Inner3Text.addEventListener("mouseenter", function (e) {
  gsap.to(".page3_part3_inner3_text h3", {
    y: -50,
  });
});
page3Part3Inner3Text.addEventListener("mouseleave", function (e) {
  gsap.to(".page3_part3_inner3_text h3", {
    y: 0,
  });
});

}
Page3()
// ------------------------------

let footerH1 = document.querySelector("#footer_hadline h1");
let footerH2 = document.querySelector("#footer_hadline h2");

function footerAnimationTex() {
  let text1 = "";
  let text2 = "";

  let footerTex1 = footerH1.textContent.split("");
  let footerTex2 = footerH2.textContent.split("");
  footerTex1.forEach(function (elem1) {
    text1 += `<span>${elem1}</span>`;
  });
  footerTex2.forEach(function (elem2) {
    text2 += `<span>${elem2}</span>`;
  });
  footerH1.innerHTML = text1;
  footerH2.innerHTML = text2;

  const footer = document.querySelector('#footer_hadline')
  footer.addEventListener('mouseenter',function(){
    gsap.to('#footer_hadline h1, #footer_hadline h1 span',{
      opacity: 0,
      stagger: 0.05,
    })
    // gsap.to('#footer_hadline h2, #footer_hadline h2 span',{
    //   delay: 0.35,
    //   opacity: 1,
    //   stagger: 0.1,
    // })
  })

  footer.addEventListener('mouseleave',function(){
    gsap.to('#footer_hadline h1, #footer_hadline h1 span',{
      opacity: 1,
      stagger: 0.1,
      delay: 0.35,
    })
    // gsap.from('#footer_hadline h2, #footer_hadline h2 span',{
    //   opacity: 0,
    //   stagger: 0.05,
    // })
  })
}

footerAnimationTex()
// --------------------------------

