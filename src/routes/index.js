const Controller = require('../controllers');

function route(app) {
  app.get('/', Controller.home);
  app.get('/auth', Controller.auth);
}
module.exports = route;
