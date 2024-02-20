"use strict";
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input-number").value);
  if (
    score >= 1 &&
    document.querySelector(".section-right-top").textContent !==
      "🎉 CORRECT NUMBER"
  ) {
    if (!guess) {
      textStatement("⛔ NO NUMBER");
    } else if (guess === secretNumber) {
      textStatement("🎉 CORRECT NUMBER");
      document.querySelector("body").style.backgroundColor = "#80ed99";
      document.querySelector(".box").textContent = guess;
      document.querySelector(".input-number").style.backgroundColor = "#80ed99";
      document.querySelector(".box").style.padding = "2.6rem 7.5rem";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = score;
      }
    } else {
      textStatement(guess > secretNumber ? "📈 VERY HIGH" : "📉 VERY LOW");
      score -= 1;

      document.querySelector(".score").textContent = score;
    }
  } else if (score <= 0) {
    textStatement("💥 YOU LOST ");
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  textStatement("Start guessing...");
  document.querySelector(".input-number").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".input-number").style.backgroundColor = "#222";
  document.querySelector(".box").style.padding = "2.6rem";
  document.querySelector(".box").textContent = "?";
});
const textStatement = (message) => {
  document.querySelector(".section-right-top").textContent = message;
};
