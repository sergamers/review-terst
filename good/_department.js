import {
  dep1,
  dep2
} from '../scripts/department.js';

const resEl = document.querySelector('#tableResult');
const btnEl = document.querySelector('#tableBtn');

function serachPerson(dep1, dep2) {
  let length = dep1.length > dep2.length ? dep1.length : dep2.length;

  const obj = {
    first: {},
    last: {}
  };

  const res = [];

  for (let i = 0; i < length; i++) {
    if (dep1[i]) {
      const count = dep1[i];

      if (obj.last[count] && !obj.first[count]) {
        res.push(count);
      }

      obj.first[count] = true;
    }

    if (dep2[i]) {
      const count = dep2[i];

      if (obj.first[count] && !obj.last[count]) {
        res.push(count);
      }

      obj.last[count] = true;
    }
  }

  return res;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

btnEl.onclick = () => {
  const data1 = shuffle(dep1);
  const data2 = shuffle(dep2);

  console.time();
  const res = serachPerson(data1, data2);
  resEl.innerHTML = `Найдено ${res.length} специалистов. <br> ${res.join('<br>')}`;
  console.timeEnd();
};