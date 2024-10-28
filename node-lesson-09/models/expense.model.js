const mongoose = require("mongoose");

var expenseSchema = new mongoose.Schema({
  Expense: {
    type: String,
    required: "This field is require",
  },
  Amount: {
    type: Number,
    required: "This field is require",
  },
  Date: {
    type: String,
    required: "This field is require",
  },
  Notes: {
    type: String,
    required: "This field is require",
  },
});
mongoose.model("Expense", expenseSchema);
