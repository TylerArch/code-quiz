// assignment code
// DOM Elements
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var startButton = document.getElementById("startButton");
var timer = document.querySelector("#countdownTimer");
var timerEl = document.querySelector("#timeLeft");
var time = 45;
var container = document.querySelector("#container");


// global variables
var countdownTimer;
var multChoiceBox;
var answers;
var wrongAnswer;
var scoreBoard;
// var quizComplete = "quiz complete" + display scoreBoard = "score";
var initials;
var questions;
var endQuiz;

// functions
//starts quiz
function startQuiz(){
  container.removeAttribute("class", "hidden");
  startButton.setAttribute("class", "hidden");
  countdownTimer = setTimeout(countdown, 1000);
  timerEl.textContent = time;
  showQuestion();
  console.log("you clicked");
}


function showQuestion(){
    // figure which item to get from the array whenever this function is called
    var currQuestionObj = questions[i]
    var section = document.createElement("section");
    // create an h2 tag, give it the text of the question
    // create a ul tag 
    // for each answer, create an li tag
}

//this function is what happens when the start button is clicked


//this function is for the countdown timer 
function countdown() {
    time --;
    timerEl.textContent = time;
}



var currentScore = 0;
var secondsRemaining = 120;

// When the user clicks start, what needs to happen:
   // Timer starts 
   // Display a question
     // showAQuestion()



var questions = [
  {
    question: "How can Gary be such an amazing teacher?",
    answers: [
      "He really isn't.",
      "Why can't Katy teach the class?",
      "Can we get our money back?",
      "He's too damn old"
    ]
  },
  
  {
    question: "How can Gary be such an amazing teacher?",
    answers: [
      "He really isn't.",
      "Why can't Katy teach the class?",
      "Can we get our money back?",
      "He's too damn old"
    ]
  }
]

//This is the function for getting questions
for( var i = 0; i < questions.length; i ++ ){
  var currQuestionObj = questions[i]
  var section = document.createElement("section");
  // create an h2 tag, give it the text of the question
  // create a ul tag 
  // for each answer, create an li tag

  // add all this stuff to the DOM
}


// event listeners
   // clicking the start button 
startButton.onclick = startQuiz;
   
   

//need event listener for when they choose an answer
//need function for incorrect answer and decreasing timer

//need functions for the answer selection in the multChoiceBox


//this function is for the finished quiz message


// this function is for the initials input box

