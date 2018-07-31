"use strict";

console.log('js is linked');
alert('Hey there!  Let\'s play a little game.');

var q1 = prompt('Do I know how to speak Spanish?');
console.log('The answer to question one is: '+q1)
var isTrue = check(q1);
console.log('**This is the return from check function for q1: '+isTrue);

// var q2 = prompt('Did I originally live in Texas?');
// console.log('The answer to question one is: '+q2)

// var q3 = prompt('Is my favorite food fish sticks?');
// console.log('The answer to question one is: '+q3)

// var q4 = prompt('Do I drink a questionable amount of coffee?');
// console.log('The answer to question one is: '+q4)

// var q5 = prompt('Can you get me to do anything by bribing me with snacks?');
// console.log('The answer to question one is: '+q5)

// var questions = [q1, q2, q3, q4, q5];
// console.log(questions);

// for( var i = 0; i < questions.length; i++){
//     console.log(questions[i]);
//     //if(questions[i].toUpperCase() == 'YES' || 'Y'){
//     //    q1 = 'Yes'
//     }

 function check(answer){
    console.log('This is the answer within the function: '+answer);
    console.log(answer.toUpperCase());
    var newAnswer = answer.toUpperCase();
    if(newAnswer == 'YES' || newAnswer == 'Y'){
        return 'Yes';
    }else if(newAnswer == 'NO' || newAnswer == 'N'){
        return 'No';
    }
}