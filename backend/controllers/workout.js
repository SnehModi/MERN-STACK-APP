const Workout = require("../models/workout");

exports.getWorkOuts = async (req, res, next) => {
  try {
    const workoutData = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workoutData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSingleWorkOut = async (req, res, next) => {
  const { id } = req.params;
  try {
    const workOut = await Workout.findById(id);
    res.status(200).json(workOut);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.postWorkOut = async (req, res, next) => {
  const { title, reps, load } = req.body;

  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all the fields.", emptyFields });
  }

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteWorkOut = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Workout.findOneAndDelete(id);
    res.status(200).json({ msg: "Workout Deleted", result: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateWorkOut = async (req, res, next) => {
  const id = req.params.id;
  try {
    const workOut = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json({ msg: "Workout Details Updated!", workOut: workOut });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
