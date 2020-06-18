let time = 0;

(() => {
  const
    enableTimer = () => {
      setInterval(() => {
        document.querySelector('#timerResult').innerHTML = ++time;
      }, 1000);
    },

    disableTimer = () => {
      clearInterval(enableTimer);
    };

    timerAdd = () => document.querySelector('#timerResult').innerHTML = ++time;

  return {
    enableTimer,
    disableTimer,
  };
})();

const btnEnable = document.querySelector('#timerEnable');
const btnDisable = document.querySelector('#timerDisable');
const btnTimerAdd = document.querySelector('#timerAdd');
const btnTimerRemove = document.querySelector('#timerRemove');

btnEnable.onclick = enableTimer;
btnDisable.onclick = disableTimer;
btnTimerAdd.onclick = timerAdd;
btnTimerRemove.onclick = () => {
  --time;
};