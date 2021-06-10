'use strict';

//global variables
let allGoats = [];
let clicks = 0;
let clicksAllowed = 15;

let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');


function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
  allGoats.push(this);
}

new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('lucky-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

// some validation
// imageOne.src = allGoats[0].src;
// imageTwo.src = allGoats[1].src;
// allGoats[0].views++;

function selectRandomGoatIndex() {
  return Math.floor(Math.random() * allGoats.length);
}

function renderRandomGoats() {
  let goatOne = selectRandomGoatIndex();
  let goatTwo = selectRandomGoatIndex();
  // seriously consider using an array.
  // remember:  how do you know if an array inculdes something? maybe google
  while (goatOne === goatTwo) {
    goatTwo = selectRandomGoatIndex();
  }
  imageOne.src = allGoats[goatOne].src;
  imageOne.alt = allGoats[goatOne].name;
  allGoats[goatOne].views++;

  imageTwo.src = allGoats[goatTwo].src;
  imageTwo.alt = allGoats[goatTwo].name;
  allGoats[goatTwo].views++;
}

function handleGoatClick(event){
  if(event.target === myContainer){
    alert('click on an IMAGE please');
  }

  clicks++;
  let clickedGoat = event.target.alt;
  for (let i = 0; i < allGoats.length; i++){
    if (clickedGoat === allGoats[i].name){
      allGoats[i].clicks++;
    }
  }
  renderRandomGoats();

  if(clicks === clicksAllowed){
    myContainer.removeEventListener('click', handleGoatClick);
  }
}

function renderResults(){
  let ul = document.querySelector('ul');
  for(let i = 0; i < allGoats.length; i++){
    let li = document.createElement('li');
    li.textContent = `${allGoats[i].name} had ${allGoats[i].views} views and was clicked ${allGoats[i].clicks} times.`;
    ul.appendChild(li);
  }
}

function handleButtonClick(event){ //eslint-disable-line
  if(clicks === clicksAllowed){
    renderResults();
  }
}

renderRandomGoats();


myContainer.addEventListener('click', handleGoatClick);
myButton.addEventListener('click', handleButtonClick);
