// Fixed brand
const brand = "Omnisol AI | ";

// Rotating taglines
const taglines = [
  "let us craft your digital success",
  "we bring innovation",
  "we are for granted"
];

// Animation settings
let taglineIndex = 0;
let text = taglines[taglineIndex] + "           "; // more spaces = smoother transition
let position = 0;
let speed = 0.6; // ⚡ faster + smoother (increase to go even faster)

function animate() {
  position += speed;

  if (position >= text.length) {
    position = 0;
    taglineIndex = (taglineIndex + 1) % taglines.length;
    text = taglines[taglineIndex] + "           ";
  }

  // Use fractional scrolling for smooth pixel-like movement
  const i = Math.floor(position);
  const display = text.slice(i) + text.slice(0, i);

  document.title = brand + display;

  requestAnimationFrame(animate);
}

animate();