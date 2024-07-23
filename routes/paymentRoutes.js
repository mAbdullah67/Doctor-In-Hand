const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
    console.log("process.env.STRIPE_SECRET_KEY ",process.env.STRIPE_SECRET_KEY)
    const usd = (amount / 3).toFixed(0);
    console.log("amount ", +usd)
      const paymentIntent = await stripe.paymentIntents.create({
      amount:usd,
      currency: "usd",
    });
     console.log("done ",paymentIntent.client_secret)
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
