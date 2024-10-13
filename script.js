const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Add falling hearts in the background
function createFallingHearts() {
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.classList.add("falling-heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 5 + Math.random() * 5 + "s";
        heart.style.animationDelay = Math.random() * 5 + "s";

        document.body.appendChild(heart);
    }
}

createFallingHearts();

// Confetti heart explosion when Yes is clicked
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = 3 + Math.random() * 2 + "s";
        confetti.style.animationDelay = Math.random() * 0.5 + "s";
        
        document.body.appendChild(confetti);
    }
}

// Change text, gif, and add heart animation, confetti, and message when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAAAAA KAMU KECIL, TAPI AKU SUKA SIH EH!!❤️";
  question.classList.add("animate"); 
  gif.src = "https://media.giphy.com/media/5vYwHanb6y3HWBQIox/giphy.gif?cid=790b7611xwh7xf62wl8hphtw5ce30ltrbd9ws6e9zlurl079&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  
  // Show romantic message
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = "You're the best thing that ever happened to me. ❤️";
  document.querySelector('.wrapper').appendChild(message);
  
  createConfetti(); // Add confetti effect
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Prevent No button from being clicked
noBtn.addEventListener("click", (event) => {
  event.preventDefault();  // Prevent the No button from being clicked
});
