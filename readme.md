# BREAKOUT



## [Play the Game!](https://nicolapasa.github.io/breakout/)


## Description
Breakout is a clone of a famous arcade game from Atari. There is a brick wall that you have to destroy. Destroy all bricks with one ball to win. The trajectories of the ball could be unpredictable


# Main Functionalities

- The pad moves when you push arrowLeft or arrowRight
- The ball starts to move when you push SPACE
- The first line of brickets is more resistant, you have to hit two times to destroy completely
- You have to input your name and then if you realize a good score you can enter in the top score list
- The game has three balls for the player.
- The game ends when you lose all balls or if the brickets pass the pad.
- You win if all brickets are destroyed
- you can turn off the music
- Hi-Scores are tracked locally with a player name and score.

# Backlog Functionalities

- Adding different types of brickets.
- Add a type of bricket more resistant.
- Optimized trajectories of the ball.
- Improving the UI and adding music and sound effects.
- Adding a top score list.
- Making the game 

# Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- Local Storage
- JS Audio() and JS Image()

# States

- Start Screen
- Game Screen
- Game Over Screen
- Game Win Screen


## Data structure

- game.js 
  - startGame
  - update
  - gameLoop
  - endGame
  - soundController
- player.js 
  - move
  - update
  - shoot 
- ball 
  - move 
  - update 
  - didCollide 
  - didCollideWithBorders
  - changeDirection
  - checkBallOut
- block.js 
  - move 
  - update 
  - checkCollidePlayer
- handler.js 
  - update 
- ui.js 
  - update 
- sound.js 
  - play
  - stop
- savescore.js
  - initGame
  - saveScore 
  - loadScore 


## Links

- [Trello Link](https://trello.com)
- [Slides Link](http://slides.com)
- [Github repository Link](http://github.com)
- [Deployment Link](http://github.com)