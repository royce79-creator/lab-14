'use strict';

console.log('Hello World');

let hours = ['6am', '7am', '8am'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  avg: 6.3,
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function(){
    // calc cookies for all 14 hours
    // write a for loop that uses the length of the hours arary
    //  in that loop
    let custThisHour = this.getCustomersPerHour();
    let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
    this.cookiesPerHourArray.push(cookiesSoldThisHour);
    console.log('I am in the calcCookiesPerHour method', 'custThisHour: ', custThisHour, 'cookiesSoldThisHour: ', cookiesSoldThisHour);
  },
  render: function(){
    this.calcCookiesPerHour();
    console.log('this is the render method');
  }

  // enter your sudo code:
  // come up with a plan of how to do this!
};

seattle.render();
