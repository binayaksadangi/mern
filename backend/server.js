require('dotenv').config();
const express = require('express');
const  mongoose  = require('mongoose');
const workOutRoutes = require('./routes/workouts');
//express app
const app = express();

//db connection
const dburl = process.env.DBURL;
mongoose.connect(dburl)
.then((result)=>{
    console.log("connected db")
})

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method,req.body);
    next();
})

//routes
app.use('/api/workouts',workOutRoutes);


//listen for request
app.listen(process.env.PORT, ()=>{
    console.log("Listening on port ",process.env.PORT);
});