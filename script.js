const h2 = document.querySelector("#line_part_1 h2");

let tl = gsap.timeline();

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

tl.from("#loder .line h1, .line p", {
  y: 160,
  duration: 0.6,
  stagger: 0.5,
  delay: 0.5,
});
tl.to("#loder", {
  opacity: 0,
  duration: 0.7,
  delay: 1.5,
  displaly: "none",
});

function crsrAnamation() {
  document.addEventListener("mousemove", function (e) {
    gsap.to("#crsr", {
      y: e.y,
      x: e.x,
    });
  });
}
crsrAnamation();

gsap.from("#hero1 h1, #hero2 h1, #hero3 div, #hero4 h1", {
  y: 170,
  duration: 0.6,
  stagger: 0.3,
});
