var correct = 0;
var incorrect = 0;
var myQuestion= "none";
var input= "none";
var correctAnswer= "none";



function buildQuiz(){}

function showResults(){}

buildQuiz();


submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: "The Declaration of Independence of the United States dates back to July 14, 1831.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The national anthem of the United States is called In God We Trust?",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "The United States has 52 states.",
      answers: {
        a: "True",
        b: "False",
     },
      correctAnswer: "b"
    },
    {
        question: "Jackie Robinson was the first African-American to play in the National League (baseball).",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a"
      },
      {
        question: "Including dependent territories, the United States covers 8 time zones.",
        answers: {
          a: "True",
          b: "False",
       },
        correctAnswer: "b"
      },
      {
        question: "Jackie Robinson was the first African-American to play in the National League (baseball).",
        answers: {
          a: "True",
          b: "False",
       },
        correctAnswer: "a"
      },
      {
        question: "The United States bought Alaska from Russia.",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a"
      },
      {
        question: "Texas is the largest American state.",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a"
      },
      {
        question: "The bald eagle is the National Bird of the United States.",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a"
      },
      {
        question: "It was Patrick Henry who said, 'Give me liberty, or give me death!",
        answers: {
            a: "True",
            b: "False",
     },
        correctAnswer: "a"
    },
];
function buildQuiz(){
   
    const output = [];
  
   
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
    
        const answers = [];
  
       
        for(letter in currentQuestion.answers){
  
        
          answers.push(
            
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    quizContainer.innerHTML = output.join('');
  }