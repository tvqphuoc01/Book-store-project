const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const randomstring = require('randomstring');
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser');
const app = express();
app.use(cookieParser(randomstring.generate()));


// Connect to MongoDB
require('dotenv').config();
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true});
// eslint-disable-next-line no-unused-vars
const db = mongoose.connection;

// Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// Passport congif
require('./conifg/passport')(passport);

// Partport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json()); // for parsing application/json
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// Routers
const loginRoute = require('./routers/login.router');
const signUpRoute = require('./routers/signUp.router');
const indexRoute = require('./routers/index.router');
// Set view engine
app.set('views', './views');
app.set('view engine', 'pug');

// Public File
app.use(express.static('style'));
app.use(express.static('images'));

app.use('/', indexRoute);

app.use('/logIn', loginRoute);

app.use('/signUp', signUpRoute);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
