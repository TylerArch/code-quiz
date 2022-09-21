// assignment code
console.log(this);

// global variables
var startButton;
var countdownTimer;
var multChoiceBox;
var button = document.querySelector('button');
var answer1;
var answer2;
var answer3;
var answer4;
var wrongAnswer;
var scoreBoard();
var quizComplete = "quiz complete" + display scoreBoard = "score";
var initials();

function showAQuestion(){
    // figure which item to get from the array whenever this function is called
    var currQuestionObj = questions[i]
    var section = document.createElement("section");
    // create an h2 tag, give it the text of the question
    // create a ul tag 
    // for each answer, create an li tag

// functions
//this function is what happens when the start button is clicked
var generateBtn = document.querySelector("#startButton");

generateBtn.addEventListener("click", startQuiz);
//need an event listener
}

//this function is for the countdown timer 
function countdown() {
    countdownTimer = setTimeout(countdown, 100000);
}



var currentScore = 0;
var secondsRemaining = 120;

function showAQuestion(){
  // figure which item to get from the array whenever this function is called
  var currQuestionObj = questions[i]
  var section = document.createElement("section");
  // create an h2 tag, give it the text of the question
  // create a ul tag 
  // for each answer, create an li tag

  // add all this stuff to the DOM
}


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
   // when they choose an answer
//need event listener for when they choose an answer
//need function for incorrect answer and decreasing timer

//need functions for the answer selection in the multChoiceBox


//this function is for the finished quiz message


// this function is for the initials input box

