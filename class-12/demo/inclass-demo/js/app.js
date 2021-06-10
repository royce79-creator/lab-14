'use strict';

//global variables
let allGoats = [];
let clicks = 0;
let clicksAllowed = 15;
let renderQueue = [];

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
  while (renderQueue.length < 4) {
    let uniqueIndex = selectRandomGoatIndex();
    if (!renderQueue.includes(uniqueIndex)) {
      renderQueue.push(uniqueIndex);
    }
  }
  console.log(renderQueue);
  let goatOne = renderQueue.pop();
  let goatTwo = renderQueue.pop();

  imageOne.src = allGoats[goatOne].src;
  imageOne.alt = allGoats[goatOne].name;
  allGoats[goatOne].views++;

  imageTwo.src = allGoats[goatTwo].src;
  imageTwo.alt = allGoats[goatTwo].name;
  allGoats[goatTwo].views++;
}

function handleGoatClick(event) {
  if (event.target === myContainer) {
    alert('click on an IMAGE please');
  }

  clicks++;
  let clickedGoat = event.target.alt;
  for (let i = 0; i < allGoats.length; i++) {
    if (clickedGoat === allGoats[i].name) {
      allGoats[i].clicks++;
    }
  }
  renderRandomGoats();

  if (clicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleGoatClick);
    document.querySelector('#demo-chart').style.display = 'block';
    renderChart();

  }

}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < allGoats.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allGoats[i].name} had ${allGoats[i].views} views and was clicked ${allGoats[i].clicks} times.`;
    ul.appendChild(li);
  }
}

function handleButtonClick(event) { //eslint-disable-line
  if (clicks === clicksAllowed) {
    renderResults();
  }
}

function renderChart() {
  let clicksArray = [];
  let viewsArray = [];
  let namesArray = [];

  for (let i = 0; i < allGoats.length; i++){
    clicksArray.push(allGoats[i].clicks);
    viewsArray.push(allGoats[i].views);
    namesArray.push(allGoats[i].name);
  }
  console.log(`${clicksArray}
  ${viewsArray}
  ${namesArray}`);

  let ctx = document.getElementById('myChart').getContext('2d');
  let chartObject = {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: '# of Clicks',
        data: clicksArray,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: viewsArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(ctx, chartObject); // eslint-disable-line
}

renderRandomGoats();


myContainer.addEventListener('click', handleGoatClick);
myButton.addEventListener('click', handleButtonClick);
