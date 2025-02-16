// Load Timeline
const timelineContainer = document.getElementById("timeline-container");
if (timelineContainer) {
  mathematicians.forEach((math) => {
    const card = `
      <div class="timeline-card">
        <img src="${math.image}" alt="${math.name}">
        <h3>${math.name}</h3>
        <p>${math.contribution}</p>
        <a href="mathematicians/${math.name.toLowerCase()}.html" class="read-more">Read More</a>
      </div>
    `;
    timelineContainer.innerHTML += card;
  });
}

// Quiz Logic
const quizContainer = document.getElementById("quiz-container");
const quizResult = document.getElementById("quiz-result");
let currentQuestion = 0;
let score = 0;




function loadQuestion() {
  if (currentQuestion < quizzes.length) {
    const quiz = quizzes[currentQuestion];
    const options = quiz.options.map((option) => `
      <button class="quiz-option" onclick="checkAnswer('${option}')">${option}</button>
    `).join("");
    quizContainer.innerHTML = `
      <h2 class="quiz-question">${quiz.question}</h2>
      <div class="quiz-options">${options}</div>
    `;
  } else {
    quizContainer.innerHTML = "";
    quizResult.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score}/${quizzes.length}</p>
    `;
  }
}

function checkAnswer(selectedOption) {
  const quiz = quizzes[currentQuestion];
  if (selectedOption === quiz.answer) {
    score++;
  }
  currentQuestion++;
  loadQuestion();
}

// Load first question
loadQuestion();