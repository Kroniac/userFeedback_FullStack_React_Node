const express = require('express');
require('./services/passport'); //as nothing is returned but only want to execute this file.So nothing to store in a variable
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoUri);

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
