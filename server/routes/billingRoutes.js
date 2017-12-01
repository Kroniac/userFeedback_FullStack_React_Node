const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    
    if(!req.user){
        return res.status(401).send({error: 'must be Logged In for this reques'})
    }
    //to build the credit card
    const charge = await stripe.charges.create({
      amount: 800,
      currency: 'usd',
      description: '$5 for 5 creadits',
      source: req.body.id
    });

    // update the user model credits
    req.user.credits += 5;

    //save the newly updated user model
    const user = await req.user.save();

    res.send(user);
  });
};
