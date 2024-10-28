const express = require("express");
require("./models/db");
const bodyParser = require("body-parser");
const expenseController = require("./controllers/expenseController");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send(
    `<h2> Karyna's expense dashboard </h2> <h3>Clisk here to get access to the <b><a href="/expense/list">Database</a></b></h3>`
  );
});
app.use("/expense", expenseController);

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
