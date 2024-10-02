//create tamplate variables
//const INTERVAL_MS = 1000 / 60;
//let TimerID;
//let lastTimerStartTime = 0;
//let milliElapsedBeforeLastStart = 0;

//Get our data from The DOM
//const timer = document.getElementById('timer');
//const startButton = document.getElementById('start-button');
//const stopButton = document.getElementById('Stop-button');
//const resetButton = document.getElementById('reset-button');

//Creating A Function

//start Timer
//stop Timer
//Resett Timer
//Update Timer
//Format Number

let timer;
let isRunning = false;
let elapsedTime = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            elapsedTime += 1000;
            timerDisplay.textContent = formatTime(elapsedTime);
        }, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    timerDisplay.textContent = formatTime(elapsedTime);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
