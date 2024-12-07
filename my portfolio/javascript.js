const textElement = document.getElementById('animated-text');
const texts = ["Video Editing", "Graphic design", "Digital Marketing"];
let index = 0;

function changeText() {
  textElement.classList.add('fade-out');  // Start fading out
  setTimeout(() => {
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
    textElement.classList.remove('fade-out');
    textElement.classList.add('fade-in');  // Start fading in
  }, 500);  // Duration matches CSS transition time
}

setInterval(changeText, 2000);  // Change text every 3 seconds
