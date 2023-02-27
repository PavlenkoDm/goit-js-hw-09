
const refs = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}
let timerId = null;

refs.buttonStart.addEventListener('click', onStart);
refs.buttonStop.addEventListener('click', onStop);



//-------------------------------------------------------------------------------------//
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
    buttonTogle(true);
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();  
    }, 1000);
}

function onStop() {
    buttonTogle(false);
    clearInterval(timerId);
}

function buttonTogle(boolValue) {
    refs.buttonStart.disabled = boolValue;
    refs.buttonStop.disabled = !boolValue;
}
