// Remember to `npm init` and `npm install express`!
// Add server code here. This will be the same as the code from lecture.
const express = require('express');

const app = express();
const PORT = 5001;

// server up client statics
app.use(express.static('server/public'));

// run server app
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
