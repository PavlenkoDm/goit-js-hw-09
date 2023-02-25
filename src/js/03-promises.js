
let firstDelay = null;
let amount = null;
let delayStep = null;

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onSubmit)



function onSubmit(event) {
  event.preventDefault();
  firstDelay = refs.form.elements.delay.value;
  delayStep = refs.form.elements.step.value;
  amount = refs.form.elements.amount.value;
   
  if (amount <= 0) return;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, firstDelay);
    firstDelay += delayStep;
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
