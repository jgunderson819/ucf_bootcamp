let time = 30;
let clockRunning = false;
let intervalID;
let converted = timeConverter(time);
let quiz = {
    questions: [
        "Who won Best Actor in a Leading Role?",
        "Who won Best Actor in a Supporting Role?",
        "Who won Best Actress in a Leading Role?",
        "Who won Best Actress in a Supporting Role?",
    ],
    q1: [
        "RAMI MALEK | Bohemian Rhapsody",
        "CHRISTIAN BALE | Vice",
        "BRADLEY COOPER | A Star Is Born",
        "WILLEM DAFOE   | At Eternity's Gate",
        "VIGGO MORTENSEN | Green Book"
    ],
    q2: [
        "MAHERSHALA ALI | Green Book",
        "ADAM DRIVER | BlacKkKlansman",
        "SAM ELLIOTT | A Star Is Born",
        "RICHARD E. GRANT | Can You Ever Forgive Me?",
        "SAM ROCKWELL | Vice"
    ],
    q3: [
        "OLIVIA COLMAN | The Favourite",
        "YALITZA APARICIO | Roma",
        "GLENN CLOSE | The Wife",
        "LADY GAGA | A Star Is Born",
        "MELISSA MCCARTHY | Can You Ever Forgive Me?"
    ],
    q4: [
        "REGINA KING | If Beale Street Could Talk",
        "AMY ADAMS | Vice",
        "MARINA DE TAVIRA | Roma",
        "EMMA STONE | The Favourite",
        "RACHEL WEISZ | The Favourite"
    ],
    answer: [
        "RAMI MALEK | Bohemian Rhapsody",
        "MAHERSHALA ALI | Green Book",
        "OLIVIA COLMAN | The Favourite",
        "REGINA KING | If Beale Street Could Talk"
    ]
};

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
    $("#timer").text(converted);
    if (time == 0) {
        stop(intervalID);
    }
}