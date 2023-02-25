
let delayStep = null;

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onSubmit)




function onSubmit(event) {
  event.preventDefault();
  let firstDelay = refs.form.elements.delay.value;
  delayStep = refs.form.elements.step.value;
  const amount = refs.form.elements.amount.value;
   
  if (amount <= 0) return;

  for (let i = 1; i <= amount; i += 1) {
    
    createPromise(i, firstDelay)
      .then(({ pos, del }) => {
        console.log(`Fulfilled promise`);
      })
      .catch(({ pos, del }) => {
        console.log(`Rejected promise`);
      });
    firstDelay += delayStep;
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
          reject({position, delay});
        }
    }, delay);
  });
  
}
