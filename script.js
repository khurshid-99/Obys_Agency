function loder(params) {}

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
