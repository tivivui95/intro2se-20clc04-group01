const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
    series_id: {
        type: Number,
        min: 0,
        required: true,
        unique: true
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

const muscleGroupSchema = new mongoose.Schema({
    group_id: {
        type: Number,
        min: 0,
        required: true,
        unique: true
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

const exercisesSchema = new mongoose.Schema({
    id: {
        type: Number,
        min: 0,
        required: true,
        unique: true
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
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    },
    series: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Series"
    },
    duration:{
        type: Number,
        min: 0,
    }
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
        type: Number,
        ref: "Exercises",
        required: true
    }
});

let Series = mongoose.model("Series", seriesSchema);
let MuscleGroup = mongoose.model("Group", muscleGroupSchema);
let Exercises = mongoose.model("Exercises", exercisesSchema);
let CmtAndRate = mongoose.model("CmtAndRate", cmtAndRateSchema);

module.exports = { Exercises, Series, MuscleGroup, CmtAndRate};