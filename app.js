var firstQuestion = "What is your name?";
var secondQuestion = "What is your quest?";
var thirdQuestion = "What is the airspeed velocity of an unladen swallow?";
var fourthQuestion = "What is the answer to the ultimate question?";

var firstAnswer = prompt(firstQuestion); //first question asked of user.
console.log("User's first answer: " + firstAnswer.toLowerCase()); //storing first answer given and converting it to all lowercase.
if (firstAnswer.toLowerCase() === "arthur") { //checking answer converted to lowercase to 'arthur'.
  alert("Good to know you, sir!  Answer the next questions correctly and ye may not die a horrible, fuzzy death."); //providing positive feedback to the user.
} else {
  alert("So sorry, we're looking for Arthur, not " + firstAnswer + ". Into the pit you go."); //telling the user they're a loser.
}

var secondAnswer = prompt(secondQuestion); //second question asked of the user.
console.log("User's second answer: " + secondAnswer); //storing second answer given.
if (secondAnswer === "I seek the grail.") {
  alert("A dangerous undertaking, " + secondAnswer + ".  Many deadly ferrets and rabbits lie ahead as you " + secondAnswer);
} else {
  alert("Look, if you don't know what you're doing, galavanting around doing " + secondAnswer + ", then you're just asking for a fuzzy death.")
}

var thirdAnswer = prompt(thirdQuestion); //third question asked of the user.
console.log("User's third answer: " + thirdAnswer); //storing the third answer given.
if (thirdAnswer === "African or European?") {
  alert("You're amazing! I just saw a grail shaped beacon at the castle Anthrax! Wow! " + thirdAnswer + " No wonder you're king!")
} else {
  alert("It's a miracle you haven't been eaten by a badger yet, saying things like " + thirdAnswer + ".")
}

var fourthAnswer = prompt(fourthQuestion); //fourth question asked of the user.
console.log("User's fourth answer: " + fourthAnswer); //storing the fourth answer given.
if (fourthAnswer < 42) {
  alert(fourthAnswer + " is too low. Sorry.")
} else if (fourthAnswer > 42) {
  alert (fourthAnswer + " is too high. Sorry.")
} else {
  alert(fourthAnswer + " is absolutely correct.  Here's your towel.")
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
