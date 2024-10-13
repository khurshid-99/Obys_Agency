const h2 = document.querySelector("#line_part_1 h2");

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
locomotivScroll();

let tl = gsap.timeline();
function loder() {
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
    delay: 0.2,
    y: 1500,
    duration: 0.5,
    ease: Power4,
  });
}
loder();

function crsrAnamation() {
  document.addEventListener("mousemove", function (e) {
    gsap.to("#crsr", {
      y: e.y,
      x: e.x,
    });
  });
}
crsrAnamation();
function page1() {
  tl.from("#page1 .nav_items h4", {
    y: -100,
    x: 100,
    stagger: 0.5,
    duration: 0.5,
  });
  tl.from("#page1 .hero h1, #page1 #hero3 div", {
    y: 150,
    stagger: 0.3,
    duration: 0.5,
  });
}
page1();
Shery.makeMagnet("#page1 nav .nav_items h4", {});
