const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

const balls = [];

// función para generar números aleatorios
function randomBetween(min, max, excludeZero = false) {
  let num;
  // do: literal es hace .... mientras ....
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (excludeZero && num === 0);
  return num;
}

// crea una bola nueva
function createBall() {
  const radius = 20;
  const x = randomBetween(radius, canvas.width - radius);
  const y = randomBetween(radius, canvas.height - radius);
  const vx = randomBetween(-10, 10, true);
  const vy = randomBetween(-10, 10, true);
  balls.push({ x, y, radius, vx, vy });
}

function animate() {
  // clear canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // update & draw each ball
  for (const ball of balls) {
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.vx = -ball.vx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.vy = -ball.vy;
    }

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // refresh frames
  requestAnimationFrame(animate);
}

// evento para el botón
document.getElementById("addBall").addEventListener("click", createBall);

// bola inicial
createBall();
animate();
