const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Set up port and require models for syncing
const PORT = process.env.PORT || 3000;

// sync database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//creating express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//require routes
app.use(require("./routes/apiroutes.js"));

// HTML routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"));
});
app.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "public/stats.html"));
});


// app listening 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
