const Workout = require('../models/Workout');

//get all workout
const getWorkouts = async (req,res)=>{
    const workouts = await Workout.find().sort({createdAt:-1})
    res.status(200).json(workouts);
}

//get single workout


//create a workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;
    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout);

    }
    catch (err){
        console.log(err);
    }
    
}

//delete a workout


//update a workout

module.exports = {
    createWorkout,
    getWorkouts
}