// Debug script to check for errors
console.log("Checking if hammer functionality works");

// Check if cursor element exists
const cursorElement = document.querySelector('.cursor');
console.log("Cursor element exists:", cursorElement !== null);

// Check if hammer image exists
const img = new Image();
img.onload = function() {
    console.log("Hammer image loaded successfully");
};
img.onerror = function() {
    console.log("Error loading hammer image");
};
img.src = './images/hammer.png';

// Check event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
}); 