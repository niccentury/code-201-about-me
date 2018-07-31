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
if(isTrue == 'Yes'){
    alert('You are correct!');
}else{
    alert('NOPE!');
}

//Second Question
var q2 = prompt('Did I originally live in Texas?');
console.log('The answer to question one is: '+q2)

//Check Second Question
isTrue = check(q2);
console.log('**This is the return from check function for q1: '+isTrue);

//Second Response
if(isTrue == 'Yes'){
    alert('You are correct!');
}else{
    alert('NOPE!');
}

//Third Question
var q3 = prompt('Is my favorite food fish sticks?');
console.log('The answer to question one is: '+q3);

//Check Third Question
isTrue = check(q3);
console.log('**This is the return from check function for q1: '+isTrue);

//Third Response
if(isTrue == 'No'){
    alert('You are correct!');
}else{
    alert('NOPE!');
}

//Fourth Question
var q4 = prompt('Do I drink a questionable amount of coffee?');
console.log('The answer to question one is: '+q4);

//Check Fourth Question
isTrue = check(q4);
console.log('**This is the return from check function for q1: '+isTrue);

//Fourth Response
if(isTrue == 'Yes'){
    alert('You are correct!');
}else{
    alert('NOPE!');
}

//Fifth Question
var q5 = prompt('Can you get me to do anything by bribing me with snacks?');
console.log('The answer to question one is: '+q5)

//Check Fifth Question
isTrue = check(q5);
console.log('**This is the return from check function for q1: '+isTrue);

//Fifth Response
if(isTrue == 'Yes'){
    alert('You are correct!');
}else{
    alert('NOPE!');
}

function check(answer){
    console.log('This is the answer within the function: '+answer);
    var newAnswer = answer.toUpperCase();
    if(newAnswer == 'YES' || newAnswer == 'Y'){
        return 'Yes';
    }else if(newAnswer == 'NO' || newAnswer == 'N'){
        return 'No';
    }else{ 
        return null; 
    }
}