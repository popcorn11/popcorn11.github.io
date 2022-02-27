const days = document.querySelector('.day h2');
const hours = document.querySelector('.hour h2');
const minutes = document.querySelector('.minute h2');
const seconds = document.querySelector('.second h2');

timer()

function timer(){
    const date = new Date("January 22, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const dist = date - now;

    const dy = addZeroNum(Math.floor(dist / (1000 * 60 * 60 * 24)));
    const hr = addZeroNum(Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const min = addZeroNum(Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)));
    const sec = addZeroNum(Math.floor((dist % (1000 * 60)) / (1000)));

    days.innerHTML = dy;
    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}

const countdown = setInterval(timer, 1000)

function addZeroNum (num) {
    return num < 10 ? `0${num}` : num;
}