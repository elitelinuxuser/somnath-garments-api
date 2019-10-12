const express = require("express");
const router = express.Router();
const Order = require("../../models/Order");
const auth = require("./auth");

router.get("/all", auth, async (req, res) => {
  Order.find({})
    .populate("company")
    .then(order => {
      return res.json(order);
    });
});

router.post("/add", auth, async (req, res) => {
  const orderDetails = req.body;
  console.log(orderDetails);
  const order = new Order(orderDetails);
  order.save((err, result) => {
    if (err) console.log(err);
    else res.json(result);
  });
});

module.exports = router;
