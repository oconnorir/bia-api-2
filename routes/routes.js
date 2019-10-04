// ^^^^^^^^^^^^^^^^^^^^^^^^ CONTROLLERS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
let itemsController     = require('../controllers/items')


module.exports = function (app) {

  // =============================================== //
  // ================== ENDPOINTS ================== //
  // =============================================== //

  // ========= ENDPOINTS FOR pug TEMPLATES ========= //
  // =========== HOME/INDEX =========== //
  app.route('/')
    .get(function (req, res, next) {
      let data = {greeting: 'Hello, ...', one:1}
      res.json(data)
    })

  app.route('/items')
    .get(itemsController.getItems)


} // =================================================== //
  // ================== END OF EXPORT ================== //
  // =================================================== //



