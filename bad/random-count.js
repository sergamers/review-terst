const fnRandomCount = (() => {
  const randomInteger = (min, max) => {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
  
  const arrNumber = [];

  const randomCount = () => {
    for(let i = 0; i < 10; i++) {
      let count = randomInteger(0, 100);
      
      arrNumber.push(count);
      document.querySelector('#generatodResult').innerHTML = arrNumber.join('<br/>');
    }
  };

  return randomCount;
})();

const btnRandomCount = document.querySelector('#generatodBtn');
btnRandomCount.onclick = fnRandomCount;