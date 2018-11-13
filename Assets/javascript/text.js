console.log("hello world")

var correct = 0;
var incorrect = 0;
var myQuestions = [ ];
var input = "none";
var correctAnswer = "none";



function buildQuiz(){}

function showResults(){}

buildQuiz();


submitButton.addEventListener('click', showResults);

const myQuestion = [
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
   
    const output = [ ];
  
   
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
  
  // $( document ).ready(function() {
  //   scaleVideoContainer();

  //   initBannerVideoSize('.video-container .poster img');
  //   initBannerVideoSize('.video-container .filter');
  //   initBannerVideoSize('.video-container video');

  //   $(window).on('resize', function() {
  //     scaleVideoContainer();
  //     scaleBannerVideoSize('.video-container .poster img');
  //     scaleBannerVideoSize('.video-container .filter');
  //     scaleBannerVideoSize('.video-container video');
  //   });
  // });

  // function scaleVideoContainer() {
  //   var height = $(window).height() + 5;
  //   var unitHeight = parseInt(height) + 'px';
  //   $('.homepage-hero-module').css('height',unitHeight);
  // }

  // function initBannerVideoSize(element){
  //   $(element).each(function(){
  //     $(this).data('height', $(this).height());
  //     $(this).data('width', $(this).width());
  //   });

  //   scaleBannerVideoSize(element);
  // }

  // function scaleBannerVideoSize(element) {

  //   var windowWidth = $(window).width(),
  //   windowHeight = $(window).height() + 5,
  //   videoWidth,
  //   videoHeight;

  //   // console.log(windowHeight);

  //   $(element).each(function(){
  //     var videoAspectRatio = $(this).data('height')/$(this).data('width');

  //     $(this).width(windowWidth);

  //     if(windowWidth < 1000){
  //         videoHeight = windowHeight;
  //         videoWidth = videoHeight / videoAspectRatio;
  //         $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

  //         $(this).width(videoWidth).height(videoHeight);
  //     }

  //     $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

  //   });
  // }