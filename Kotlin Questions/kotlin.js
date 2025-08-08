const quizData = [
    {
      question: " What is Kotlin?",
      a: "A front-end scripting language",
      b: " A markup language",
      c: " A general-purpose programming language for JVM and Android",
      d: "A database query language",
      correct: "c",
    },
    {
      question: "Which company developed Kotlin?",
      a: "Google",
      b: "Oracle",
      c: "JetBrains",
      d: "Microsoft",
      correct: "c",
    },
    {
      question: " What is a primary constructor in Kotlin?",
      a: "A special member function",
      b: "A function that initializes variables",
      c: "A concise way to initialize a class",
      d: " A type of class",
      correct: "c",
    },
    {
      question: "Which operator is used in Kotlin for string interpolation?",
      a: "$",
      b: "@",
      c: "#",
      d: "%",
      correct: "a",
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