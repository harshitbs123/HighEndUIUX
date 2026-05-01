window.addEventListener("DOMContentLoaded", () => {
  if (!window.Lenis) {
    console.error("Lenis failed to load.");
    return;
  }

  const lenis = new Lenis({
    duration: 1.8,        // ⬅️ increase smoothness
    smoothWheel: true,
    smoothTouch: false,   // ⬅️ important (prevents jitter on touch)
    easing: (t) => 1 - Math.pow(1 - t, 3), // ⬅️ smoother easing curve
  });

  window.lenis = lenis;

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

// 
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const section = document.getElementById("taglineSection");

window.addEventListener("scroll", () => {
  const position = section.getBoundingClientRect();

  if (position.top <= 0) {
    // show new navbar
    nav1.style.opacity = "0";
    nav2.style.opacity = "1";
    nav2.style.pointerEvents = "auto";
  } else {
    // show old navbar
    nav1.style.opacity = "1";
    nav2.style.opacity = "0";
    nav2.style.pointerEvents = "none";
  }
});