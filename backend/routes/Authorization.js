"use strict";

const rootRoute = "auth";
const authController = require("../controllers/Auth");

module.exports = {
  applyRoutes: (app) => {
    app.route(`/${rootRoute}/login`).post(authController.login); 
    app.route(`/${rootRoute}/logout`).post(authController.logout);
  }
  
};
