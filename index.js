const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let interval;
  return (seconds) => {
    clearInterval(interval)
    interval = setInterval(() => {
      let hours = Math.floor(seconds / 3600)
      let min = Math.floor(seconds / 60) - (hours * 60)
      let sec = seconds % 60
      let strTimer = `${hours}:${min}:${sec}`;
      if (seconds <= 0) {
        clearInterval(interval);
        timerEl.innerHTML = strTimer;
      } else {
        timerEl.innerHTML = strTimer;
      }
      seconds--;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  let onlyNums = inputEl.value.match(/^[0-9]+$/) != null
  let nums = inputEl.value.split('')
  if (!onlyNums) {
    nums.pop()
    inputEl.value = nums.join('')
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
