const express = require('express');

const {createWorkout, getWorkouts} = require('../controller/workoutController')
const router = express.Router();

//GET all workout
router.get('/',getWorkouts);

//GET a single workout
router.get('/:id', getWorkouts);

//POST a new workout
router.post('/',createWorkout);

//DELETE a  workout
router.delete('/:id',(req,res)=>{
    res.json({msg:"DElete a workout"})
});

//Update a  workout
router.patch('/:id',(req,res)=>{
    res.json({msg:"Update a workout"})
});

module.exports = router;