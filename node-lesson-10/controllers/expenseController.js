const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Expense = mongoose.model("Expense");

router.get("/", (req, res) => {
  // home page
});

router.get("/list", async (req, res) => {
  try {
    const docs = await Expense.find();
    res.send(docs);
  } catch (err) {
    console.log("Error in retrieving" + err);
    res.status(500).send("rror in retrieving");
  }
});
router.get("/total", async (req, res) => {
  try {
    const total = await Expense.aggregate([
      { $group: { _id: null, totalAmount: { $sum: "$Amount" } } },
    ]);

    const totalAmount = total.length > 0 ? total[0].totalAmount : 0;
    res.send({ totalAmount });
  } catch (err) {
    console.log("Error in retrieving total spend: " + err);
    res.status(500).send("Error retrieving total spend");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Expense.findById(id);
    if (!doc) {
      return res.status(404).send("Document not found");
    }
    res.send(doc);
  } catch (err) {
    console.log("Error in retrieving: " + err);
    res.status(500).send("Error in retrieving");
  }
});

router.post("/", (req, res) => {
  if (!req.params._id || req.params._id == "") {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

async function insertRecord(req, res) {
  try {
    const expenseObject = new Expense({
      expense: req.body.expense,
      amount: req.body.amount,
      date: req.body.date,
      notes: req.body.notes,
    });

    const savedExpense = await expenseObject.save();
    res.json(savedExpense);
  } catch (err) {
    console.log("Error during insert: " + err);
    res.status(500).send("Error during insert");
  }
}

async function updateRecord(req, res) {
  try {
    const updatedDoc = await Expense.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedDoc) {
      return res.status(404).send("Document not found");
    }
    res.redirect("/expense/list");
  } catch (err) {
    console.log("Error during update: " + err);
    res.status(500).send("Error during update");
  }
}

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedDoc = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedDoc) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({ message: "Document deleted successfully" });
  } catch (err) {
    console.log("Error during delete: " + err);
    res.status(500).json({ message: "Error during delete" });
  }
});

module.exports = router;
