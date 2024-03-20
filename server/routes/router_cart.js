const express = require("express");
const router = express.Router();
// const { Sequelize, DataTypes } = require("sequelize");
// const { sequelize } = require("./api");
// const {  } = require("./api");

// const Carts = sequelize.define("carts", {
//   user_email: {
//     type: DataTypes.STRING,
//     set(user) {
//       this.setDataValue(user.email);
//     },
//   },
//   total: {
//     type: DataTypes.INTEGER,
//   },
// });

class Cart {
  constructor() {
    // Entryの大人、子供、学生、Event1、Event2の数量
    this.counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Entryの大人、子供、学生、Event1、Event2の価格
    this.prices = [30, 20, 10, 10, 5, 10, 5, 10, 5];
  }
}

/**
 * Our mechanism for saving users' baskets will be to simply assign them a basket using req.session, without any special authentication.
 */
router.use((req, res, next) => {
  console.log("Created Cart");
  // user is not recognized, assign a basket in req.session
  if (typeof req.session.cart === "undefined") {
    // TODO login
    req.session.cart = new Cart();
    req.session.total = 0;
  }
  next();
});

router.post("/purchace", (req, res) => {
  console.log("purchace");
  const reqCart = req.body.cart;
  const reqCounts = reqCart.counts;
  const reqPrices = reqCart.prices;
  const reqTotal = req.body.total;
  const reqUser = req.body.user;

  if (this.prices == reqPrices) {
    console.log("this price and req price is same. OK.");
  } else {
    // TODO
    // res.status(400).json({ message: "Invalid prices" });
    // return;
  }

  const total = totalAmount(reqCounts, reqPrices);
  if (total === reqTotal) {
    console.log("total amout is OK!");
  } else {
    res.status(400).json({ message: "Invalid total" });
    return;
  }

  // -- success --

  console.log("[purchace] user: " + reqUser.email + " bought " + total);

  // Carts.update({
  //   user_email: reqUser.email,
  //   total: total,
  // });
  res.status(200).json({
    message: "Success to buy: " + total,
    counts: reqCounts,
    prices: reqPrices,
  });
  return;
});

function totalAmount(counts, prices) {
  return counts.reduce(
    (_total, _count, _index) => _total + _count * prices[_index],
    0
  );
}

module.exports = {
  router,
};
