'use strict'

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Error from "../img/closeicon.svg"

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const dates = (ms) => {
  const {days, hours, minutes, seconds} = ms;
  const dataDays = document.querySelector('[data-days]');
  const dataHours = document.querySelector('[data-hours]');
  const dataMinutes = document.querySelector('[data-minutes]');
  const dataSeconds = document.querySelector('[data-seconds]');

  dataDays.textContent = days.toString().padStart(2,'0');
  dataHours.textContent = hours.toString().padStart(2,'0');
  dataMinutes.textContent = minutes.toString().padStart(2,'0');
  dataSeconds.textContent = seconds.toString().padStart(2,'0');
}

const showErrorMes = () => {
  iziToast.show({
    message: "Please chose a date in the future",
    color: '#ef4040',
    messageColor: '#ffffff',
    theme: 'dark',
    timeout: 3000,
    pauseOnHover: true,
    position: 'topRight',
    iconUrl: Error,
  })
}

function timer() {
  btnStart.setAttribute('disabled', '');
  input.setAttribute('disabled','')
  const dInput = new Date(userSelectedDate);
  const cTime = dInput.getTime();
  let finallyTime = cTime - Date.now()
  const pop = 1000;
    const idInter = setInterval(() => {
      dates(convertMs(finallyTime));
      finallyTime -= pop;
      if (finallyTime <= 0) {
        stopTimer(userSelectedDate, idInter);
        input.removeAttribute('disabled')
      }
    }, 1000);
}

const stopTimer = (userSelectedDate, idInter)=>  {
  if (userSelectedDate < Date.now() + 400) {
    clearInterval(idInter)
  }
}

const input = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('[data-start]')

let userSelectedDate;

btnStart.setAttribute('disabled', '');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: Date.now(),
    dateFormat: "Y-m-d H:i",
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate <= Date.now()) {
        showErrorMes();
        btnStart.setAttribute('disabled', '');
      } else {
        btnStart.removeAttribute('disabled')
      }
    },
  };
  
flatpickr(input, options);

btnStart.addEventListener('click', timer);
