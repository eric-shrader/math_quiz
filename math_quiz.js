const startButton = document.getElementById("start")
startButton.addEventListener("click", presentProblem);
startButton.addEventListener("click", startTimer);
let solution;
let answer;
let score = 0;
time = 60;

function presentProblem() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = "<div id='problem'>" + generateProblem() + "</div>" + "<div id='interface'><input type='text' id='answerBox'> <input type='button' id='submitAnswer' value='submit'></div> <div id='score'>score: " + score + "</div>";
    let submitAnswerButton = document.getElementById("submitAnswer");
    submitAnswerButton.addEventListener("click", nextQuestion);
    timer = document.getElementById("timer");
    timer.innerHTML = time;
}


function generateProblem() {
    let number1 = Math.floor(Math.random()*11);
    let number2 = Math.floor(Math.random()*11);
    let operations = ["+", "-", "x"];
    let operation = operations[Math.floor(Math.random()*operations.length)]
    problem = number1 + " " + operation + " " + number2;
    if (operation == "+") {
        solution = number1 + number2;
    } else if (operation == "-") {
        solution = number1 - number2;
    } else {
        solution = number1 * number2;
    }
    return problem;
}

function nextQuestion() {
    const answerBox = document.getElementById("answerBox");
    answer = answerBox.value;
    if (answer == solution) {
        score++;
    }
    presentProblem();
}

function startTimer() {
    timerInterval = setInterval(function() {
        time--;
        timer = document.getElementById("timer");
        timer.innerHTML = time;
    }, 1000);
}

setInterval(endGame, 1000);

function endGame() {
    if (time == 0) {
        const quiz = document.getElementById("quiz");
        quiz.innerHTML = "game over, your score is " + score;
        clearInterval(timerInterval);
        timer = document.getElementById("timer");
        timer.innerHTML = "";
    }
}