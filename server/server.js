// Remember to `npm init` and `npm install express`!
// Add server code here. This will be the same as the code from lecture.
const express = require('express');

const app = express();
const PORT = 5001;

// server up client statics
app.use(express.static('server/public'));

// needed to send data to server
app.use(express.json());

// function to generate rando number
let randomNum = getRandomIntInclusive(1, 25);

//Generate random number
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// storage for guesses
let guesses = [
  // { guess: 0, result: ''}
  { number: 1, result: 'Something' },
  { number: 10, result: 'Something' },
];
let roundCounter = 0;

function checkGuesses(guessesList) {
  const newData = [];
  for (let guess of guessesList) {
    let newItem = {};

    if (guess.number > randomNum) {
      newItem = { number: guess.number, result: 'Too High' };
    } else if (guess.number < randomNum) {
      newItem = { number: guess.number, result: 'Too Low' };
    } else {
      newItem = { number: guess.number, result: 'WINNER!!!' };
    }

    newData.push(newItem);
  }

  return newData;
}

app.get('/guesses', (req, res) => {
  // logic for check
  // const newList = checkGuesses(guesses);
  // guesses = newList;
  res.send({
    rounds: roundCounter,
    guesses: guesses,
  });
});

// app.get('/rounds', (req, res) => {
//   res.send({ rounds: roundCounter });
// });

app.post('/guesses', (req, res) => {
  // add to data
  const guessData = req.body;

  const newList = checkGuesses(guessData.guesses);
  guesses = newList;
  // guesses = guessData.guesses;
  roundCounter += 1;

  res.sendStatus(201);
});

// run server app
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
