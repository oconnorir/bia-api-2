// ^^^^^^^^^ REQUIRED MODULES ^^^^^^^^^ //
const mongoose     = require('mongoose')

// ^^^^^^^^^^^ ITEMS SCHEMA ^^^^^^^^^^^ //
let ItemSchema = new mongoose.Schema({
  category:   { type: String },
  item:       { type: String },
})

module.exports = mongoose.model('items', ItemSchema)
