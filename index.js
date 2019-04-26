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
  let user = prompt('enter your birthday in the format: YYYY - MM - DD', '');

  if (user === null) {
    return;
  }

  const date = {};
  const getData = user.split('-');

  if (valid(getData.join(''), date)) {
    const getDateBirthday = new Date(now.getFullYear(), date['month'] - 1, date['date']);
    const dateToString = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const res = (getDateBirthday - dateToString) / (1000 * 60 * 60 * 24);
    const keys = [2, 0, 1, 1, 1, 2];
    const days = ['День', 'Дня', 'Дней'];
    const isDay = days[ (res % 100 > 4 && res % 100 < 20) ? 2 : keys[(res % 10 < 5) ? res % 10 : 5] ];

    alert(res +' ' + isDay);
  } else {
    alert('не верно');
    getDateBirthday(new Date(), valid);
  }
};

const valid = (param, data) => {
  const regExp = /[0-9]{8}/i;
  const getData = ['month', 'date'];
  let start = 4;
  let end = 6;

  if (param.match(regExp)) {
    for (let value of getData) {
      data[value] = parseInt(param.substring(start, end));
      start+=2;end+=2;
    }

    return true;
  }
};

getDateBirthday(new Date(), valid);
