console.log('hello world');

function onReady() {
  axios({
    method: 'GET',
    url: '/guesses',
  })
    .then((response) => {
      // render / display
      render(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error('ERROR:', error);
    });
}

function render(guessesData) {
  const tableBodyElement = document.querySelector('#playerResults');

  tableBodyElement.innerHTML = '';

  // LOOP
  for (let i = 0; i < guessesData.guesses.length; i++) {
    const item = guessesData.guesses[i];
    let classValue = 'normal';

    if (item.result === 'WINNER!!!') {
      classValue = 'winner';
    }

    tableBodyElement.innerHTML += `
      <tr class="${classValue}">
        <td>Player ${i + 1}</td>
        <td>${item.number}</td>
        <td>${item.result}</td>
        <td>${guessesData.rounds}</td>
      </tr>
    `;
  }
}

onReady();
