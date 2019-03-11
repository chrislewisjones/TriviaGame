// to make sure the html has loaded before the script runs we start with:

$(document).ready(function() {
  // the game will start with a click on the start button, this calls the game.start function:
  $("#start").on("click", function() {
    game.start();
  });
  // also we have another click to look out for at the end of the questions
  $(document).on("click", "#end", function() {
    game.done();
  });

  // an array of questions containing individual questions as objects
  var questions = [
    {
      question: "Who directed &quot;E.T. the Extra-Terrestrial&quot; (1982)?",
      correct_answer: "Steven Spielberg",
      answers: [
        "Stanley Kubrick",
        "James Cameron",
        "Tim Burton",
        "Steven Spielberg"
      ]
    },
    {
      question:
        "Who played Deputy Marshal Samuel Gerard in the 1993 film &quot;The Fugitive&quot;?",
      correct_answer: "Tommy Lee Jones",
      answers: [
        "Harrison Ford",
        "Tommy Lee Jones",
        "Harvey Keitel",
        "Martin Landau"
      ]
    }
  ];

  //this is the game variable which runs through the game, setting objects and running functions.
  var game = {
    //start with a score of 0
    correct: 0,
    incorrect: 0,
    // the counter will start at 60 seconds
    counter: 60,
    // from 60 seconds the countdown function will decrease the counter, manipulating the html as it does:
    countdown: function() {
      game.counter--;
      $("#counter").html(game.counter);
      // when te counter hits 0 the time is up, triggering the game.done function:
      if (game.counter <= 0) {
        clearInterval(timer);
        game.done();
      }
    },

    // when the game.start function is called, the start button is removed and the timer set to 60 decreasing every second, this is added to the html
    start: function() {
      $("#start").remove();
      timer = setInterval(game.countdown, 1000);
      $("#container").prepend(
        '<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>'
      );
      // for each question and for each of their answers we append to the page, h2 for the q and radio buttons for the answers.
      for (var i = 0; i < questions.length; i++) {
        $("#container").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
          $("#container").append(
            // append a radio button and a name to be called back when the results are checked
            "<input type='radio' name='question-" +
              i +
              "' value='" +
              questions[i].answers[j] +
              "'>" +
              questions[i].answers[j]
          );
        }
      }
      // also a done button is appended to the bottom of the page
      $("#container").append(
        '<br><button id="end" class="btn btn-primary btn-lg btn-block">Done</button>'
      );
    },

    // the done function is called if the time is up or the done button is clicked
    done: function() {
      // for each question we take the name data added previously and compare it to the correct answer in the question's object
      $.each($('input[name="question-0"]:checked'), function() {
        if ($(this).val() == questions[0].correct_answer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($('input[name="question-1"]:checked'), function() {
        if ($(this).val() == questions[1].correct_answer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      this.result();
    },

    // when the game is done results are displayed being called at the end of game.done
    result: function() {
      clearInterval(timer);
      $("#container h2").remove();

      $("#container").html("<h2>All done!</h2>");
      $("#container").append("<h3>Correct Answers: " + this.correct + "</h3>");
      $("#container").append(
        "<h3>Incorrect Answers: " + this.incorrect + "</h3>"
      );
      $("#container").append(
        "<h3>Unanswered: " +
          (questions.length - (this.incorrect + this.correct)) +
          "</h3>"
      );
    }
  };
});

// abandoned code . . . .

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
