"use strict";

console.log('js is linked');
var isTrue;

//Commence game
alert('Hey there!  Let\'s play a little game.');

//First Question
var q1 = prompt('Do I know how to speak Spanish?');
console.log('The answer to question one is: '+q1)

//Check First Question
isTrue = check(q1);
console.log('**This is the return from check function for q1: '+isTrue);

//First Response
isRight(isTrue, 1);

//Second Question
var q2 = prompt('Did I originally live in Texas?');
console.log('The answer to question one is: '+q2)

//Check Second Question
isTrue = check(q2);
console.log('**This is the return from check function for q1: '+isTrue);

//Second Response
isRight(isTrue, 2);

//Third Question
var q3 = prompt('Is my favorite food fish sticks?');
console.log('The answer to question one is: '+q3);

//Check Third Question
isTrue = check(q3);
console.log('**This is the return from check function for q1: '+isTrue);

//Third Response
isRight(isTrue, 3);

//Fourth Question
var q4 = prompt('Do I drink a questionable amount of coffee?');
console.log('The answer to question one is: '+q4);

//Check Fourth Question
isTrue = check(q4);
console.log('**This is the return from check function for q1: '+isTrue);

//Fourth Response
isRight(isTrue, 4);

//Fifth Question
var q5 = prompt('Can you get me to do anything by bribing me with snacks?');
console.log('The answer to question one is: '+q5)

//Check Fifth Question
isTrue = check(q5);
console.log('**This is the return from check function for q1: '+isTrue);

//Fifth Response
isRight(isTrue, 5);


//Function used to check Capitalization of answers and standardize.
function check(answer){
    console.log('This is the answer within the check function: '+answer);
    var newAnswer = answer.toUpperCase();
    if(newAnswer == 'YES' || newAnswer == 'Y'){
        return 'Yes';
    }else if(newAnswer == 'NO' || newAnswer == 'N'){
        return 'No';
    }else{ 
        return null; 
    }
}

//Function used to compare answer if correct or not.
function isRight(answer, question){
    var compare = ['Yes', 'Yes', 'No', 'Yes', 'Yes'];
    console.log('This is the answer within the isRight function: '+answer);
    if(answer === compare[question-1]){
        alert('You are correct!');
    }else{
        alert('NOPE!');
    }
}