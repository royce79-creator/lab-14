'use strict';

// event handling step 1:
// must get the container we are listening to from the DOM
// let myContainer = document.getElementById('container');
// let parentEl = document.getElementById('results');

const myForm = document.getElementById('form');
console.log(myForm);
let allNames = [];

//step 3:  create event handler to do specific things when event is FIRED or RAISED
// event Handler
// takes in ONE parameter - the event
// let handleClick = function (event) {
//   // console.log('the event', event);
//   // console.log('the event.target is ', event.target);
//   // console.log('the event.target.textContent ', event.target.textContent);
//   console.log('the event.target.id is ', event.target.id);

//   if (event.target.id === 'box-one') {
//     let pEl = document.createElement('p');
//     pEl.setAttribute('class', 'bananas');
//     pEl.textContent = 'Box 1 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-two') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'clicked:  Box 2!';
//     pEl.className = 'bananas';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-three') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 3 done got clicked!';
//     parentEl.appendChild(pEl);
//   } else {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
//     parentEl.appendChild(pEl);
//   }
// };

// step 3:  define event handler function
// takes parameter.  the event
function handleSubmit(event){
  event.preventDefault();
  // to access form input values
  // event.target.<name>.value
  console.log(event.target.first.value);
  console.log(event.target.last.value);
  console.log(event.target.pet.value);
  let firstName = event.target.first.value;
  let lastName = event.target.last.value;
  let petType = event.target.pet.value;

  allNames.push([firstName, lastName, petType]);

}

// step 2: add event listener, we pass in two arguements!  event as string, and callback function
// placed at bottom typically (below other function declarations)
// myContainer.addEventListener('click', handleClick);



// step 2:  add event listener:  we pass in TWO parameters:
// 1. event as a string
// 2. callback function

myForm.addEventListener('submit', handleSubmit);
