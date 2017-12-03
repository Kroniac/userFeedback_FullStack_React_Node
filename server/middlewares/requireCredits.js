//to check if the current user has credits to send a survey or not

module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res
      .status(403)
      .send({ error: "You don't have credits to perform the required action" });
  }
  next();
};
