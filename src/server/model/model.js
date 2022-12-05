const mongoose = require('mongoose');

const exercisesSchema = new mongoose.Schema({
    id: {
        type: Number,
        min: 0,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    video: {
        type: String,
    },
    descrip: {
        type: String
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    },
    series_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Series"
    },
    duration:{
        type: Number,
        min: 0,
    }
});

const seriesSchema = new mongoose.Schema({
    series_id: {
        type: Number,
        min: 0,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    descrip:{
        type: String
    },
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercises"
    }]
});

const cmtAndRateSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    rate: {
        type: Number,
        min: 1,
        max: 0,
        required: true
    },
    cmt:{
        type: String,
        required: true
    },
    excersise_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercises",
        required: true
    }
});

let Exercises = mongoose.model("Exercises", exercisesSchema);
let Series = mongoose.model("Series", seriesSchema);
let CmtAndRate = mongoose.model("CmtAndRate", cmtAndRateSchema);

module.exports = { Exercises, Series, CmtAndRate};