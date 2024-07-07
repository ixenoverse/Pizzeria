const mongoose = require('mongoose')
  
let pizzaSchema = new mongoose.Schema({
    _id: Number,
    tname: String,
    price: Number,
    image: String
});

let Ingredients = mongoose.model('Ingredients', pizzaSchema)

module.exports = Ingredients
module.exports.seedPizzas = () => {
  Ingredients.find({}).then(ingredients  => {
    if (ingredients .length > 0) return

    const pizzasSeed = [{
        "_id": 101,
        "tname": "Pepperoni",
        "price": 110,
        "image": "https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg"
        },
        {
          "_id": 102,
          "tname": "Mushroom",
          "price": 35,
          "image": "https://thumb9.shutterstock.com/display_pic_with_logo/1207547/568114672/stock-photo-fresh-cultivated-button-mushrooms-and-twigs-of-parsley-in-the-wooden-basket-one-whole-mushroom-and-568114672.jpg"
        },
        {
          "_id": 103,
          "tname": "Black beans",
          "price": 45,
          "image": "https://thumb1.shutterstock.com/display_pic_with_logo/180783430/755093356/stock-photo-black-beans-grain-on-white-background-755093356.jpg"
        },
        {
          "_id": 104,
          "tname": "Black olive",
          "price": 50,
          "image": "https://thumb7.shutterstock.com/display_pic_with_logo/137002/244097551/stock-photo-black-cut-olive-rings-isolated-on-white-244097551.jpg"
        },
        {
          "_id": 105,
          "tname": "Green olive",
          "price": 50,
          "image": "https://thumb7.shutterstock.com/display_pic_with_logo/4526794/639321544/stock-photo-stuffed-olives-isolated-on-white-background-639321544.jpg"
        },
        {
          "_id": 106,
          "tname": "Jalapeno",
          "price": 45,
          "image": "https://thumb7.shutterstock.com/display_pic_with_logo/999701/250939984/stock-photo-sliced-green-jalapeno-peppers-on-white-background-250939984.jpg"
        },
        {
          "_id": 107,
          "tname": "Chicken",
          "price": 60,
          "image": "https://thumb7.shutterstock.com/display_pic_with_logo/371512/583587001/stock-photo-fresh-raw-chicken-isolated-on-white-583587001.jpg"
        },
        {
          "_id": 108,
          "tname": "Tomato",
          "price": 20,
          "image": "https://thumb1.shutterstock.com/display_pic_with_logo/721492/400195690/stock-photo-tomatoes-isolated-on-white-background-400195690.jpg"
        },
        {
          "_id": 119,
          "tname": "Red peprika",
          "price": 30,
          "image": "https://thumb9.shutterstock.com/display_pic_with_logo/676765/343609895/stock-photo-chili-pepper-isolated-on-a-white-background-343609895.jpg"
        },
        {
          "_id": 110,
          "tname": "Paneer",
          "price": 45,
          "image": "https://thumb7.shutterstock.com/display_pic_with_logo/605002/195341264/stock-photo-piece-of-cheese-or-paneer-isolated-on-a-white-background-195341264.jpg"
        },
        {
          "_id": 111,
          "tname": "Fried Onion",
          "price": 18,
          "image": "https://thumb1.shutterstock.com/display_pic_with_logo/152950/630261116/stock-photo-delicious-crispy-fried-onion-rings-isolated-on-white-630261116.jpg"
        },
        {
          "_id": 112,
          "tname": "Capsicum",
          "price": 15,
          "image": "https://thumb7.shutterstock.com/display_pic_with_logo/259963/259963,1235208469,1/stock-photo-vegetables-bulgarian-pepper-on-a-white-background-isolated-25335661.jpg"
        },
        {
          "_id": 114,
          "tname": "Sweet corn",
          "price": 38,
          "image": "https://thumb7.shutterstock.com/display_pic_with_logo/3102608/706329457/stock-photo-sweet-corn-in-wooden-bowl-and-spoon-isolated-on-white-background-706329457.jpg"
        }
      ]
      
      Ingredients
      .create(pizzasSeed)
      .then(() => console.log('Ingredients data is successfully added to Mongo.'))
      .catch((error) => console.log(error))

  })
}