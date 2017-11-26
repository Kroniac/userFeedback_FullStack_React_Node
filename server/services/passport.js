const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const users = mongoose.model('user');

//for getting google user info like its id and store in it mongodb
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      users.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //already have a record with this userID, no need to create a new one
          done(null, existingUser); // to tell the passportjs that the user is there and it should resume the auth process
        } else {
          //no record with this userID, need to make a new one
          new users({ googleId: profile.id })
            .save() //to make and save recored with userID: existingUser
            .then(user => done(null, user)); //to tell the passportjs that the user is created and it should resume the auth process
        }
      });
    }
  )
);
