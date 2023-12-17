// console.log('hello world');







// Global Variables
let totalGuesses = 0;
let winnerState = 0;  // 0 state for no current winner, 1 for a current winner


// Handle form submission (i.e. Play the game)
function submitGuesses(event){
  event.preventDefault ();
  
  //Update total guesses and render on the DOM
  totalGuesses++;
  let guessesEle = document.querySelector("#totalGuesses");
  guessesEle.innerHTML = `${totalGuesses}`;

  let player1GuessEle = document.querySelector('#player1');
  // console.log('Player 1 Guess:', player1GuessEle.value);
  let player2GuessEle = document.querySelector('#player2');
  // console.log('Player 2 Guess:', player2GuessEle.value);
  let player3GuessEle = document.querySelector('#player3');
  // console.log('Player 3 Guess:', player3GuessEle.value);
  const guessData = [
    {player: 'Player 1', guess: player1GuessEle.value}, 
    {player: 'Player 2', guess: player2GuessEle.value},
    {player: 'Player 3', guess: player3GuessEle.value}
  ];

  axios(
    {
      method: 'POST',
      url: '/guess-data',
      data: guessData
    }
  )
  .then((response) => {
    console.log('client POST code:')

    // GET results - Payload [[lastGuesses objects], [result objects]]
    axios({
      method: 'GET',
      url: 'game-results'
    })
    .then((response) => {
      console.log('GETting game-results', response.data);
      let guesses = response.data[0];
      let results = response.data[1];

      // Evaluate player 1
      player1LastEle.innerHTML = `${guesses[0].guess} - ${results[0]}`;
      if (results[0] === 'Winner!' ) {
        player1LabelEle.classList.add('winner');
        player1LastEle.classList.add('winner');
        winnerState = 1;
      } 
      // Evaluate player 2
      player2LastEle.innerHTML = `${guesses[1].guess} - ${results[1]}`;
      if (results[1] === 'Winner!' ) {
        player2LabelEle.classList.add('winner');
        player2LastEle.classList.add('winner');
        winnerState = 1;
      } 
      // Evaluate player 3
      player3LastEle.innerHTML = `${guesses[2].guess} - ${results[2]}`;
      if (results[2] === 'Winner!' ) {
        player3LabelEle.classList.add('winner');
        player3LastEle.classList.add('winner');
        winnerState = 1;
      } 
         // add reset game button if winner is detected
      if (winnerState === 1) {
        let inputFormEle = document.querySelector('#inputForm');
        inputFormEle.innerHTML += `<input id="resetBtn" type="reset" value="RESET GAME" onClick="resetGame()">`;
        // console.log(inputFormEle);
      }
    })
    .catch();
 

  })
  .catch((err) =>
  {

  });

  let player1LastEle = document.querySelector('#player1last');
  let player2LastEle = document.querySelector('#player2last');
  let player3LastEle = document.querySelector('#player3last');

  let player1LabelEle = document.querySelector('#player1label');
  let player2LabelEle = document.querySelector('#player2label');
  let player3LabelEle = document.querySelector('#player3label');






  return;

}

function resetGame () {
  console.log('Resetting Game');
  //reset counter and win state
  winnerState = 0;
  totalGuesses = 0;

  // rest server via POST route (just a signal to act, no data passed

  axios ({
    method: 'POST',
    url: '/reset-game'
  })
  .then((response) => {
    console.log('Sending game-reset signal to server');
  })
  .catch((err) => {
    console.error('Error in reset-game:', err);
  });

  let player1GuessEle = document.querySelector('#player1');
  // console.log('Player 1 Guess:', player1GuessEle.value);
  let player2GuessEle = document.querySelector('#player2');
  // console.log('Player 2 Guess:', player2GuessEle.value);
  let player3GuessEle = document.querySelector('#player3');
  // console.log('Player 3 Guess:', player3GuessEle.value);

  let player1LastEle = document.querySelector('#player1last');
  let player2LastEle = document.querySelector('#player2last');
  let player3LastEle = document.querySelector('#player3last');

  let player1LabelEle = document.querySelector('#player1label');
  let player2LabelEle = document.querySelector('#player2label');
  let player3LabelEle = document.querySelector('#player3label');

  let resetBtnEle = document.querySelector('#resetBtn');
  
  // Clean up DOM
  let guessesEle = document.querySelector("#totalGuesses");
  guessesEle.innerHTML = `${totalGuesses}`; // Display new guess count

  resetBtnEle.remove(); // remove Reset Button

  // Reset player 1 output
  player1LastEle.innerHTML = `No Guesses yet`;
  player1LabelEle.classList.remove('winner');
  player1LastEle.classList.remove('winner');
  // Reset player 2 output
  player2LastEle.innerHTML = `No Guesses yet`;
  player2LabelEle.classList.remove('winner');
  player2LastEle.classList.remove('winner');
  // Reset player 3 output
  player3LastEle.innerHTML = `No Guesses yet`;
  player3LabelEle.classList.remove('winner');
  player3LastEle.classList.remove('winner');
  
  
return;


}
