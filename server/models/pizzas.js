const mongoose = require('mongoose')
  
let pizzaSchema = new mongoose.Schema({
    _id: String,
    type: String,
    price: Number,
    name: String,
    image: String,
    description: String,
    ingredients: Array,
    topping: Array,
});

let Pizzas = mongoose.model('Pizzas', pizzaSchema)

module.exports = Pizzas
module.exports.seedPizzas = () => {
  Pizzas.find({}).then(pizzas  => {
    if (pizzas .length > 0) return

    const pizzasSeed = [{
        "_id": "0001",
        "type": "veg",
        "price": 290,
        "name": "Paneer Tikka",
        "image": "https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg",
        "description": "This is popular italian pizza flavoured with marinated tikka sauce and paneer",
        "ingredients": ["dough/flour", "pizza saucce", "pizza sauce seasoning", "cheese"],
        "topping": ["Paneer", "Fried Onion", "Green olive", "Capsicum", "Red peprika"]
      },
        {
          "_id": "0002",
          "type": "nonveg",
          "price": 350,
          "name": "Chicken Italiaona",
          "image": "https://thumb7.shutterstock.com/display_pic_with_logo/96886/96886,1274350207,7/stock-photo-pizza-53553874.jpg",
          "description": "This is popular italian pizza flavoured with light sugary taste and creamy touch",
          "ingredients": ["deep dish pizza mix", "pizza saucce", "pizza sauce seasoning", "cheese", "sugar and cinnomon blend", "plain butter"],
          "topping": ["Pepperoni", "Chicken Sausage", "Mushroom", "Capsicum", "Black beans"]
        },
        {
          "_id": "0003",
          "type": "veg",
          "price": "310",
          "name": "Veggie Supreme",
          "image": "https://thumb1.shutterstock.com/display_pic_with_logo/1003451/770556520/stock-photo-hot-pizza-with-pepperoni-sausage-on-a-dark-background-with-copy-space-pizza-with-mushrooms-770556520.jpg",
          "description": "This is popular italian pizza flavoured with crushed garlic, with multiple herbs topped up with sweet corn",
          "ingredients": ["deep dish pizza mix", "pizza saucce", "pizza sauce seasoning", "cheese", "garlic herbs", "flavored butter"],
          "topping": ["Fried Onion", "Sweet corn", "Mushroom", "Capsicum", "Black olive "]
        },
        {
          "_id": "0004",
          "type": "nonveg",
          "price": "400",
          "name": "Tripple Chicken Feast",
          "image": "https://thumb9.shutterstock.com/display_pic_with_logo/2793292/332497832/stock-photo-mixture-pizza-italian-food-332497832.jpg",
          "description": "This is popular italian pizza flavoured with unique greek dressing topped up with keema and meat ball",
          "ingredients": ["low carb pizza dough", "pizza saucce", "pizza sauce seasoning", "cheese", "greek dressing", "cajun"],
          "topping": ["Chicken keema", "Fried Onion", "Chicken Meat ball", "Capsicum", "Sweet corn"]
        },
        {
          "_id": "0005",
          "type": "nonveg",
          "price": "625",
          "name": "Ultimate Chicken",
          "image": "https://thumb7.shutterstock.com/display_pic_with_logo/2793292/246331354/stock-photo-pizza-margherita-italian-246331354.jpg",
          "description": "This is popular italian pizza flavoured with BBA sauce, flavored butter. it has spongy base which gives unique taste with multiple toppings",
          "ingredients": ["deep dish pizza mix", "pizza saucce", "pizza sauce seasoning", "cheese", "BBQ sauce", "cajun", "flavored butter"],
          "topping": ["Pepperoni", "Fried Onion", "Chicken Meat ball", "Chicken Sausage", "Chicken keema"]
        },
        {
          "_id": "0006",
          "type": "nonveg",
          "price": "400",
          "name": "Tripple Chicken Feast",
          "image": "https://thumb9.shutterstock.com/display_pic_with_logo/2793292/332497832/stock-photo-mixture-pizza-italian-food-332497832.jpg",
          "description": "This is popular italian pizza flavoured with unique greek dressing topped up with keema and meat ball",
          "ingredients": ["low carb pizza dough", "pizza saucce", "pizza sauce seasoning", "cheese", "greek dressing", "cajun"],
          "topping": ["Chicken keema", "Fried Onion", "Chicken Meat ball", "Capsicum", "Sweet corn"]
        }
      ]      
      
      Pizzas
      .create(pizzasSeed)
      .then(() => console.log('Pizzas data is successfully Added to Mongo.'))
      .catch((error) => console.log(error))

  })
}