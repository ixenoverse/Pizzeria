let env = process.env.NODE_ENV || 'development'
const Ingredients = require('../server/models/Ingredients')
const Pizzas = require('../server/models/pizzas')

let settings = require('./config/settings')[env]

const app = require('express')()

require('./config/database')(settings)
require('./config/express')(app)

app.listen(settings.port)
console.log(`Server listening on port ${settings.port}...`)

//   http://localhost:3500/
app.get("/",(req,res) => {
    res.send("<h2>All necessary data is successfully imported. Proceed running Angular</h2>");
});

//    http://localhost:3500/ingredients
app.get('/ingredients',(req,res) => {
    Ingredients
    .find({}, {_id:0, tname:1, price:1, image:1 },(err, response) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(response);
        }
    })
})

//    http://localhost:3500/pizzas
app.get('/pizzas',(req,res) => {
    Pizzas
    .find({}, {_id:0, type: 1, price:1, name: 1, image:1, description:1, ingredients:1, topping:1},(err, response) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(response);
        }
    })
})
