const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const useBcrypt = require("sequelize-bcrypt");
const articles = require("../data/articles.js");
// const dbuser = require("./dbuser.js");
const utils = require("../utils.js");
const saltRounds = 10;

// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize("test", dbuser.user, dbuser.password, {
//   dialect: "mysql",
//   host: "localhost",
// });
// try {
//   sequelize.authenticate();
//   console.log("Connected to the data base !");
// } catch (error) {
//   console.error("Unable to connect, next error :", error);
// }

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
});

const User = sequelize.define(
  "users",
  {
    id_user: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.id;
      },
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

useBcrypt(User);

/*
    User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
    User.sync({ force: true }) - This creates the table, dropping it first if it already existed
    User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
*/

(async () => {
  await User.sync();
  // Table created
  User.create({
    email: "email@jp",
    password: "a",
  });

  const users = await User.findAll();
  users.forEach((user) => {
    console.log("user:", user.email, user.password);
  });
})();

/**
 * This route allows users to connect
 */
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("login post");

  try {
    const result = await User.findOne({
      where: { email: email },
    });
    if (result === null) {
      //verify user existence
      console.log("False : user does not exist");
      res.status(404).json({ message: "False : user does not exist" });
      return;
    }
    const user = result; //get user, non null
    // if (user.actif == 0) {
    //   //active user
    //   console.log("User is not active");
    //   res.status(401).json({ message: "User is not active" });
    //   return;
    // }

    if (user.authenticate(password)) {
      // login success
      req.session.userId = user.id_user; //user login in session
      res.status(201).json({
        id_user: user.id_user,
        email: user.email,
      });
      return;
    } else {
      //verify password
      console.log("User password is not correct.");
      res.status(401).json({ message: "User password is not correct." });
      return;
    }
  } catch (error) {
    res.status(400).json({ error: "login failed" });
    return;
  }
});

router.get("/login", (req, res) => {
  console.log("get router login");
});

// TODO: 作成中
// TODO: password to be as hash
/**
 * This route allows users to connect
 */
router.post("/signup", async (req, res) => {
  console.log("signup post");
  const email = req.body.email;
  const password = req.body.password;

  (async () => {
    User.sync();
    // Table created
    User.create({
      email: email,
      password: password,
    }); // password will be hased by sequelize-bcrypt.

    // TODO
    const users = await User.findAll();
    users.forEach((user) => {
      console.log("user:", user.email, user.password);
    });
  })();
});

/**
 * This route is used to check the user's connection status
 */
// not using
router.get("/connecion", (req, res) => {
  //if the user is not logged in
  if (utils.isNullOrUndefined(req.session.userId)) {
    console.log("user is not connected");
    return;
  }
  console.log("connection get", req.session.userId);

  try {
    sequelize
      .query(
        //retrieve user's email address
        "SELECT * FROM users WHERE id_user = :id_user",
        {
          replacements: { id_user: req.session.userId },
        }
      )
      .then(([result, metadata]) => {
        if (result.length == 0) {
          //verify user existence
          console.log("Fasle :user does not exist");
          res.status(404).json({ message: "Fasle : user does not exist" });
          return;
        }
        const user = result[0]; //get user
        res.status(200).json({
          //send user information to front-end
          id_user: user.id_user,
          email: user.email,
        });
        return;
      });
  } catch (error) {
    //send failure message to user
    res.status(400).json({ error: "Unable to find user" });
    return;
  }
});

/**
 * This route allows the user to disconnect
 */
router.get("/disconnecion", (req, res) => {
  //if the user is not logged in
  if (typeof req.session.userId != "undefined") {
    //free session to disconnect
    req.session.destroy();

    //send success message to user
    res.status(200).json({ message: "deconneted" });
    return;
  }
  //send error message to user
  res.status(400).json({ message: "User not logged in" });
  return;
});

module.exports = {
  router,
  sequelize,
};
