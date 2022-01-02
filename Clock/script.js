const hours = document.querySelector("#gio");
const minutes = document.querySelector("#phut");
const seconds = document.querySelector("#giay");

time()

function time(){
    const now = new Date();

    const hr = addZeroNum(now.getHours());
    const min = addZeroNum(now.getMinutes());
    const sec = addZeroNum(now.getSeconds());

    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}

const clock = setInterval(time, 1000)

function addZeroNum (num) {
    return num < 10 ? `0${num}` : num;
}
