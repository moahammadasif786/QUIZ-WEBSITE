const quizData = [
    {
      question: "What is JavaScript?",
      a: " JavaScript is a scripting language used to make the website interactive",
      b: " JavaScript is an assembly language used to make the website interactive",
      c: " JavaScript is a compiled language used to make the website interactive",
      d: " None of the mentioned",
      correct: "a",
    },
    {
      question: "Which of the following is correct about JavaScript?",
      a: "JavaScript is an Object-Based language",
      b: "JavaScript is Assembly-language",
      c: " JavaScript is an Object-Oriented language",
      d: "JavaScript is a High-level language",
      correct: "a",
    },
    {
      question: `The "function" and " var" are known as?`,
      a: "Keywords",
      b: "Data types",
      c: "Declaration statements",
      d: "Prototypes",
      correct: "c",
    },
    {
      question: "What are the different types of errors in JavaScript?",
      a: "Syntax errors",
      b: "Run time errors",
      c: "Logical Errors",
      d: "All of the above",
      correct: "d",
    },
    {
        question: "Which of the following built-in method is used to remove the last element from an array and return that element?",
        a: "last()",
        b: "pop()",
        c: "get()",
        d: "None of the above",
        correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="history.go(0)">Play Again</button>
            `;
      }
    }
  });