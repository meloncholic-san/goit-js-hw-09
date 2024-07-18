const refs = {
    startButton: document.querySelector("button[data-start]"),
    stopButton: document.querySelector("button[data-stop]")
};

refs.startButton.addEventListener('click', colorSwitcherHandler);
refs.stopButton.addEventListener('click', colorStoperHandler);

let intervalId = null;

function colorSwitcherHandler() {
    if (intervalId){
        return;
    }
    intervalId = setInterval (() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;
}


function colorStoperHandler() {
    clearInterval(intervalId);
    intervalId = null;
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }