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
  "african or european",
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
            } else {
              element.textContent = "Your wrong answer is: " + guess;
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
