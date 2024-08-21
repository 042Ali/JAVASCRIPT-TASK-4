const hourElement = document.querySelector(".hr");
const minuteElement = document.querySelector(".mn");
const secondElement = document.querySelector(".sc");
const msecondElement = document.querySelector(".msc");

const bakuButton = document.querySelector(".baku");
const londonButton = document.querySelector(".london");
const moscowButton = document.querySelector(".moscow");
const istanbulButton = document.querySelector(".istanbul");
const nycButton = document.querySelector(".nyc");
const beijingButton = document.querySelector(".beijing");
const tokyoButton = document.querySelector(".tokyo");

const buttons = document.querySelectorAll("button");

function formatTime(timeEntity) {
  if (timeEntity < 10) {
    return `0${timeEntity}`;
  }

  return timeEntity;
}

const timeZoneObject = {
  londonTimeZone: -3,
  moscowTimeZone: -1,
  istanbulTimeZone: -1,
  nycTimeZone: -8,
  beijingTimeZone: 4,
  tokyoTimeZone: 5,
  bakuTimeZone: 0,
};

let activeTimeZone = timeZoneObject.bakuTimeZone;

setInterval(() => {
  const date = new Date();
  const hours = date.getHours() + activeTimeZone;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const mseconds = date.getMilliseconds();

  if (mseconds < 9) {
    msecondElement.textContent = `00${mseconds}`;
  } else if (mseconds < 99) {
    msecondElement.textContent = `0${mseconds}`;
  } else {
    msecondElement.textContent = mseconds;
  }

  hourElement.textContent = formatTime(hours);
  minuteElement.textContent = formatTime(minutes);
  secondElement.textContent = formatTime(seconds);
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttons.forEach((buttonElement) => {
      buttonElement.classList.remove("active");
    });
    event.target.classList.add("active");
    const timezone = button.dataset.country + "TimeZone";

    activeTimeZone = timeZoneObject[timezone];
  });
});

// 1. dark mode, light mode
// 2. save country option (browser memory storage)

// Dark Mode
const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
    document.querySelector("h1").style.color = "black";
    document.querySelector("button").style.background = "white";
    document.querySelector("button").style.color = "black";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
