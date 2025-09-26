const startBtn = document.getElementById("start-btn");
const coverPage = document.getElementById("cover-page");
const quizContainer = document.getElementById("quiz-container");
const quizEl = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const resultEl = document.getElementById("result");
const feedbackPopup = document.getElementById("feedback-popup");
const popupText = document.getElementById("popup-text");
const popupNextBtn = document.getElementById("popup-next-btn");

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

startBtn.addEventListener("click", () => {
  coverPage.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  startQuiz();
});

function startQuiz() {
  selectedQuestions = QUESTIONS.sort(() => Math.random() - 0.5).slice(0, 10);
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  const q = selectedQuestions[currentQuestionIndex];
  const qEl = document.createElement("h2");
  qEl.textContent = `${currentQuestionIndex + 1}. ${q.question}`;
  quizEl.appendChild(qEl);

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(btn, index));
    quizEl.appendChild(btn);
  });
}

function resetState() {
  quizEl.innerHTML = "";
  feedbackEl.classList.add("hidden");
  feedbackEl.textContent = "";
  nextBtn.classList.add("hidden");
  resultEl.classList.add("hidden");
}

function selectAnswer(button, index) {
  const q = selectedQuestions[currentQuestionIndex];
  const buttons = quizEl.querySelectorAll("button");
  
  buttons.forEach(b => b.disabled = true);

  if (index === q.answer) {
    score++;
    button.classList.add("correct");
    popupText.textContent = "Correct! 😁";
  } else {
    button.classList.add("wrong");
    popupText.textContent = `Wrong! 😟 The correct answer is: ${q.options[q.answer]}`;
  }

  // Show the popup
  feedbackPopup.classList.add("show");
}

// Next button inside popup
popupNextBtn.addEventListener("click", () => {
  feedbackPopup.classList.remove("show"); // hide popup
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showResult();
    logSubmission(score, selectedQuestions.length);
  }
});

function showResult() {
  resetState();
  resultEl.classList.remove("hidden");
  resultEl.textContent = `🎉 You scored ${score} / ${selectedQuestions.length} 🎉`;
}

// --- Google Sheets logging ---
function logSubmission(score, total) {
  fetch("https://script.google.com/macros/s/AKfycbxWraEKabsibKW_jGkdAzLbFHErepJVNUoRTp-0FqhgkkHAYasZwWnM_NwQdgKjHMUD2A/exec", { // replace with your web app URL
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ score, total })
  });
}
