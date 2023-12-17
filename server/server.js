// Remember to `npm init` and `npm install express`!
// Add server code here. This will be the same as the code from lecture.

const express = require('express');
const app = express();
const PORT = 5001;

let randomNumber = generateRandomNumber(1, 25);

app.use(express.json());

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// payload variables
let guessData = [];
let guessResults = [];

// POST Routes
app.post('/guess-data', (req, res) => {
  console.log('/guess-data POST callback', req.body);


  //clear guessData
  guessData =[];
  for (let item of req.body) {
    guessData.push(item);
//    console.log('item', item);
  }
  console.log('Guess:', guessData);
  // clear guessResults
  guessResults = [];
  
  // evaluate each guess
  for (let guess of guessData) {
    if (guess.guess > randomNumber) {
      guessResults.push('Too High');
    } else if (guess.guess < randomNumber) {
      guessResults.push('Too Low');
    } else {
      guessResults.push('Winner!');
    } 
    console.log('guessData:', guessData);
    console.log('guessResults',guessResults);
  }




  res.sendStatus(201);

})
app.post('/reset-game', (req, res) => {
  // reset random Number
  randomNumber = generateRandomNumber(1, 25);
  console.log('Resetting game, new randomNumber:', randomNumber);
  res.sendStatus(201);
});


// GET Routes
app.get('/game-results', (req, res) => {
  res.send([guessData, guessResults])
});


// Start up our server
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

// Generate random number function
function generateRandomNumber (min, max) {
  console.log('In generater random number function');
  min = Math.ceil(min);
  max = Math.floor(max);
  let result =  Math.floor(Math.random() * (max - min) + min);

  console.log(result);
  return result;
}

