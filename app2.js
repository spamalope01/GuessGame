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
var guess = document.getElementById(els[i]);
function game(question, answer, element){
    guess = prompt(questions[i].toLowerCase());
    if(isNaN(parseInt(guess)) === false){
      guess = parseInt(guess);
    }
        if(isNaN(guess)){
            if(guess === answers[i]){
              element.textContent = "You got that right, answering " + guess + "! You must be a wizard!";
              els[i].className = 'correct';
              els[i].innerHTML += '<img src= "Images/excited.png"/>';
            } else {
              element.textContent = guess + "? Wrong.  It's a miracle you haven't been eaten by a badger yet.";
              els[i].className = 'incorrect';
              els[i].innerHTML += '<img src= "Images/dawson_crying.jpg"/>';
            }
          } else {
            if(guess === answers[i]){
            element.textContent = "Your guess is right. Here is your towel.";
            els[i].className = 'correct';
            els[i].innerHTML += '<img src= "Images/excited.png"/>';
          } else {
            element.textContent = "Sorry that number is wrong." + guess;
            els[i].className = 'incorrect';
            els[i].innerHTML += '<img src= "Images/dawson_crying.jpg"/>';
          }
            }
}

for(var i = 0, l = questions.length; i < l; i++){
game(questions[i], answers[i], els[i]);
}
