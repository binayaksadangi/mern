require('dotenv').config();
const express = require('express');
const workOutRoutes = require('./routes/workouts');
//express app
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/workouts',workOutRoutes);


//listen for request
app.listen(process.env.PORT, ()=>{
    console.log("Listening on port ",process.env.PORT);
});