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
  "arthur",
  "seek the grail",
  "african or european",
  42,
  "Alabama",
];

var ele = document.getElementById('text');

// if (you guess the right answer) {
//   ele.className = 'correct';
// } else {
//   ele.className = 'incorrect');
// }

var guess= document.getElementById(els[i]);
function game(question, answer, element){
    guess = prompt(questions[i].toLowerCase());
    //els[i] = guess;
    if(isNaN(parseInt(guess)) === false){
      guess = parseInt(guess);
    }
        if(isNaN(guess)){
            if(guess === answers[i]){
              els[i].innerHTML += '<img src= "Images/excited.png"/>';
              element.textContent = "You got that right, answering " + guess + "! You must be a wizard!";
              els[i].className = 'correct';
            } else {
              els[i].innerHTML += '<img src= "Images/dawson_crying.jpg"/>';
              element.textContent = guess + "? Wrong.  It's a miracle you haven't been eaten by a badger yet.";
              els[i].className = 'incorrect';
            }
          } else {
            if(guess === answers[i]){
            els[i].innerHTML += '<img src= "images/excited.png"/>';
            element.textContent = "Your guess is right. Here is your towel.";
            els[i].className = 'correct';
          } else {
            els[i].innerHTML += '<img src= "images/dawson_crying.jpg"/>';
            element.textContent = "Sorry that number is wrong." + guess;
            els[i].className = 'incorrect';
          }
            }
}

for(var i=0, l = questions.length; i < l; i++){
game(questions[i], answers[i], els[i]);
}
