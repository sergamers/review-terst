const {
  init
} = (() => {
  let time = 0;
  let timer;
  const resEl = document.querySelector('#timerResult');

  const enableTimer = () => {
    disableTimer();

    timer = setInterval(() => {
      timerAdd();
    }, 1000);
  };

  const disableTimer = () => {
    clearInterval(timer);
  };

  const timerAdd = () => {
    resEl.innerHTML = ++time;
  }

  const timerRemove = () => {
    resEl.innerHTML = --time;
  }

  const init = () => {
    const btnEnable = document.querySelector('#timerEnable');
    const btnDisable = document.querySelector('#timerDisable');
    const btnTimerAdd = document.querySelector('#timerAdd');
    const btnTimerRemove = document.querySelector('#timerRemove');

    btnEnable.onclick = enableTimer;
    btnDisable.onclick = disableTimer;
    btnTimerAdd.onclick = timerAdd;
    btnTimerRemove.onclick = timerRemove;

    resEl.innerHTML = time;
  }

  return {
    init
  };
})();

init();