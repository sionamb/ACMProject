let minutes = 30

const countdownComponent = document.querySelector('#Time');
countdownComponent.setCountdownLength([0,0,30]);
countdownComponent.startCountdown();

console.log(countdownComponent)