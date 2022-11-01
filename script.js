// create event listeners for clicked cards
const cards = document.querySelectorAll('.card');

let hasFlipped = false;
let freezeBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (freezeBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

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
    isMatch ? freezeCards() : resetCards();
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
(function shuffleCards() {
    cards.forEach(card => {
        let randomNum = Math.floor(Math.random() * 12);
        card.style.order = randomNum;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));







// event listeners to play sound when turned over (animal sound or intrument sound or whoosh)

// event listeners to play ding ding sound when a match is found

// message to player that match was found

// play error sound when no match

// play victory song when game board is cleared

// message to user that game was won

// timer clock function

// start timer when game is started (on first click?)

// warning sound when time is running out

// buzzer when time is up

// message to user that game was lost

// play again? message 

// function to reset (shuffle) cards and reset timer