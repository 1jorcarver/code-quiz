var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start-btn');


startBtn.addEventListener('click', countdown);
// Timer that counts down from 20
function countdown() {
    var timeLeft = 20;

    // Use the 'setInterval()' method to call a function to begin countdown
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else { 
            timerEl.textContent = parseInt(0);
            clearInterval(timeInterval);
        }
    }, 1000);

}
    // game starts at 0
    // var score = 0;

    // loop over every question object
    // for (var i = 0; i < question.length; i++) {

    // }
// };

function setNextQuestion() {

}

function selectAnswer() {

}
