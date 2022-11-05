const cards = document.querySelectorAll('.card');

let hasFlipped = false;
let freezeBoard = false;
let firstCard, secondCard;



//     // game.gameStart();
// });
(function startGame() {
    let overlays = Array.from(document.getElementsByClassName('overlay-message'));
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
        });
    });
})();
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
        this.ticker.innerText = this.totalMatches;
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
//     }
     
//     gameStart() {
//         this.timeRemaining = this.totalTime;
//         resetBoard();
//         setTimeout(() => {
//             this.countdown = this.startCountdown();
//         }, 500)
//         this.timer.innerText = this.timeRemaining;
//         this.ticker.innerText = this.totalMatches;
//     }
//     startCountdown() {
//         return setInterval(() => {
//             this.timeRemaining--;
//             this.timer.innerText = this.timeRemaining;
//             if(this.timeRemaining === 0) 
//                 this.gameOver();
//         }, 1000);
//     }
//     gameOver() {
//         clearInterval(this.countdown);
//         document.getElementById('game-over').play();
//         document.getElementById('game-over-message').classList.add('visible');
//     }
//     winner() {
//         clearInterval(this.countdown);
//         document.getElementById('winner').play();
//         document.getElementById('winner-message').classList.add('visible');
//     }
// }
// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready);
// } else {
//     ready();
// }

// function ready() {
    
//     let cards = Array.from(document.getElementsByClassName('card'));
//     let game = new MemoryMatch(60, cards);

    
// });

// function to reset timer on game start

// message to user that game was won

// timer clock function

// start timer when game is started (on first click?)



// message to user that game was lost

// play again? message 

