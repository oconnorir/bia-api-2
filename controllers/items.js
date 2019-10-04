// ^^^^^^^^^ REQUIRED MODULES ^^^^^^^^^ //
let Items = require('../models/items')

exports.getItems = (req, res) => {
  Items.find({}, (err, items) => {
    if (err) {console.error('ERROR : \n', err)}
    res.json(items)
  })
}
