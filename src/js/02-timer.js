import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    timeInputLine: document.querySelector("input#datetime-picker"),
    startButton: document.querySelector("button[data-start]"),
    daysValue: document.querySelector(".value[data-days]"),
    hoursValue: document.querySelector(".value[data-hours]"),
    minutesValue: document.querySelector(".value[data-minutes]"),
    secondsValue: document.querySelector(".value[data-seconds]"),
}

let currentTime = null;
let selectedTime = null;
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    // minDate: "today",
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates.length > 0) {
            currentTime = Date.now();
            console.log("Current time (timestamp):", currentTime);
            selectedTime = selectedDates[0].getTime();
            console.log("Selected time (timestamp):", selectedTime);
      
            if (selectedTime <= currentTime) {
              Notiflix.Notify.warning('Please choose a date in the future');
              return;
            }
            refs.startButton.disabled = false;
          }
    },
  };

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

function dataStartHandler() {
  if (timerId) {
    return;
  }
   timerId = setInterval(() => {

    currentTime = Date.now();
    const timerTime = selectedTime - currentTime;
    console.log(timerTime);
    if(timerTime <= 0){
      clearInterval(timerId);
      Notiflix.Notify.success('Time is up!');
      return;
    }

    timerDisplay(convertMs(timerTime));
  },1000);

}


function timerDisplay ({days, hours, minutes, seconds}) {
  refs.daysValue.textContent = String(days).padStart(2, '0');
  refs.hoursValue.textContent = String(hours).padStart(2, '0');
  refs.minutesValue.textContent = String(minutes).padStart(2, '0');
  refs.secondsValue.textContent = String(seconds).padStart(2, '0');
}


refs.startButton.disabled = true;
flatpickr(refs.timeInputLine, options);


refs.startButton.addEventListener('click', dataStartHandler);