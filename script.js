// create event listeners for clicked cards
const cards = document.querySelectorAll('.card');

let hasFlipped = false;
let freezeBoard = false;
let firstCard, secondCard;

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
    } else {
        resetCards();
        document.getElementById('noMatch').play();
    }
    // isMatch ? freezeCards(): resetCards();
        
        // this.audioControl.match();
        // this.totalMatches++;
        // this.ticker.innerText = this.totalMatches;
        
        // this.audioControl.noMatch();
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

// function ready() {
//     // let game = new MemoryMatch(60, cards);
//     let overlays = Array.from(document.getElementsByClassName('overlay-message'));

//     overlays.forEach(overlay => {
//         overlay.addEventListener('click', () => {
//             window.location.reload();
//         });
//         this.audioControl = new AudioControl();
//     })
// }
// function to reset (shuffle) cards
(function shuffleCards() {
    cards.forEach(card => {
        let randomNum = Math.floor(Math.random() * 12);
        card.style.order = randomNum;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));

// class MemoryMatch {
//     constructor(totalTime, cards) {
//         this.cardsArray = cards;
//         this.totalTime = totalTime;
//         this.timeRemaining = totalTime;
//         this.timer = document.getElementById('time-remaining');
//         this.ticker = document.getElementById('score');
//         this.audioControl = new AudioControl();
//     }
//      gameStart() {
//         this.timeRemaining = this.totalTime;
//         resetBoard();
//         this.timer.innerText = this.timeRemaining;
//         this.ticker.innerText = this.totalMatches;
//     }
// }







// class AudioControl {
//     constructor() {
//         this.flipSound = new Audio("assets\Audio\whoosh.mp3");
//         this.matchSound = new Audio("assets\Audio\yay.mp3");
//         this.noMatchSound = new Audio("assets\Audio\oh-no.mp3");
//         this.winnerSound = new Audio("assets\Audio\friends-theme.mp3");
//         this.timeUpSound = new Audio("assets\Audio\buzzer.mp3");
//         this.winnerSound.volume = 0.75;
//     }
//     // play sound when card is turned over (whoosh)
//     flipped() {
//         this.flipSound.play();
//     }
//     // play sound when a match is found
//     match() {
//         this.matchSound.play();
//     }
//     // play error sound when no match
//     noMatch() {
//         this.noMatchSound.play();
//     }
//     // play victory song when game board is cleared
//     winner() {
//         this.winnerSound.play();
//     }
//     // buzzer when time is up
//     timeUp() {
//         this.timeUpSound.play();
//     }
// }



// function to reset timer on game start

// message to user that game was won

// timer clock function

// start timer when game is started (on first click?)

// warning sound when time is running out



// message to user that game was lost

// play again? message 

