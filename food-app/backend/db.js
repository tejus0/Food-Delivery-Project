const mongoose = require("mongoose");
const URI =
  // "mongodb://FoodWebAdmin:Kunal1234@ac-bxeki-shard-00-00.gqetjco.mongodb.net:27017,ac-tkbxeki-shard-00-01.gqetjco.mongodb.net:27017,ac-tkbxeki-shard-00-02.gqetjco.mongodb.net:27017/Foodwebmern?ssl=true&replicaSet=atlas-hbbbu5-shard-0&authSource=admin&retryWrites=true&w=majority"
  "mongodb+srv://FoodWebAdmin:Kunal1234@cluster0.gqetjco.mongodb.net/Foodwebmern?retryWrites=true&w=majority";
const mongoDB = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect(URI, { useNewUrlParser: true , useUnifiedTopology:true, useCreateIndex:true}, async (err, res) => {
    if (err) {
      console.log("--", err);
    } else {
      console.log("connected");
      const fetchedData = await mongoose.connection.db.collection("dish-items");
      fetchedData.find({}).toArray(async function (err, data) {
        const foodCategory= await mongoose.connection.db.collection("food-category");
        foodCategory.find({}).toArray(function(err,catData){

          if (err) console.log(err);
          else {
              global.dish_items = data;
              global.foodCategory=catData;
            //console.log(global.dish_items);
            }
          })
      });
    }
  });
};

module.exports = mongoDB;
