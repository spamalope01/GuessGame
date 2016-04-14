// var pElOne = "";
// var pElTwo= "";
// var pElThree = "";

// var eleThings = [
  var pElOne = document.getElementById('answerOne');
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
 pElThree.textContent = "The Airspeed Velocity of An Unladen Swallow Is: " + els[2];
