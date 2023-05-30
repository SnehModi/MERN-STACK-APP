require("dotenv").config();

// Package Import
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes Import
const workoutRoutes = require("./routes/workout");

const app = express();

// MiddleWares
app.use(express.json());
app.use(cors());

// Routes Gateway
app.use("/api/workouts", workoutRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening to the port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
