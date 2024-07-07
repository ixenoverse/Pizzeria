const mongoose = require('mongoose')
const Ingredients = require('../models/Ingredients')
const Pizzas = require('../models/pizzas')

mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }

    console.log('MongoDB ready!')

    Ingredients.seedPizzas()
    Pizzas.seedPizzas()
  })

  db.on('error', err => console.log(`Database error: ${err}`))
}
