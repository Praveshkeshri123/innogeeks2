const ball = document.getElementById('ball');
const toggleBtn = document.getElementById('toggleBtn');
let isJumping = false;
let animationInterval;

function jump() {
  ball.style.transform = 'translateY(-100px)';
  setTimeout(() => {
    ball.style.transform = 'translateY(0)';
  }, 500);
}

function toggleJump() {
  if (!isJumping) {
    animationInterval = setInterval(jump, 1000);
    isJumping = true;
    toggleBtn.textContent = 'Stop Jump';
  } else {
    clearInterval(animationInterval);
    isJumping = false;
    toggleBtn.textContent = 'Start Jump';
  }
}

toggleBtn.addEventListener('click', toggleJump);
