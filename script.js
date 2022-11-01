// create event listeners for clicked cards
const cards = document.querySelectorAll('.card');

let hasFlipped = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    if (!hasFlipped) {
        // first choice
        hasFlipped = true;
        firstCard = this;
    } else {
        // second choice
        hasFlipped = false;
        secondCard = this;

        checkForMatch();
    }
}

function checkForMatch(){
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    
    isMatch ? freezeCards() : resetCards();
    
}

function freezeCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function resetCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        }, 1500);
}
cards.forEach(card => card.addEventListener('click', flipCard));
// add function to show flipped card value (faceup)

// function to check for matches

// function to reset unmatched cards back to facedown

// function to clear matched cards from game board

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