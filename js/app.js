"use strict";

console.log('js is linked');
var score = 0;
var answer = [];
var randNum = Math.floor((Math.random() * 10) + 1);
var compare = [1, 1, 0, 1, 1, randNum];
var questions = [
  'Do I know how to speak Spanish?',
  'Did I originally live in Texas?',
  'Is my favorite food fish sticks?',
  'Do I drink a questionable amount of coffee?',
  'Can you get me to do anything by bribing me with snacks?',
  'Guess a number between 1 and 10'
];


//Commence game
var userName = prompt('Please enter your name: ');
console.log('The user name is: '+userName);
alert('Hey there, '+ userName +'!  Let\'s play a little game.');

//Runs through each question
for(var i=0; i<questions.length; i++){
  var newAnswer= prompt(questions[i]).toUpperCase();
  answer[i] = newAnswer;
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
  else{
    console.log('The random number is: '+compare[i]);
    if(isNaN(newAnswer)){
      alert('That wasn\'t even a number! Get with it, '+userName+'!');
    }else{
      if(newAnswer === compare[i]){
        alert('You are correct!');
        score++;
        console.log('The current score is: ' +score);
      }else{
        alert('Nope!');
        console.log('The current score is: ' +score);
      }
    }
  }
}
//Displays the answer array
console.log(answer);
alert('You got '+score+' out of 6 correct, '+userName+'!');
