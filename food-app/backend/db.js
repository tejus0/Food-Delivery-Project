const mongoose = require("mongoose");
require("dotenv").config();
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gqetjco.mongodb.net/Foodwebmern?retryWrites=true&w=majority`;

const mongoDB = async () => {
  mongoose.set("strictQuery", true);
  
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    
    console.log("connected");

    // Fetch dish items and food category in parallel
    const [dishData, foodCategoryData] = await Promise.all([
      mongoose.connection.db.collection("dish-items").find({}).toArray(),
      mongoose.connection.db.collection("food-category").find({}).toArray(),
    ]);

    // Set global variables after fetching data
    global.dish_items = dishData;
    global.foodCategory = foodCategoryData;
    
    console.log(global.dish_items);
    console.log(global.foodCategory);

  } catch (err) {
    console.log("error in db");
    console.log("--", err);
  }
};

module.exports = mongoDB;
