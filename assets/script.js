var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start-btn');
var questionEl = document.getElementById('question-container');
var choicesEl = document.getElementById('choices');
var questions = [
    { q: 'What is blue?', c: ["Red", "Yellow", "Blue", "Green"], a: 'Blue'},
    { q: 'What is green?', c: ["Red", "Yellow", "Blue", "Green"], a: 'Green'}
]
var currentQuestion = 0;
var instructionEl = document.getElementById('instructions');
var choicesBtn = document.getElementsByClassName('btn');
var score = 0;
var timeLeft = 10;

// Timer that counts down from 10
function countdown() {
    // Use the 'setInterval()' method to call a function to begin countdown
    var timeInterval = setInterval(function() {
        if (timeLeft > 0 && currentQuestion < questions.length) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else { 
            timerEl.textContent = parseInt(0);
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
};

startBtn.addEventListener('click', startGame);

function startGame() {
    countdown();
    instructionEl.classList.add('hide');
    choicesEl.classList.remove('hide');
    startBtn.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    questionEl.textContent = questions[currentQuestion].q;
    
    for (i = 0; i < questions[currentQuestion].c.length; i++) {
        var answers = document.getElementById(`choice${i}`);
        answers.textContent = questions[currentQuestion].c[i];
    }
    for (i = 0; i < choicesBtn.length; i++) {
        choicesBtn[i].addEventListener('click', function(event){
            if (event.target.textContent === questions[currentQuestion].a) {
            score++;
            } else {
                timeLeft--;
                timerEl.textContent = timeLeft;
            }
            currentQuestion++;

            if (currentQuestion === questions.length) {
                endGame();
            } else {
                setNextQuestion();
            };
        });
    };
};

function endGame() {
    choicesEl.classList.add('hide');
    questionEl.classList.add('hide');
    instructionEl.textContent = "Congratulations! You're all done!";
    instructionEl.classList.remove('hide');
    localStorage.setItem('JC', '5');
    var inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('id', 'initials');
    instructionEl.appendChild(inputEl);
    var submitBtn = document.createElement('button');
    submitBtn.setAttribute('id', 'submitBtn');
    submitBtn.addEventListener('click', function(){
        var userId = document.getElementById('initials').value;
        localStorage.setItem(userId, score);
        localStorage.getItem(userId);
        localStorage.getItem(score);
        highScore();
    });
    instructionEl.appendChild(submitBtn);
};

function highScore() {
    var scoreBoardEl = document.createElement('div');
    for (var leaderBoard in localStorage) {
        if (leaderBoard !== "clear" && leaderBoard !== "removeItem" && leaderBoard !== "setItem" && leaderBoard !== "length" && leaderBoard !== "getItem" && leaderBoard !== "key") {
        // console.log(`${leaderBoard} : ${localStorage[leaderBoard]}`);
        var leader = document.createElement('div');
        leader.textContent = leaderBoard + localStorage[leaderBoard];
        scoreBoardEl.appendChild(leader);
        };
    };
    var container = document.getElementById('container');
    container.appendChild(scoreBoardEl);
}