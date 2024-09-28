const questions = [
  {
      question: "Who is navin gay to in class 12th?",
      options: ["Guru", "Prince", "Poorvash", "Balaya"],
      answer: 0
  },
  {
      question: "Which language is used for web development?",
      options: ["Python", "Java", "HTML", "C++"],
      answer: 2
  },
  {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 2
  },
  {
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.querySelector('.ques');
  const optionsElement = document.querySelector('.opt');

  questionElement.textContent = questions[currentQuestion].question;
  optionsElement.innerHTML = '';

  questions[currentQuestion].options.forEach((option, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<label><input type="radio" name="opt" value="${index}"> ${option}</label>`;
      optionsElement.appendChild(li);
  });
}

document.getElementById('next').addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="opt"]:checked');
  if (selectedOption) {
      if (parseInt(selectedOption.value) === questions[currentQuestion].answer) {
          score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
          loadQuestion();
      } else {
          displayResult();
      }
  } else {
      alert('Please select an answer!');
  }
});

function displayResult() {
  document.querySelector('.quiz-container').style.display = 'none';
  const resultElement = document.querySelector('.result');
  resultElement.style.display = 'block';
  resultElement.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

loadQuestion();