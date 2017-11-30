const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
require('./model/user');
require('./services/passport'); //as nothing is returned but only want to execute this file.So nothing to store in a variable

//to connect to the mongoDb using URI saved in the keys object
mongoose.connect(keys.mongoUri);

const app = express();

//to parse the req body and assign it to req.body
app.use(bodyParser.json());

/* maxAge - tells how long the cookie can exist in a browser before it expires
* here the maxAge is 30 days
* key - encryption key for cookie*/
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
authRoutes(app); // for handling different routes
billingRoutes(app); //for handling routes related to billing

const PORT = process.env.PORT || 5000;

app.listen(PORT);
