const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');
const exercisesRoute = require('./routes/exercises');

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors);

//Route
//app.use("/ex", exercisesRoute);

app.get('/', (req, res) =>{
    res.send('hello');
});

//connect DB
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log("Connect to DB");
});

app.listen(3000, () =>{
    console.log('Server is running.');
});