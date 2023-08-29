const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = mongoose.connect("mongodb://127.0.0.1:27017/calloff");
const port = process.env.PORT || 8080;
const CallOff = require("./models/callOffModel");
const callOffModel = require("./models/callOffModel");
const callOffRouter = require("./routes/callOffRouter")(CallOff);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", callOffRouter);

// app.get("/", (req, res) => {
//   res.send("Welcome to my Nodemon API!");
// });

app.get("api/calloffs", async (req, res) => {
  try {
    const calloffs = await callOffModel.find();
    res.json(calloffs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
    // DELETE endpoint
  app.delete('api/callOffs/:id', async (req, res) => {
    const id = req.params.id;

    try {
      const result = await collection.deleteOne({ _id: id });
      if (result.deletedCount === 1) {
        res.status(200).send('Successfully deleted record.');
      } else {
        res.status(404).send('Record not found.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error.');
    }
  });
app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
