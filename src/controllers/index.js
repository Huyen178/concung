class Controller {
  async home(req, res) {
    res.render('home');
  }
  async auth(req, res) {
    res.render('auth', { layout: false });
  }
  
}
module.exports = new Controller();
