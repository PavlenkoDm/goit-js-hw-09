import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    buttonStart: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    enableSeconds: true,

    onClose(selectedDates) {
        console.log(selectedDates[0].getTime());
        if (selectedDates[0].getTime() <= Date.now()) {
            alert('Please choose a date in the future');
            refs.buttonStart.setAttribute("disabled", true);
            return;
        }
        refs.buttonStart.removeAttribute("disabled");
    },
};

flatpickr('#datetime-picker', options);
refs.buttonStart.setAttribute("disabled", true);
