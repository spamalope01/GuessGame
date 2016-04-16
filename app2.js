// var pElOne = "";
// var pElTwo= "";
// var pElThree = "";

// var eleThings = [
  /*var pElOne = document.getElementById('answerOne');
  var pElTwo = document.getElementById('answerTwo');
  var pElThree = document.getElementById('answerThree');
// ];

var els = [pElOne, pElTwo, pElThree];

// var userName = prompt("tell me your name");
var questions = [
  "What is your name?",
  "What is your quest? Fight the Black Knight or seek the grail?",
  "What is the airspeed velocity of an unladen swallow?",
];

var answers = [
  "arthur",
  "seek the grail",
  "african or eropean",
];

var guess = "";
function game(questions, answers, element) {
  for(var i=0, l = questions.length; i < l; i++){
    guess = prompt(questions[i]);
    els[i] = guess;
    if (guess.toLowerCase() === answers[i]) {
      alert("That's right!")
      console.log(guess);
    } else {
      alert("Nope. That's wrong.  It's a miracle you haven't been eaten by a badger yet.");
    }
  }
}
 game(questions, answers, els);
 pElOne.textContent = "Your Name Is: " + els[0];
 pElTwo.textContent = "Your Quest Is: " + els[1];
 pElThree.textContent = "The Airspeed Velocity of An Unladen Swallow Is: " + els[2];*/


var els = [
   document.getElementById("answerOne"),
   document.getElementById("answerTwo"),
   document.getElementById("answerThree"),
   document.getElementById("answerFour"),
   document.getElementById("answerFive"),
];

var questions = [
  "What is your name?",
  "What is your quest? Fight the Black Knight or seek the grail?",
  "What is the airspeed velocity of an unladen swallow?",
  "What is the answer to the ultimate question?",
  "Where am I from?",
];
var answers = [
  "aurthur",
  "seek the grail",
  "african european",
  42,
  "Alabama",
];

var guess="";
function game(question, answer, element){

    guess = prompt(questions[i].toLowerCase());
    //els[i] = guess;
    if(isNaN(parseInt(guess)) === false){
      guess = parseInt(guess);
    }
        if(isNaN(guess)){
            if(guess === answers[i]){
              element.textContent = "Your correct answer is: " + guess;

              // pElTwo.textContent = "Your Quest is: " + els[1];
              // pElThree.textContent = "The Airspeed Velocity of an Unladen Swallow is: " + els[2];
              console.log("right");
            } else {
              element.textContent = "Your wrong answer is: " + guess;
              // pElTwo.textContent = "Your answer: "+ els[1] + " was wrong";
              // pElThree.textContent = "Your answer: "+ els[2] + " was wrong";
              console.log("wrong");
            }
          } else {
            if(guess === answers[i]){
            element.textContent = "Your guess is right. Here is your towel.";
          } else {
            element.textContent = "Sorry that number is wrong." + guess;
          }
            }
}
for(var i=0, l = questions.length; i < l; i++){
game(questions[i], answers[i], els[i]);
}
