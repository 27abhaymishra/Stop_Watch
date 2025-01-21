
let timer, seconds = 0;
const stopwatch = document.getElementById('stopwatch');

function updateTime() {
  stopwatch.textContent = new Date(seconds * 1000).toISOString().substr(11, 8);
}

function startTimer() {
  timer = setInterval(function() {
    seconds++;
    updateTime();
   }
   , 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  updateTime();
}