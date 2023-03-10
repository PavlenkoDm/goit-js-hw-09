import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let isActive = false;
const refs = {
    buttonStart: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    input: document.querySelector('#datetime-picker')
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    enableSeconds: true,

    onClose([selectedDates]) {
        if (selectedDates.getTime() <= Date.now()) {
            Notify.failure("Please choose a date in the future");
            setDisabledAttribute();
            return;
        }
        refs.buttonStart.removeAttribute("disabled");
    }

};

flatpickr('#datetime-picker', options);

setDisabledAttribute();
refs.buttonStart.addEventListener('click', onStart);



//------------------------------------------------------------------------------//
function onStart() {
    if (isActive === true) return;
    isActive = true;
    const dateSelected = new Date(refs.input.value).getTime();
    const datePresent = Date.now();
    let deltaTime = dateSelected - datePresent;
    let timerId = null;
    const delayStep = 1000;

    timerId = setInterval(() => {
        if (deltaTime <= 0) {
            clearInterval(timerId);
            Notify.success('Time is over');
            setDisabledAttribute();
            return;
        }

        pageTimerUpdater(deltaTime);

        deltaTime -= delayStep;
    }, delayStep);

}


function pageTimerUpdater(timeObj) {
    const { days, hours, minutes, seconds } = convertMs(timeObj);
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
}


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}


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


function setDisabledAttribute() {
    refs.buttonStart.setAttribute("disabled", true);
}