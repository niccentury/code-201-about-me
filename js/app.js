"use strict";

console.log('js is linked');
var isTrue;
var compare = [1, 1, 0, 1, 1];
var score = 0;
var questions = [
    'Do I know how to speak Spanish?',
    'Did I originally live in Texas?',
    'Is my favorite food fish sticks?',
    'Do I drink a questionable amount of coffee?',
    'Can you get me to do anything by bribing me with snacks?'
];


//Commence game
var userName = prompt('Please enter your name: ');
alert('Hey there, '+ userName +'!  Let\'s play a little game.');

//Runs through each question
for(var i=0; i<questions.length; i++){
    var answer = prompt(questions[i]);
    console.log('User input for question '+(i+1)+': '+answer);
    isTrue = check(answer);
    console.log('Return from Check function: '+isTrue);
    isRight(isTrue, i+1, compare, score);
}

//Function used to check Capitalization of answers and standardize.
function check(answer){
    console.log('This is the answer within the check function: '+answer);
    var newAnswer = answer.toUpperCase();
    if(newAnswer == 'YES' || newAnswer == 'Y'){
        return 1;
    }else if(newAnswer == 'NO' || newAnswer == 'N'){
        return 0;
    }else{ 
        return null; 
    }
}

//Function used to compare answer if correct or not.
function isRight(answer, question, compare){
    console.log('This is the answer within the isRight function: '+answer);
    if(answer == null){
        alert('That wasn\'t a proper answer.  Maybe check your spelling!');
    }else if(answer === compare[question-1]){
        alert('You are correct!');
        return;
    }else{
        alert('NOPE!');
        return;
    }
}
