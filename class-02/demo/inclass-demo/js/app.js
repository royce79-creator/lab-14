'use strict';

// console.log('Hello World');

let username = prompt('What is your name?');

alert('Welcome ' + username + '!  Please answer the following five questions yes/no or y/n');

let answerOne = prompt('Do I live in Seattle?').toLowerCase();
// this is required
if(answerOne === 'yes' || answerOne === 'y'){
  // console.log('answerOne: ' + answerOne);
  alert('you are correct!  I live in Seattle')
}


// this is doing extra
// if(answerOne === 'yes' || answerOne === 'y'){
//   console.log('answerOne: ' + answerOne);
//   alert('you are correct!  I live in Seattle')
// } else if (answerOne === 'no' || answerOne === 'n'){
//   alert('nope!')
// } else {
//   alert('can you at least play along?');
// }




