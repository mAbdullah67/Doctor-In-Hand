const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;
       console.log('amount ',amount)
    if (!amount) {
      return res.status(400).send("Amount is required");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'pkr',
      payment_method_types: ['card'],
    });

    return res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return res.status(500).send("Unable to create payment intent");
  }
};

module.exports = {
  createPaymentIntent,
};
