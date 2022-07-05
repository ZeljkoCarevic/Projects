"use strict";

const submit = document.querySelector(".button");
const inputDate = document.querySelector(".date");
const container = document.querySelector(".container");
const countdownContainer = document.getElementById("countdown-timer");
const inputField = document.querySelector(".input-field");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let date;

submit.addEventListener("click", function () {
  container.style.opacity = 0;
  countdownContainer.style.opacity = 1;

  function countdown() {
    const currentDate = new Date();
    date = new Date(inputDate.value);

    const Totalseconds = (date - currentDate) / 1000;
    const seconds = Math.floor(Totalseconds) % 60;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    const hours = Math.floor(Totalseconds / 3600) % 24;
    const days = Math.floor(Totalseconds / 3600 / 24);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
  }

  countdown();
  setInterval(countdown, 1000);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
});
