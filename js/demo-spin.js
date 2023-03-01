const startButton = document.querySelectorAll('.start-button');
const wheelSpiner = document.querySelector('.wheel__spiner');
const popupWin = document.querySelector('.popup__win');
const popupLoss = document.querySelector('.popup__loss');
const popupButtons = document.querySelectorAll('.popup__button');

let corner = 0;
let result;

[].forEach.call(startButton, (btn) => {
  btn.addEventListener('click', () => {
    corner += 360;
    wheelSpiner.style.transform = `translateX(-50%) rotate(-${corner}deg)`;
    
    result = Math.round(Math.random()) > 0 ? popupWin : popupLoss;
  
    setTimeout(() => result.style.display = 'flex', 750);
  });
});

[].forEach.call(popupButtons, (el) => {
  el.addEventListener('click', () => result.style.display = 'none');
});
