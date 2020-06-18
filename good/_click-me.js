(() => {
  const btnGroupEl = document.querySelector('#clickMeBtnList');
  const resEl = document.querySelector('#clickMeRessult');
  const clickMeAddEl = document.querySelector('#clickMeAdd');
  const clickMeRemoveEl = document.querySelector('#clickMeRemove');
  let countBtn = 0;

  const listnreFn = (el) => {
    resEl.innerHTML = `Нажали ${el.target.dataset.number}`;
    console.log(`Нажали ${el.target.dataset.number}`);
  };

  const generateBtn = () => {
    const content = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerText = `Кнопка #${++countBtn}`;
    btn.dataset.number = countBtn;

    content.appendChild(btn);
    btnGroupEl.appendChild(content);

    btn.addEventListener('click', listnreFn);
  }

  const removeBtn = () => {
    if (!countBtn) {
      return;
    }

    --countBtn;

    const btns = document.querySelectorAll('#clickMeBtnList button');
    const btn = btns[btns.length - 1];

    btn.removeEventListener('click', listnreFn);
    btn.remove();
  }

  clickMeAddEl.onclick = generateBtn;
  clickMeRemoveEl.onclick = removeBtn;
})()