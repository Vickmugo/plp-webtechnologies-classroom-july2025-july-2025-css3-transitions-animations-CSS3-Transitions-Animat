
let moveDistance = 200;

/**
 * Calculate new transform string based on distance
 * @param {number} distance - distance in pixels to move
 * @returns {string} - CSS transform value
 */
function calculateTransform(distance) {
  return `translateX(${distance}px)`;
}

/**
 * Toggles animation on the move-box
 * Demonstrates local scope and DOM manipulation
 */
function animateBox() {
  const box = document.getElementById("move-box");
  // Local scope variable
  let currentTransform = box.style.transform;
  // Use return value from calculateTransform
  box.style.transform = currentTransform ? "" : calculateTransform(moveDistance);
}


function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("show");
  popup.classList.remove("hidden");
}

/**
 * Hide popup by toggling classes
 */
function hidePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
  // Wait for transition to finish before hiding completely
  setTimeout(() => popup.classList.add("hidden"), 500);
}

// ===== Event Listeners =====
document.getElementById("move-btn").addEventListener("click", animateBox);
document.getElementById("popup-btn").addEventListener("click", showPopup);
document.getElementById("close-popup").addEventListener("click", hidePopup);
