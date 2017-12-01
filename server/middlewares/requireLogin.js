module.exports = (req, res, next) => {
  //if user is not found
  if (!req.user) {
    return res.status(401).send({ error: 'You Must Log In for this request' });
  }
  //if user found then continue the request chain to next middleware or the route handler
  next();
};
