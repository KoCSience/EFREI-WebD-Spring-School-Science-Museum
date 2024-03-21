const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./api");

class Basket {
  constructor() {
    // this.createdAt = new Date();
    // this.updatedAt = new Date();
    this.articles = [];

    // Entryの大人、子供、学生、Event1、Event2の数量
    this.counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Entryの大人、子供、学生、Event1、Event2の価格
    this.prices = [30, 20, 10, 10, 5, 10, 5, 10, 5];
  }
}

const Article = sequelize.define("Articles", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  articleId: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.id;
    },
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  createdAt: false,
  updatedAt: false,
});

(async () => {
  await Article.sync({ force: true }); // will delete old one.
  // Table created
  // initialize
  articles.forEach((article) => {
    Article.create(article);
  });

  // const found_articles = await Article.findAll();
  // console.log("articles:", found_articles);
})();

/**
 * In this file you'll find examples of GET, POST, PUT and DELETE requests.
 * These requests concern the addition or deletion of items on the site.
 * Your objective is, by learning from the examples in this file, to create the API for the user's shopping cart.
 */

/**
 * Our mechanism for saving users' baskets will be to simply assign them a basket using req.session, without any special authentication.
 */
router.use((req, res, next) => {
  console.log("TEST NO BUSKET");
  // user is not recognized, assign a basket in req.session
  if (typeof req.session.basket === "undefined") {
    req.session.basket = new Basket();
  }
  next();
});

/*
 * This route must return the user's shopping cart, thanks to req.session
 */
router.get("/basket", (req, res) => {
  //send basket to user
  res.status(200).json(req.session.basket);
  return;
});

/*
 * This route adds an item to the shopping cart, then returns the modified cart to the user.
 * The body must contain the item id, as well as the desired quantity.
 */
router.post("/basket", (req, res) => {
  var basket = req.session.basket.articles;
  const id = parseInt(req.body.id);
  const quantite = parseInt(req.body.quantite);

  //quantity validity
  if (!Number.isInteger(quantite) || isNaN(quantite) || quantite < 1) {
    //send failure message to user
    res
      .status(400)
      .json({ message: "The quantity must be a strictly positive integer" });
    return;
  }

  //check the existence of the article on the site
  const article = articles.find((a) => a.id === id);
  if (!article) {
    //send failure message to user
    res.status(404).json({ message: "the article " + id + " does not exist" });
    return;
  }

  //check existence of item in basket
  const articleExistant = basket.find(
    (articleBasket) => articleBasket.article.id === id
  );
  if (articleExistant) {
    //send failure message to user
    res.status(400).json({ message: "the article " + id + " Already exist" });
    return;
  }

  //create a basket item object
  const articleBasket = { article: article, quantite: quantite };

  //add the itemCart instance to the shopping cart
  basket.push(articleBasket);

  //send the added item to the user
  res.status(201).json(articleBasket);
  return;
});

/*
 * This route is used to confirm a shopping cart, by receiving the user's first and last name.
 * The basket is then deleted using req.session.destroy()
 */
router.post("/basket/pay", (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;

  //input control for first and last name
  if (
    typeof nom !== "string" ||
    nom === "" ||
    typeof prenom !== "string" ||
    prenom === ""
  ) {
    //send failure message to user
    res
      .status(400)
      .json({ message: "Invalid format or content of first or last name" });
    return;
  }

  //empty the basket
  req.session.destroy();

  //send success message to user
  res
    .status(200)
    .json({ message: "Merci " + prenom + " " + nom + " " + "For your buy" });
  return;
});

/*
 * This route is used to change the quantity of an item in the shopping cart.
 * The body must contain the desired quantity
 */
router.put("/basket/:articleId", (req, res) => {
  // var basket = req.session.basket.articles;
  // const id = parseInt(req.params.articleId);
  // const quantite = parseInt(req.body.quantite);

  //quantity validity
  if (!Number.isInteger(quantite) || isNaN(quantite) || quantite < 1) {
    //send failure message to user
    res
      .status(400)
      .json({ message: "The quantity must be a strictly positive integer " });
    return;
  }

  //modify item quantity
  basket.find(function (articleBasket) {
    if (articleBasket.article.id === id) {
      //input quantity is the same as the basket quantity
      if (articleBasket.quantite == quantite) {
        //send message(202 accepted) to user
        res.status(202).json({
          message: "The input quantity is the same as the basket quantity",
        });
        return;
      }
      articleBasket.quantite = quantite;

      //send success message to user
      res.status(200).json({ basket });
      return;
    }
  });

  //send failure message to user
  res.status(404).json({ message: "Article " + id + " does not exist " });
  return;
});

/*
 * This route deletes an item from the basket
 */
router.delete("/basket/:articleId", (req, res) => {
  var basket = req.session.basket.articles;
  const id = parseInt(req.params.articleId);
  const index = basket.findIndex(
    (articleBasket) => articleBasket.article.id === id
  );
  //index = -1 if condition not satisfied

  //index validity
  if (index == -1) {
    //send failure message to user
    res.status(404).json({ message: "article " + id + " does not exist " });
    return;
  }

  //remove item from basket
  basket.splice(index, 1);

  //send success message to user
  res.status(200).json({ message: "Succeed in deleting the article " + id });
  return;
});

/**
 * This route sends all the articles on the site
 */
router.get("/articles", (req, res) => {
  try {
    //retrieve all items in the database
    sequelize.query("SELECT * FROM articles").then(([results, metadata]) => {
      //envoyer les articles
      res.status(200).json(results);
      return;
    });
  } catch (error) {
    //send failure message to user
    res.status(400).json({ error: "Impossible of getting all articles" });
    return;
  }
});

/**
 * This route creates an article.
 * WARNING: in a real site, it should be authenticated and validate that the user is authorized.
 * NOTE: when the server is restarted, the added article disappears.
 * If we wanted to persist the information, we'd use a DB (mysql, etc.).
 */
router.post("/article", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;
  const price = parseInt(req.body.price);

  // checking the validity of input data
  if (
    typeof name !== "string" ||
    name === "" ||
    typeof description !== "string" ||
    description === "" ||
    typeof image !== "string" ||
    image === "" ||
    isNaN(price) ||
    price <= 0
  ) {
    res.status(400).json({ message: "bad request" });
    return;
  }

  try {
    //insert an article in the database
    sequelize
      .query(
        "INSERT INTO articles (name, description, price, image) value ( '" +
          name +
          "','" +
          description +
          "','" +
          price +
          "','" +
          image +
          "');"
      )
      .then(([result, metadata]) => {
        const id = result; //article id
        console.log(result); //display the added article on the console
        res.status(200).json({
          //send article on front-end
          id_article: id,
          name: name,
          description: description,
          image: image,
          price: price,
        });
        return;
      });
  } catch (error) {
    //send failure message to user
    res.status(400).json({ error: "Impossible to retrieve all items" });
    return;
  }
});

/**
 *This function validates that the item requested by the user
 * is valid. It is applied to routes:
 * GET /article/:articleId
 * PUT /article/:articleId
 * DELETE /article/:articleId
 * As these three routes have a similar behavior, their common functionalities are grouped together in a middleware package
 */
function parseArticle(req, res, next) {
  const articleId = parseInt(req.params.articleId);

  // if articleId is not a number (NaN = Not A Number), then we stop
  if (isNaN(articleId)) {
    res.status(400).json({ message: "articleId should be a number" });
    return;
  }
  // we assign req.articleId to use it in all routes that need it
  req.articleId = articleId;

  const article = articles.find((a) => a.id === req.articleId);
  if (!article) {
    res
      .status(404)
      .json({ message: "article " + articleId + " does not exist" });
    return;
  }
  // req.article is assigned for use on all routes that require it
  req.article = article;
  next();
}

router
  .route("/article/:articleId")
  /**
   * This route sends a special item
   */
  .get(parseArticle, (req, res) => {
    // req.article exists thanks to the parseArticle middleware
    res.status(200).json(req.article);
    return;
  })

  /**
   * This route modifies an article.
   * WARNING: in a real site, it should be authenticated and validate that the user is authorized.
   * NOTE: when the server is restarted, the article modification disappears.
   * If we wanted to persist the information, we'd use a DB (mysql, etc.).
   */
  .put(parseArticle, (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const image = req.body.image;
    const price = parseInt(req.body.price);

    req.article.name = name;
    req.article.description = description;
    req.article.image = image;
    req.article.price = price;
    res.send();
  })

  .delete(parseArticle, (req, res) => {
    const index = articles.findIndex((a) => a.id === req.articleId);
    articles.splice(index, 1); // remove the article from the array
    res.send();
  });
