var firstQuestion = "What is your name?";
var secondQuestion = "What is your quest? Fight the Black Knight or seek the grail?";
var thirdQuestion = "What is the airspeed velocity of an unladen swallow?";
var fourthQuestion = "What is the answer to the ultimate question?";
var rightAnswer = 0;
var wrongAnswer = 0;

var firstAnswer = prompt(firstQuestion); //first question asked of user.
console.log("User's first answer: " + firstAnswer.toLowerCase()); //storing first answer given and converting it to all lowercase.
if (firstAnswer.toLowerCase() === "arthur") { //checking answer converted to lowercase to 'arthur'.
  alert("Good to know you, sir!  Answer the next questions correctly and ye may not die a horrible, fuzzy death."); //providing positive feedback to the user.
  rightAnswer++; //adding 1 to the right Answer counter.
  console.log("The current number of right answers: " + rightAnswer); //sending number of correct answers to the console.
} else {
  alert("So sorry, we're looking for Arthur, not " + firstAnswer + ". Into the pit you go."); //telling the user they're a loser.
  wrongAnswer++; //adding 1 to the wrong answer counter.
  console.log("The current number of wrong answers: " + wrongAnswer); //sending current number of wrong answers to the console.
}

var secondAnswer = prompt(secondQuestion); //second question asked of the user.
console.log("User's second answer: " + secondAnswer.toLowerCase()); //storing second answer given and conveting to all lowercase.
if (secondAnswer === "seek the grail") { //checking second answer converted to lowercase to "i seek the grail."
  alert("A dangerous undertaking, " + secondAnswer + ".  Many deadly ferrets and rabbits lie ahead as you " + secondAnswer + "."); //providing positive feedback to the user.
  rightAnswer++; //adding 1 to the current right answer count.
  console.log("The current number of right answers: " + rightAnswer); // writing current number of right answers to the console.
} else {
  alert("Look, if you don't know what you're doing, galavanting around doing " + secondAnswer + ", then you're just asking for a fuzzy death.") //providing negative feedback.
  wrongAnswer++; //adding one to the current number of wrong answers.
  console.log("The current number of wrong answers: " + wrongAnswer); //writing the total number of wrong answers to the console.
}

var thirdAnswer = prompt(thirdQuestion); //third question asked of the user.
console.log("User's third answer: " + thirdAnswer.toLowerCase()); //storing the third answer given and converting to lowercase.
if (thirdAnswer === "african or eropean") { //validating third answer given against 'african or european'
  alert("You're amazing! I just saw a grail shaped beacon at the castle Anthrax! Wow! " + thirdAnswer + " No wonder you're king!") //positive feedback to the User
  rightAnswer++; //adding one to the current number of right answers.
  console.log("The current number of right answers: " + rightAnswer); //writing the total number of right answers to the console.
} else {
  alert("It's a miracle you haven't been eaten by a badger yet, saying things like " + thirdAnswer + ".") //negative feedback to user
  wrongAnswer++; //adding one to the current total of wrong answers.
  console.log("The current number of wrong answers: " + wrongAnswer); //writing the total number of wrong answers to the console.

}

var fourthAnswer = parseInt (prompt(fourthQuestion)); //fourth question asked of the user, converting the string entered to an integer.
console.log("User's fourth answer: " + fourthAnswer); //storing the fourth answer given.
if (fourthAnswer < 42) {
  alert(fourthAnswer + " is too low. Sorry.")
  wrongAnswer++; //adding one to the current total of wrong answers.
  console.log("The current number of wrong answers: " + wrongAnswer); //sending total number of wrong answers to the console.
} else if (fourthAnswer > 42) {
  alert (fourthAnswer + " is too high. Sorry.")
  wrongAnswer++; //adding one to the total of wrong answers.
  console.log("The current number of wrong answers: " + wrongAnswer); //sending total number of wrong answers to the console.
} else {
  alert(fourthAnswer + " is absolutely correct.  Here's your towel.");
  rightAnswer++; //adding one to the right answer total.
  console.log("The current number of right answers: " + rightAnswer); //sending the total number of correct answers to the console.
}

if (rightAnswer > wrongAnswer) {
  alert("You have answered well, good sir.  You have given " + rightAnswer + " correct answers.  You may proceed in your quest.  But beware the threat of fuzzy ferret death that lies ahead.");
} else {
  alert("You really should wear a helmet lest you damage what is left of your head.  You have given " + wrongAnswer + " wrong answers. You're probably better suited for chopping down trees with a herring.");
}

var guessNum = parseInt(prompt("I'm thinking of a number between 1 and 5.  Can you guess it?"));
while (guessNum !== 4) {
  console.log("User's guess is: " + guessNum);
  guessNum = parseInt (prompt ("Nope! Guess again."));
} if (guessNum === 4){
  alert("You got it!");
}


// alert("Good to meet you " + userName + "." + " Nice to see you've given up the ferret fights.  Nasty work, those.  I once heard someone brought a rabid orangutan to such an event. Damned thing took nine ferrets to bring it down.");


// var userName = prompt("Tell me your name.");
// var message;
// if (userName = "Scott") {
//   message = "That's right, Scott was the right answer."
//   // console.log("You got the name right.")
// } else if (userName === "Bambi") {
//   message = "That's right, Bambi was the right answer."
//   // console.log ("Congrats you got the second name right.")
// } else {
//   message = "you were way off!"
//   // console.log('You got both wrong.')
// }


// var arr = [1, 3, "Blue", true, "Dog"];
// // for (var i = arr.length - 1; i >= 0; i--) { // for(start, stop, step)
// //   console.log(arr[i] +": " + typeof arr[i]);
// //   // if (typeof arr[i] === 'string') {
// //   //   console.log(arr[i]);
// //   // }
// // }
//
// // var userNum = parseInt (prompt("guess my number"));
// // while (userNum !== 10) {
// //   console.log(userNum);
// //   userNum = parseInt (prompt ("Guess again."));
// // }
//
// var counter = 1;
// var userNum = parseInt (prompt("guess my number"));
// while(counter < 4) {
// if (userNum === 10){
//   alert ("you nailed it)");
//   break;
// } else if (userNum > 10) {
//   alert ("your number was too high.");
//   counter++;
//   console.log("the counter is at: " + counter);
//   userNum = parseInt (prompt("guess lower."));
// } else if (userNum < 10) {
//   alert ("your number was too low.");
//   counter++;
//   console.log("the counter is at: " + counter);
//   userNum = parseInt (prompt("guess higher."));
// }
// }
