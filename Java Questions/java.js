const quizData = [
    {
      question: "Who invented Java Programming?",
      a: "Guido van Rossum",
      b: "James Gosling",
      c: " Dennis Ritchie",
      d: "Bjarne Stroustrup",
      correct: "b",
    },
    {
      question: "Which statement is true about Java?",
      a: " Java is a sequence-dependent programming language",
      b: " Java is a code dependent programming language",
      c: " Java is a platform-dependent programming language",
      d: " Java is a platform-independent programming language",
      correct: "d",
    },
    {
      question: " Which component is used to compile, debug and execute the java programs?",
      a: "JRE",
      b: "JIT",
      c: "JDK",
      d: "JVM",
      correct: "c",
    },
    {
      question: " Which one of the following is not a Java feature?",
      a: "Object-oriented",
      b: "Use of pointers",
      c: "Portable",
      d: " Dynamic and Extensible",
      correct: "b",
    },
    {
        question: " Which of these cannot be used for a variable name in Java?",
        a: "identifier & keyword",
        b: "identifier",
        c: "keyword",
        d: " none of the mentioned",
        correct: "c",
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