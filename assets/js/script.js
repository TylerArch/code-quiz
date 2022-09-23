// assignment code
// DOM Elements
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var startButton = document.getElementById("startButton");
var timer = document.querySelector("#countdownTimer");
var timerEl = document.querySelector("#timeLeft");
var time = 25;
var container = document.querySelector("#container");
var container2 = document.querySelector("#container2");
var container3 = document.querySelector("#container3");
var container4 = document.querySelector("#container4");
var h2 = document.querySelector("h2");
var ul = document.querySelector("ul");
var submitButton = document.querySelector("#submitButton");

// global variables
var countdownTimer;
var multChoiceBox;
var answers;
var wrongAnswer;
var currentScore = 0;
var initials;
var questions;
var currentQuestion = 0;
var arrayOfScores;




// functions
//starts quiz
function startQuiz(){
  container.removeAttribute("class", "hidden");
  startButton.setAttribute("class", "hidden");
  countdownTimer = setInterval(countdown, 1000);
  timerEl.textContent = time;
  showQuestion(currentQuestion);
}

//This function displays the current question and answer choices
function showQuestion(i){
    var currQuestionObj = questions[currentQuestion];
    h2.textContent = currQuestionObj.question;
    button1.textContent = currQuestionObj.answers[0];
    button2.textContent = currQuestionObj.answers[1];
    button3.textContent = currQuestionObj.answers[2];
    button4.textContent = currQuestionObj.answers[3];
    //event listener for button click goes here
    ul.addEventListener("click", questionAnswer);
}

//This function ends the quiz
function endQuiz(){
  clearInterval(countdownTimer);
  container.setAttribute("class", "hidden");
  container2.removeAttribute("class", "hidden");
  container3.removeAttribute("class", "hidden");
  submitButton.addEventListener("click", writeScores);
  getScores();  
}


//this function is for the countdown timer 
function countdown() {
  time --;
  timerEl.textContent = time;
  if(time <= 0){
  endQuiz();
  }
}

//These are the questions and answer choices
var questions = [
  {
    question: "How do you reference a class in JavaScript?",
    answers: [
      ".class",
      "#class",
      "[class]]",
      "{class}"
    ],
    correctAnswer: ".class",
  },
  
  {
    question: "How do you reference an ID in JavaScript",
    answers: [
      ".id",
      "#id",
      "[id]",
      "{id}"
    ], 
    correctAnswer: "#id",
  },

  {
    question: "Local Storage stores which type of data?",
    answers: [
      "arrays",
      "integers",
      "strings",
      "pasta"
    ], 
    correctAnswer: "strings",
  },

  {
    question: "What is the proper syntax for calling a function?",
    answers: [
      "function = (function)",
      "(function)",
      "function();",
      "None of the above"
    ], 
    correctAnswer: "function();",
  },

  {
    question: "What method is used to detect a click on a button?",
    answers: [
      "setAttribute",
      "console.log",
      "querySelectorAll",
      "addEventListener"
    ], 
    correctAnswer: "addEventListener",
  }
]

//get what I have from local storage and push new score to array
//get score function from local storage to print to page
function writeScores() {
  var initials = document.querySelector("textarea").value;
  var scores = JSON.parse(localStorage.getItem(initials));
  console.log(scores);
  if (scores) {
    scores.push(currentScore);
    localStorage.setItem(initials, JSON.stringify(scores));
  } else {
    localStorage.setItem(initials, JSON.stringify([currentScore]));
  }
  container.setAttribute("class", "hidden");
  container2.setAttribute("class", "hidden");
  container3.setAttribute("class", "hidden");
  container4.removeAttribute("class", "hidden");
  scores = JSON.parse(localStorage.getItem(initials));
  var h2 = document.querySelector(".initials");
  h2.textContent = initials;
  var scoresEl = document.querySelector(".scores");
  for (var i = 0; i < scores.length; i++) {
    var li = document.createElement("li")
    li.textContent = scores[i];
    scoresEl.appendChild(li);
  }
}

//This function determies the events that occur in the case of a correct or incorrect answer
//and terminates the quiz when no more questions remain
function questionAnswer(event) {
  if (questions[currentQuestion].correctAnswer == event.target.textContent) {
    currentScore++;
     alert ("Correct!")
  }else{
    time = time - 5;
    alert ("Incorrect!")
  }
  currentQuestion++;
  if (questions.length !== currentQuestion){
    showQuestion(currentQuestion);
  }else {
    endQuiz();
  }
}

//This function gets the current score
function getScores() {
  var scoresText = document.querySelector("#score");
  scoresText.textContent = currentScore;
}

startButton.onclick = startQuiz;
   
   
