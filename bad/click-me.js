(() => {
  const clickMeAddEl = document.querySelector('#clickMeAdd');
  const clickMeRemoveEl = document.querySelector('#clickMeRemove');
  let countBtn = 0;

  const generateBtn = () => {
    const content = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerText = `Кнопка #${++countBtn}`;
    btn.dataset.number = countBtn;

    content.appendChild(btn);    
    document.querySelector('#clickMeBtnList').appendChild(content);

    document
      .querySelectorAll('#clickMeBtnList button')
      .forEach((el) => {
        el.addEventListener('click', (el) => {
          document.querySelector('#clickMeRessult').innerHTML = `Нажали ${el.target.dataset.number}`;
          console.log(`Нажали ${el.target.dataset.number}`);          
        });
      });
  }

  const removeBtn = () => {
    --countBtn;
    
    const btns = document.querySelectorAll('#clickMeBtnList button');

    btns[btns.length - 1].remove();
  }

  clickMeAddEl.onclick = generateBtn;
  clickMeRemoveEl.onclick = removeBtn;
})()