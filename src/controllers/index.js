
class Controller {
  async home(req, res) {
    res.render('home');
  }
}
module.exports = new Controller();
