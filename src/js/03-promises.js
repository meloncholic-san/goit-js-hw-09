import Notiflix from 'notiflix';

const refs = {
  createPromiseForm: document.querySelector("form"),
  inputDelay: document.querySelector("input[name = 'delay']"),
  inputStep: document.querySelector("input[name = 'step']"),
  inputAmount: document.querySelector("input[name = 'amount']"),
};

refs.createPromiseForm.addEventListener('submit', createPromiseHandler);


 function createPromiseHandler(event) {
  event.preventDefault();
  const promiseDelay = Number(refs.inputDelay.value);
  const promiseStep = Number(refs.inputStep.value);
  const promiseAmount = Number(refs.inputAmount.value);


  console.log('Delay:', promiseDelay);
  console.log('Step:', promiseStep);
  console.log('Amount:', promiseAmount);


  for (let i = 0; i < promiseAmount; i++) {
    const currentDelay = promiseDelay + i * promiseStep;

    createPromise(i + 1, currentDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }

}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }

    }, delay);

  });
}
