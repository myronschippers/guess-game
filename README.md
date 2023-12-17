# Team Random Number Guess

In this challenge, you will be creating a number guessing game! Start by spending 5 minutes reading through the requirements individually. After reading through the requirements, come together as a group and talk about what you would like to get out of the project.

### Tech: Node, Express, and JavaScript

## Base Mode

You should generate a random number between 1 and 25. Store the number in a variable but don't display it on the DOM! Add input fields to match the number of people in your group. Each member of your group will submit a guess at the same time. Check each guess against the random number. After submitting a round of guesses, let each user know whether their guess was correct, too low or too high.

- [ ] an input field for each of the Players to make a guess (CLIENT)
- [ ] a submit guesses button (submits all guesses at the same time) (CLIENT)
- [ ] total guesses made indicator (think of this as rounds in a game) (SERVER) (CLIENT)
- [ ] details area for the history of guesses for each player (tell them if their last guess was too low or too high) (SERVER / CLIENT)
- [ ] if a guess is correct PROMINENTLY Display which player won (make 'em FEEL it) (CLIENT)
- [ ] if there is a winner, a restart button that selects a new random number (SERVER / CLIENT)

DEV NOTES:

SERVER:
- run server******
- google random number generator, Need to be able to reset
    - generate random number on server, is a global variable
- check guesses against random number (LOGIC)
    - comparison and surface result dialog/text
- history of guesses (array?????)

DOM / CLIENT
- input fields for players
- input fields submit at the same time
- display results (DUMB)
- display number of guesses
- PROMINENTLY Display Correct guess, super stylish
- make restart button

## Stretch Goals

The list below is not in any order of priority. Before attempting any of these, commit your working base mode. Make sure each member of your group understands what you completed for base mode!

- allow for users to generate a new game with a manual min/max random number range
- disallow two users to submit the same guess at the same time
- add a bot player that guesses a random number each time in addition to the players (this bot should really talk trash when it beats a bunch of humans)
- what are your ideas? Have some fun with it
