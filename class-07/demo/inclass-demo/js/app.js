'use strict';

console.log('Hello World');

// DOM - Document Object Model
// get the element from the DOM  that has an ID of container - this will be my foothold
const myContainer = document.getElementById('container');
const honeyTable = document.querySelector('table');
console.log(honeyTable);
let allHives = [];

// ANY TIME I am interacting with the DOM or just writing JS.  I want:
// PROOF OF LIFE
console.log(myContainer);

function Hive(name, honeyYield, imgSrc) {
  this.name = name;
  this.honeyYieldArray = honeyYield;
  this.imgSrc = imgSrc;
  this.totalYield = 0;
  allHives.push(this);
  //one way to render all
  // this.render();
  // this.sectionRender();
}

Hive.prototype.render = function () {
  // create element
  let tr = document.createElement('tr');
  // give it content
  // create a child element, give it content, append to row
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < this.honeyYieldArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.honeyYieldArray[i];
    tr.appendChild(td);
    this.totalYield += this.honeyYieldArray[i];
  }
  td = document.createElement('td');
  td.textContent = this.totalYield;
  tr.appendChild(td);

  // append to the DOM
  honeyTable.appendChild(tr);

};

Hive.prototype.sectionRender = function () {
  // 1. create element
  let section = document.createElement('section');
  // 2. give it content // this will happen later - stay tuned
  // 3. append to the DOM
  myContainer.appendChild(section);
  // remember PROOF OF LIFE - important

  // create element
  let img = document.createElement('img');
  // given content
  img.src = this.imgSrc;
  img.alt = 'closeup picture of brood';
  // append it to the dom
  section.appendChild(img);
  //  remember - PROOF OF LIFE

  //create element
  let article = document.createElement('article');
  // give content -- this is other elements, will do later
  // append to teh DOM
  section.appendChild(article);
  //remember - POL

  // create element
  let h3 = document.createElement('h3');
  // give it content
  // relevant to lab-06
  // h3.textContent = `6am: ${'seatttle.someValueInAnArray[i]} cookies`;
  h3.textContent = this.name;
  // append to the DOM
  article.appendChild(h3);

  let p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  article.appendChild(p);

};

// another way to render all
function renderAll(){
  for (let i = 0; i < allHives.length; i++){
    allHives[i].render();
    allHives[i].sectionRender();
  }
}

// remeber this for today's lab - notice the unused variables IF you do things this way
// let beeHiveOne = new Hive('Hive One', [10, 15, 12], 'img/bee-brood.jpg');
// let beeHiveTwo = new Hive('Hive Two', [8, 20, 10], 'img/bee-brood-closeup-1.jpg');
// let beeHiveThree = new Hive('Hive Three', [9, 18, 11], 'img/bee-brood-closeup-2.jpg');

new Hive('Hive One', [10, 15, 12], 'img/bee-brood.jpg');
new Hive('Hive Two', [8, 20, 10], 'img/bee-brood-closeup-1.jpg');
new Hive('Hive Three', [9, 18, 11], 'img/bee-brood-closeup-2.jpg');



renderAll();
// beeHiveOne.render();
// beeHiveOne.sectionRender();
// beeHiveTwo.render();
// beeHiveTwo.sectionRender();
// beeHiveThree.render();
// beeHiveThree.sectionRender();



