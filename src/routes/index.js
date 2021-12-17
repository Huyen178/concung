const Controller = require('../controllers');

function route(app) {
  app.get('/', Controller.home);
}
module.exports = route;
