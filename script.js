document.addEventListener("DOMContentLoaded", () => {
    const bubblesContainer = document.querySelector(".bubbles");
  
    function createBubble() {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      const size = Math.random() * 10 + 1; // Random size between 10px and 30px
      const position = Math.random() * 100; // Random horizontal position
  
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${position}%`;
      bubble.style.animationDuration = `${Math.random() * 3 + 10}s`; // Random duration between 2s and 5s
  
      bubblesContainer.appendChild(bubble);
  
      // Remove the bubble after it finishes animation
      bubble.addEventListener("animationend", () => {
        bubble.remove();
      });
    }
  
    // Create bubbles at random intervals
    setInterval(createBubble, 500);
  });