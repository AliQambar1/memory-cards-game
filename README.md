# memory-cards-game

1- As a user, I want to see a landing page when I arrive at the website to know I’m in the right place.

2- As a user, I want to click a clearly visible "Start" button, so that I can begin playing the game.

3- As a user, when the game starts, I want to see eight cards displayed face-up with their images visible, so that I can briefly memorize their positions

4- As a user, I want the images on the cards to be turned face down after 3 seconds, so that I must rely on memory to find matching pairs.

5- As a user, I want to see a one-minute countdown timer, so that I know how much time I have left to find all matching pairs. 

6- As a user, I want to be able to click two cards at a time, and after selecting both, I want the game to tell me whether they match or not.

7- As a user, if I match all pairs before the timer runs out, I want to see a clear "You Win" message; if I do not match all pairs in time, I want to see a "You Lose" message.

8- As a user, after finishing a round, I want to have the option to play again.



# Pseudocode 

START:

1- Display landing page
2- Display Start button

When the user clicks Start button:
game variables:
 totalPairs = 3
 matchedPairs = 0
 timeLimit = 60 seconds

1- HIDE landing page
2- Load 8 cards (4 matching paris) with images
3- Display all cards face-up
4- Wait 3 seconds 
4- Turn all cards face-down
5- Start countdown timer 1 minute

Whil time remaining > 0 and matchedPairs < totalPairs:

1- If user clicks a face-down cards:
    Flip the card to show its image
    Add the card to selection list

2- If two cards are selected:
   
   If image match:
   Keep both cards face-up
   Increment matchedPairs by 1 

   Else:
   Wait 1 second
   Turn bothe cards face-down
   clear selection list

   3- IF matchedPairs == totalPairs:
    
    Display "You Win" message
    Offer "Play again" option
    Stop game 

    4- If time remainig === 0 And matchedPairs < totalPairs:
    Display "You Lose" message
    offer "Play again" option
    Stop game