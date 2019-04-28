"use strict";

// task 1
const getMinutes = now => {
  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return `${Math.floor((date - now) / 60 / 1000)} minutes before the end of the day`;
};

const minutes =getMinutes(new Date());
console.log(minutes);

// task 2
const getSeconds = now => {
  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return `${Math.floor((now - date) / 1000)} how many seconds have passed since the beginning of the day`;
};

const seconds = getSeconds(new Date());
console.log(seconds);

// task 3
const getDay = date => {
  return date.toLocaleDateString('en-US', {weekday: 'long'});
};

const day = getDay(new Date(2013, 0, 25));
console.log(day);

// task 4
const getDateBirthday = now => {
  const user = prompt('enter your birthday in the format: YYYY - MM - DD', '');

  if (user === null) {
    return;
  }

  const getData = user.split('-');

  const date = valid(getData);

  if (valid(getData)) {
    const getDateBirthday = new Date(now.getFullYear(), date['month'] - 1, date['date']);
    const dateToString = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let res = (getDateBirthday - dateToString) / (1000 * 60 * 60 * 24);
    const keys = [2, 0, 1, 1, 1, 2];
    const days = ['День', 'Дня', 'Дней'];

    if (res < 0) {
      res = Math.floor(365 + res);
    }

    const isDay = days[ (res % 100 > 4 && res % 100 < 20) ? 2 : keys[(res % 10 < 5) ? res % 10 : 5] ];

    alert(res +' ' + isDay);
  } else {
    alert('не верно');
    getDateBirthday(new Date(), valid);
  }
};

const valid = data => {
  const days = ['month', 'date'];
  const date = {};
  let start = 0;
  let end = 2;

  for (let i = 1; i < data.length; i+=1) {
    if (data[i] > 0 && data[i] <= 12 && data[i+1] > 0 && data[i+1] <= 31) {
      for (let value of days) {
        date[value] = parseInt(data.slice(1, 3).join('').substring(start, end));
        start+=2;end+=2;
      }
    }

    break;
  }

  return Object.keys(date).length > 0 ? date : false;
};

getDateBirthday(new Date(), valid);
