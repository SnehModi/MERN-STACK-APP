const express = require("express");
const router = express.Router();

const workoutController = require("../controllers/workout");

router.get("/:id", workoutController.getSingleWorkOut);

router.get("/", workoutController.getWorkOuts);

router.post("/", workoutController.postWorkOut);

router.delete("/:id", workoutController.deleteWorkOut);

router.patch("/:id", workoutController.updateWorkOut);

module.exports = router;
