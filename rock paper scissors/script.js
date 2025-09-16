const quiz = [
  { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "High Tech Machine Learning"], ans: 0 },
  { q: "CSS is used for?", opts: ["Styling web pages", "Storing data"], ans: 0 },
  { q: "Which language makes web pages interactive?", opts: ["JavaScript", "Python"], ans: 0 }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");

function loadQuestion() {
  let q = quiz[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.opts.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.className = "option";
    btn.onclick = () => selectOption(i);
    optionsEl.appendChild(btn);
  });
}

function selectOption(i) {
  if (i === quiz[current].ans) score++;
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.textContent = `Quiz Finished!`;
  optionsEl.innerHTML = `Your Score: ${score}/${quiz.length}`;
  nextBtn.style.display = "none";
}

nextBtn.onclick = () => {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

// Load first question
loadQuestion();
