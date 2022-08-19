const express = require("express");

const {
  createWorkout,
  getWorkouts,
  singleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");
const router = express.Router();

//GET all workout
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", singleWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a  workout
router.delete("/:id", deleteWorkout);

//Update a  workout
router.patch("/:id", updateWorkout);

module.exports = router;
