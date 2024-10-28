const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/MyExpenseTracker");
    console.log("Connection to MongoDB successful");
  } catch (err) {
    console.error("Error in connecting to MongoDB", err);
  }
}

connectToMongoDB();

require("./expense.model");
