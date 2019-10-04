// ================== REQUIRED MODULES ==================//
const bodyParser        = require('body-parser')
const express           = require('express')
const logger            = require('morgan')
const mongoose          = require('mongoose')
const path              = require('path')
const pug               = require('pug')
// ========= CONNECT TO auth ========= //
const MONGO_PORT  = 27017
const URI         = `mongodb://localhost:${MONGO_PORT}/grocery_list`
const DB_URI      = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : URI
mongoose.connect(DB_URI, {useNewUrlParser: true})
// ========= CREATE APPLICATION ========= //
const app               = express()
// ========= SET VIEW ENGINE ========= //
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// ========= ACCESS CONTROL ========= //
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type,X-Parse-Session-Token')
  next()
})
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
// ========= SERVE UP STATIC FILES ========= //
app.use(express.static(__dirname + '/public'))
// ================== ROUTES ================== //
// LOAD ROUTES AND PASS IN APP AND FULLY CONFIGURED PASSPORT
require('./routes/routes.js')(app)
// SET PORT
let port = process.env.PORT || 3003
app.listen(port, (req,res) => {
  let right_now = new Date()
  console.warn('\n' + right_now + '\n GROCERY LIST SERVER RUNNING ON PORT : ' + port + '\n')
})
