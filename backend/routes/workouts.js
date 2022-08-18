const express = require('express');

const router = express.Router();

//GET all workout
router.get('/',(req,res)=>{
    res.json({msg:"GET all workout"})
});

//GET a single workout
router.get('/:id', (req,res)=>{
    res.json({msg:"GET all workout"})
});

//POST a new workout
router.post('/',(req,res)=>{
    res.json({msg:"GET all workout"})
});

//DELETE a  workout
router.delete('/:id',(req,res)=>{
    res.json({msg:"DElete a workout"})
});

//Update a  workout
router.patch('/:id',(req,res)=>{
    res.json({msg:"Update a workout"})
});

module.exports = router;