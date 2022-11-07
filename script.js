const cards = document.querySelectorAll('.card');

let hasFlipped = false;
let freezeBoard = false;
let firstCard, secondCard;
var matchedCard = 0;
var remainingTime = 45;
var timeStopped = true;
var scoreCount = 0;
const countContainer = document.getElementById('time-number');
const scoreContainer = document.getElementById('score');

(function openGame() {
        document.getElementById('start-message').addEventListener('click', () => {
        document.getElementById('start-message').classList.remove('visible');
        cards.forEach(card => card.addEventListener('click', flipCard));
        shuffleCards();
        setTimeout(() => {
            startTimer();
        }, 500);
        });
})();
// start timer when game is started
const startTimer = () => {
    if(timeStopped) {
        timeStopped = false;
        countContainer.innerHTML = remainingTime;
        timer = setInterval(countDown, 1000);
    }
}
// create function for clicked cards
function flipCard() {
    if (freezeBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    document.getElementById('flipped').play();

    if (!hasFlipped) {
        // first choice
        hasFlipped = true;
        firstCard = this;
        return;
    }
        // second choice
        hasFlipped = false;
        secondCard = this;

        checkForMatch();
}
// function to check for matches
function checkForMatch(){
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    if (isMatch) {
        freezeCards();
        document.getElementById('match').play();
        matchedCard++;
        scoreCount++;
        scoreContainer.innerHTML = scoreCount;
        winner();
    } else {
        resetCards();
        document.getElementById('no-match').play();
    }
}  
// function to freeze matched cards on game board
function freezeCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}
// function to reset unmatched cards back to facedown
function resetCards() {
    freezeBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        }, 1500);
}
function resetBoard() {
    [hasFlipped, freezeBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// function to reset (shuffle) cards
function shuffleCards() {
    cards.forEach(card => {
        let randomNum = Math.floor(Math.random() * 12);
        card.style.order = randomNum;
    });
};
// timer clock function
const countDown = () => {
    remainingTime -= 1;
    countContainer.innerHTML = remainingTime;
    if(remainingTime === 0) {
        gameOver();
    }
}
// function to reset timer on game start
const resetTimer = () => {
    isStopped = true;
    clearInterval(timer);
    remainingTime = 45;
    countContainer.innerHTML = remainingTime;
}
// reset scoreboard
const resetScore = () => {
    scoreCount = 0;
    scoreContainer.innerHTML = scoreCount;
}
const gameOver = () => {
    timeStopped = true;
    clearInterval(timer);
    document.getElementById('time-up').play();
    document.getElementById('game-over-message').classList.add('visible');
    remainingTime = 45;
    countContainer.innerHTML = remainingTime;
    setTimeout(() => {
        document.getElementById('game-over').play();
        }, 1500);
    startGame();   
}

function startGame() {
    let overlays = Array.from(document.getElementsByClassName('replay'));
    [...overlays].forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            document.getElementById('start-message').classList.add('visible');
            document.getElementById('winner').pause();
            document.getElementById('winner').currentTime = 0;
            document.getElementById('game-over').pause();
            document.getElementById('game-over').currentTime = 0;
            cards.forEach(card => {
                card.classList.remove('flip');
            })
            matchedCard = 0;
            shuffleCards();
            resetTimer();
            resetScore();
        });
    });
}
// message to user that game was won       
function winner() {
    if(matchedCard == 6) {
        timeStopped = true;
        clearInterval(timer);
        document.getElementById('winner').play();
        document.getElementById('winner-message').classList.add('visible');
        startGame();
    }
}
