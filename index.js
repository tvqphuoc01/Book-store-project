const express = require('express');
const app = express();
const port = 3000;

// Set view engine
app.set('views', './views');
app.set('view engine', 'pug');

// Public File
app.use(express.static('style'));
app.use(express.static('images'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/logIn', (req, res) => {
  res.render('logIn');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
