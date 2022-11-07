# Milestone-Project-1-Browser-Game

This is a Memory Match browser game, created for the ThriveDx Full Stack Developer class Milestone Project #1. Its theme is from the Friends TV show, which is a long-time favorite of mine. 

To Play:  Choose two cards by clicking once on each card. If they are a match, you will earn a point on your scoreboard. If they are not a match, the cards will flip back and you should choose another pair. Remember where you saw each card and try to match them all before the timer runs out! 

Technologies used:  

I created the card back and the card front images using Canva. The font I used is called Gabriel Weiss Friends by Gabriel Weiss. It was downloaded from Dafont.com. The sound clips were downloaded from 101soundboards.com. 

For this build, I researched and learned about some new concepts that were previously unfamiliar to me. These include the CSS properties "perspective" and "transform-style" to create the 3D effect when flipping the cards over, and "dataset" to match the card images into pairs.

Outstanding bugs: 

I would like to figure out a way to delay the click events on the "Click to replay" messages so that the user cannot click until they've had a few seconds to read the message indicating if they have won or lost, and to hear the corresponding sound clip before navigating away from the screen. I realized that I can't use a setTimeout because I already have one on the second part of the Game Over sound effects. I would try using an async function if I had more time. I do feel like this is above and beyond what is required in the assignment, so I will probably work toward that before I include this project in my future portfolio. I would also make it responsive and able to be played on mobile phone.