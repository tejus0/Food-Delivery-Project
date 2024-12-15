const express = require("express");
const router = express.Router();

router.get("/foodData", (req, res) => {
  try {
    // console.log(global.dish_items);
    res.send([global.dish_items,foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
