const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log('log from server side: ', req.user);
      res.redirect('/surveys');
    }
  );

  /* req.logout() takes the cookie and kills the id in there, thus making the user no longer authenticated*/
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
