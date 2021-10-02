"use strict";

const rootRoute = "game";
const BreakCodeControler = require("../controllers/breakCoder");


module.exports = {
  applyRoutes: (app) => {
    app.route(`/${rootRoute}/test`).get(BreakCodeControler.testController.bind(this));
  }

};
