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
        "Christian Bale",
        "Bradley Cooper",
        "Rami Malek",
        "Willem Dafoe",
        "Viggo Mortensen",

    ],
    q2: [
        "Mahershala Ali",
        "Adam Driver",
        "Sam Elliott",
        "Richard E. Grant",
        "Sam Rockwell",

    ],
    q3: [
        "Olivia Colman",
        "Yalitza Aparicio",
        "Glenn Close",
        "Lady Gaga",
        "Melissa Mccarthy"

    ],
    q4: [
        "Regina King",
        "Amy Adams",
        "Marina De Tavira",
        "Emma Stone",
        "Rachel Weisz",

    ],
    answer: [
        "Rami Malek",
        "Mahershala Ali",
        "Olivia Colman",
        "Regina King ",
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

function loadQuiz() {
    $(".main").append("<h1>Trivia Game</h1>");
    $(".main").append("<div id='timer'>00:30</div>");
    $(".main").append("<div class='questions'>");
    start();
    for (let i = 0; i < quiz.questions.length; i++) {
        let form = `<form id=form${i}>`;
        let question = `<h3>${quiz.questions[i]}`;
        $(".questions").append(form);
        $(`#form${i}`).append(question);
    }
    for (let i = 0;i<quiz.q1.length;i++) {
        let formCheck = `<div class="form-check form-check-inline" id="formCheck${i}">`;
        let input = `<input class="form-check-input" type="radio" id="q1a${i}" name="q1" value="${quiz.q1[i]}">`;
        let label = `<label class="form-check-label" for="q1a${i}">${quiz.q1[i]}`;
        let radioButton = formCheck + input + label;
        $(`#form0`).append(radioButton);
    }
    for (let i = 0;i<quiz.q2.length;i++) {
        let formCheck = `<div class="form-check form-check-inline" id="formCheck${i}">`;
        let input = `<input class="form-check-input" type="radio" id="q2a${i}" name="q2" value="${quiz.q2[i]}">`;
        let label = `<label class="form-check-label" for="q2a${i}">${quiz.q2[i]}`;
        let radioButton = formCheck + input + label;
        $(`#form1`).append(radioButton);
    }
    for (let i = 0;i<quiz.q3.length;i++) {
        let formCheck = `<div class="form-check form-check-inline" id="formCheck${i}">`;
        let input = `<input class="form-check-input" type="radio" id="q3a${i}" name="q3" value="${quiz.q3[i]}">`;
        let label = `<label class="form-check-label" for="q3a${i}">${quiz.q3[i]}`;
        let radioButton = formCheck + input + label;
        $(`#form2`).append(radioButton);
    }
    for (let i = 0;i<quiz.q4.length;i++) {
        let formCheck = `<div class="form-check form-check-inline" id="formCheck${i}">`;
        let input = `<input class="form-check-input" type="radio" id="q4a${i}" name="q4" value="${quiz.q4[i]}">`;
        let label = `<label class="form-check-label" for="q4a${i}">${quiz.q4[i]}`;
        let radioButton = formCheck + input + label;
        $(`#form3`).append(radioButton);
    }
}

window.onload = function () {
    this.loadQuiz();
};