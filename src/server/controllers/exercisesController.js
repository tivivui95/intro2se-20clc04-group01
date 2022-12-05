const { Exercises, Series, CmtAndRate} = require('../model/model');

const exercisesController = {
    //add exercises
    addExercises: async(req, res) =>{
        try {
            const newExercises = new Exercises(req.body);
            const savedExercises = await newExercises.save();
            if (req.body.series_id){
                const series = Series.find({series_id: req.body.series_id});
                await series.updateOne({$push: {exercises: savedExercises.id}});
            }
            // if (req.body.group_id){
            //     const group = Group.find({group_id: req.body.group_id});
            //     await group.updateOne({$push: {exercises: savedExercises.id}});
            // }
            res.status(200).json(savedExercises);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllExercises: async (req, res) =>{
        try {
            const exercises = await Exercises.find();
            res.status(200).json(exercises);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};


module.exports = exercisesController;