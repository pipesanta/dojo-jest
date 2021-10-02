"use strict";

const rootRoute = "books";
const BookControler = require("../controllers/Books");


module.exports = {
  applyRoutes: (app) => {
    app.route(`/${rootRoute}/search`).get(BookControler.findBook.bind(this) ); 
    app.route(`/${rootRoute}/findOneById`).get(BookControler.findOneById.bind(this) ); 
    app.route(`/${rootRoute}/updateOneById`).post(BookControler.updateOneById.bind(this) ); 
    app.route(`/${rootRoute}/insertOne`).post(BookControler.insertOne.bind(this));
    app.route(`/${rootRoute}/deleteOne`).post(BookControler.deleteOne.bind(this));
  }
  
};
