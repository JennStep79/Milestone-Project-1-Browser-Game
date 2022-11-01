// create event listeners for clicked cards
const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
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