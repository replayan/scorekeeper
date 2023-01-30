const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const reset = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");

let p1score = 0;
let p2score = 0;
let gameOver = false;
let winningScore = 3;

p1btn.addEventListener("click", function () {
  if (!gameOver) {
    p1score++;
    if (p1score === winningScore) {
      gameOver = true;
      p1.classList.add("has-text-success");
      p2.classList.add("has-text-danger");
      p1btn.disabled = true;
      p2btn.disabled = true;
    }
    p1.textContent = p1score;
  }
});

p2btn.addEventListener("click", function () {
  if (!gameOver) {
    p2score++;
    if (p2score === winningScore) {
      gameOver = true;
      p2.classList.add("has-text-success");
      p1.classList.add("has-text-danger");
      p1btn.disabled = true;
      p2btn.disabled = true;
    }
    p2.textContent = p2score;
  }
});

playTo.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

function resetGame() {
  p1score = 0;
  p2score = 0;
  p1.textContent = 0;
  p2.textContent = 0;
  p1.classList.remove("has-text-success", "has-text-danger");
  p2.classList.remove("has-text-success", "has-text-danger");
  gameOver = false;
  p1btn.disabled = false;
  p2btn.disabled = false;
}
reset.addEventListener("click", resetGame);
