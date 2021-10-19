const express = require('express');
const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
require('dotenv').config();
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true});
// eslint-disable-next-line no-unused-vars
const db = mongoose.connection;

app.use(express.json()); // for parsing application/json
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// Routers
const loginRoute = require('./routers/login.router');
const signUpRoute = require('./routers/signUp.router');
// Set view engine
app.set('views', './views');
app.set('view engine', 'pug');

// Public File
app.use(express.static('style'));
app.use(express.static('images'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/logIn', loginRoute);

app.use('/signUp', signUpRoute);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
