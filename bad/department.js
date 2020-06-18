import {
  dep1,
  dep2
} from '../scripts/department.js';

const resEl = document.querySelector('#tableResult');
const btnEl = document.querySelector('#tableBtn');
const res = [];

function serachPerson(dep1, dep2) {  
  for (const user1 of dep1) 
    for (const user2 of dep2) 
      if (user1 == user2) 
        res.push(user1);
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

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
  serachPerson(data1, data2);
  resEl.innerHTML = `Найдено ${res.length} специалистов. <br> ${res.join('<br>')}`;
  console.timeEnd();
};