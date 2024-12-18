const mongoose = require("mongoose");
require("dotenv").config();
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gqetjco.mongodb.net/Foodwebmern?retryWrites=true&w=majority`;

const mongoDB = async () => {
  mongoose.set("strictQuery", true);

  try {
    // Connect to MongoDB using await
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("connected");

    // Fetch the collections
    const fetchedData = await mongoose.connection.db
      .collection("dish-items")
      .find({})
      .toArray();

    const foodCategory = await mongoose.connection.db
      .collection("food-category")
      .find({})
      .toArray();

    // Set global variables
    global.dish_items = fetchedData;
    global.foodCategory = foodCategory;

/*     console.log(global.dish_items);
    console.log(global.foodCategory); */

  } catch (err) {
    console.log("error in db");
    console.log("--", err);
  }
};

module.exports = mongoDB;

