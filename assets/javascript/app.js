
var questions = [
  {
    question: "This is a question, what is the answer? ",
    correct_answer: "Something",
    answers: ["A", "3", "Not now", "Something"]
  },
  {
    question: "What is the unit of currency in Laos?",
    correct_answer: "Kip",
    answers: ["Ruble", "Konra", "Kip", "Dollar"]
  }
];

$("#start").on("click", function() {
  $("#start").remove();
  timer = setInterval(game.countdown, 1000);
  $(".container").prepend(
    '<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>'
  );
  for (var i = 0; i < questions.length; i++) {
    $(".container").append("<h2>" + questions[i].question + "</h2>");
    for (var j = 0; j < questions[i].answers.length; j++) {
      $(".container").append(
        "<input type='radio' name='question-" +
          i +
          "' value='" +
          questions[i].answers[j] +
          "'>" +
          questions[i].answers[j]
      );
    }
    $(".container").append('<button id="end">Done</button>');
  }
});

var game = {
  correct: 0,
  incorrect: 0,
  counter: ,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time Up!");
      game.done();
    }
  },
  done: function() {
    $.each($('input[name="question-0]":checked'), function() {
      if ($(this).val() === questions[0].correct_answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-1]":checked'), function() {
      if ($(this).val() === questions[1].correct_answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
  result: function() {
    clearInterval(timer);
    $(".container h2").remove();

    $(".container").html("<h2>All done!</h2>");
    $(".container").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $(".container").append(
      "<h3>Incorrect Answers: " + this.incorrect + "</h3>"
    );
    $(".container").append(
      "<h3>Unanswered: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};


// var questions = [
//   {
//     category: "General Knowledge",
//     type: "multiple",
//     difficulty: "medium",
//     question: "This is a question, what is the answer? ",
//     correct_answer: "Something",
//     answers: ["A", "3", "Not now"]
//   },
//   {
//     category: "General Knowledge",
//     type: "multiple",
//     difficulty: "medium",
//     question: "What is the unit of currency in Laos?",
//     correct_answer: "Kip",
//     answers: ["Ruble", "Konra", "Dollar"]
//   }
// ];

//   var correctScore = 0;
// var incorrectScore = 0;

// // at the beginning of the game a start button will be displayed, the button is clicked which starts our game:

// var currentQ = 0;

// function mix() {
//   var answers = questions[currentQ].incorrect_answers;
//   answers.push(questions[currentQ].correct_answer);
//   var temp;
//   var randomNumber;
//   for (var i = answers.length - 1; i > 0; i--) {
//     randomNumber = Math.floor(Math.random() * (i + 1));
//     temp = answers[i];
//     answers[i] = answers[randomNumber];
//     answers[randomNumber] = temp;
//   }
//   return answers;
// }

// var answers = mix();
// console.log(answers);

// as the data from the open trivia db will be received with a value for the correct answer and a value
// for the the incorrect answers I need to run a function which randomizes the 4 possible choices.

// function checkAnswer() {
//   for (var i = 0; i < questions.length; i++);
//   var response = window.prompt(questions[i].currentQ);
//   if (response === questions[currentQ].correct_answer) {
//     currentQ++;
//     correctScore++;
//   } else {
//     currentQ++;
//     incorrectScore++;
//   }
// }

// loop of possible question to display append answers
//

/// timer for each question

// function timeUp() {
//   // in the element with an id of `time-left` add an h2 saying Time's Up!
//   // console log done

//   setTimeout(function() {
//     console.log("do ur append stuff!!");
//     $("#time-left").append("<h1> Times up!!!!!</h1>");
//   }, 20000);
// }
// timeUp();
