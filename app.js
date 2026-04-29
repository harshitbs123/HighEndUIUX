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