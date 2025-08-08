const quizData = [
    {
      question: "Who developed Python Programming Language?",
      a: "Wick van Rossum",
      b: "Rasmus Lerdorf",
      c: "Guido van Rossum",
      d: " Niene Stom",
      correct: "c",
    },
    {
      question: "Which type of Programming does Python support?",
      a: " object-oriented programming",
      b: "structured programming",
      c: "functional programming",
      d: " all of the mentioned",
      correct: "d",
    },
    {
      question: " Is Python case sensitive when dealing with identifiers?",
      a: "no",
      b: "yes",
      c: " machine dependent",
      d: "none of the mentioned",
      correct: "b",
    },
    {
      question: "Which of the following is the correct extension of the Python file?",
      a: "python",
      b: "pl",
      c: "py",
      d: "p",
      correct: "c",
    },
    {
        question: " All keywords in Python are in _________",
        a: "Capitalized",
        b: " lower case",
        c: " UPPER CASE",
        d: "None of the mentioned",
        correct: "d",
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