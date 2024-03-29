const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const { router: apiRouter } = require("./routes/api.js");
const { router: cartRouter } = require("./routes/router_cart.js");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    cookie: {
      //fixer la session
      path: "/",
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
    secret: "grehjznejzkhgjrez",
    saveUninitialized: false,
    resave: false,
  })
);

app.use(express.static(path.join(__dirname, "../vue-project/dist"))); // frontend
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../vue-project/dist/index.html"));
});
app.get("favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "../vue-project/dist/favicon.ico"));
});

app.use("/api/", apiRouter);
app.use("/api/cart", cartRouter);

module.exports = app;
