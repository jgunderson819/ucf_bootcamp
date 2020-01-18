let time = 30;
let clockRunning = false;
let intervalID;
let converted = timeConverter(time);

$(".timeRemaining").text("00:30");

function start() {
    if (!clockRunning) {
        intervalID = setInterval(count, 1000);
        clockRunning = true;
    }
}

function stop() {
    clearInterval(intervalID);
    clockRunning = false;
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

function reset() {
    time = 30;
    $(".timeRemaining").text("00:30");
}

function count() {
    time--;
    let converted = timeConverter(time);
    $(".timeRemaining").text(converted);
    if (time==0) {
        stop(intervalID);
    }
}