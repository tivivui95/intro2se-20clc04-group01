const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const exercisesRoute = require('./routes/exercises');
const seriesRoute = require('./routes/series');
const muscleGroupRoute = require('./routes/group');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());

//Route
app.use("/ex", exercisesRoute);
app.use('/series', seriesRoute);
app.use('/mg', muscleGroupRoute);
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/img', express.static("images"));


//connect DB
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log("Connect to DB");
});

app.listen(3000, () =>{
    console.log('Server is running.');
});

