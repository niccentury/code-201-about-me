"use strict";

console.log('js is linked');
var score = 0;
var answer = [];
var randNum = Math.floor((Math.random() * 10) + 1);
var compare = [1, 1, 0, 1, 1, randNum, ['HOUSTON', 'AUSTIN', 'CONROE']];
var questions = [
  'Do I know how to speak Spanish?',
  'Do I have a French Bulldog named Manolo?',
  'Is my favorite food fish sticks?',
  'Do I drink a questionable amount of coffee?',
  'Can you get me to do anything by bribing me with snacks?',
  'Guess a number between 1 and 10',
  'Which city in Texas have I lived in?'
];

var userName = getName();
//Commence game
function getName(){
  var Name = prompt('What\'s your Name?');
  return Name;
}
console.log('The user name is: '+userName);
alert('Hey there, '+ userName +'!  Let\'s play a little game.');

//Runs through each question
for(var i=0; i<questions.length; i++){
  var newAnswer= prompt(questions[i]).toUpperCase();
  console.log('The user input is: '+answer[i]);
  if(i < 5){
    //Checks if answer matches yes
    if(newAnswer === 'YES' || newAnswer === 'Y'){
      if(compare[i] === 1){
        alert('You are correct!');
        score++;
        console.log('The current score is: ' +score);
      }else{
        alert('Nope!');
        console.log('The current score is: ' +score);
      }
    }else if(newAnswer === 'NO' || newAnswer === 'N'){ //Checks is answer matches no
      if(compare[i] === 0){
        alert('You are correct!');
        score++;
        console.log('The current score is: ' +score);
      }else{
        alert('Nope!');
        console.log('The current score is: ' +score);
      }
    }else{  //Responds if answer is not yes or no
      alert('That wasn\'t a proper answer.  Maybe check your spelling!');
    }
  }
  //Sixth question checking for numbers
  else if(i===5){
    console.log('The random number is: '+compare[i]);
    for(var x = 0; x<4; x++){ //allows for 4 tries
      if(x>0 && x<4){
        newAnswer= prompt(questions[i]).toUpperCase();
      }
      if(newAnswer == compare[i]){
        alert('You are correct!');
        score++;
        console.log('The current score is: ' +score);
        break;
      }else if(isNaN(newAnswer)){
        alert('That wasn\'t even a number! Get with it, '+userName+'! You have '+(3-x)+' tries left!');
      }else{
        alert('Nope! You have '+(3-x)+' tries left!');
        console.log('The current score is: ' +score);
      }
    }
  }
  else{
    console.log('Cities in Texas: '+compare[i]);
    for(var y = 0; y<6 ; y++){  // allows for 6 tries
      if(y > 0){
        newAnswer= prompt(questions[i]).toUpperCase();
      }
      for(var j=0; j<compare[i].length; j++){
        if(newAnswer === compare[i][j]){
          alert('You are correct!');
          score++;
          console.log('The current score is: ' +score);
          var getOut = true;
          break;
        }else if(j===compare[i].length-1){
          alert('Nope! Try Again! You have '+(5-y)+' tries left!');
          console.log('The current score is: ' +score);
          continue;
        }
      }
      if(getOut){
        break;
      }
    }
  }
}
//Displays the answer array
if(score<questions.length){
  alert('You got '+score+' out of 7 correct, '+userName+'! You can do better than that!');
}else{
  alert('You got '+score+' out of 7 correct, '+userName+'! A perfect score!');
}

