const { Exercises, Series, MuscleGroup, CmtAndRate} = require('../model/model');

const exercisesController = {
    //add exercises
    addExercises: async(req, res) =>{
        try {
            const newExercises = new Exercises(req.body);
            const savedExercises = await newExercises.save();
            let msg = "Add successfully!\n";

            if (req.body.series){
                const series = await Series.findOne({series_id: req.body.series});
                if (!(await series)){
                    msg += "Series ID không tồn tại, vui lòng cập nhật lại sau!\n"
                }
                else{
                    await series.updateOne({$push: {exercises: savedExercises._id}});
                    await savedExercises.updateOne({$set: {series_id: series._id}});
                }
            }
            if (req.body.group){
                const group = await MuscleGroup.findOne({group_id: req.body.group});
                if (!(await group)){
                    msg += "Muscle group ID không tồn tại, vui lòng cập nhật lại sau!\n"
                }
                else{
                    await group.updateOne({$push: {exercises: savedExercises._id}});
                    await savedExercises.updateOne({$set: {group_id: group._id}});
                }
            }
            res.send(msg);
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
    },
    getAnExercises: async (req, res) =>{
        try {
            const exercises = await Exercises.findOne({id: req.params.id}).populate([{path: "group_id", select:"group_id name descrip"},{path:"series_id", select:"series_id name descrip"}]);
            if (!(await exercises)){
                res.status(500).send('Bài tập không tồn tại');
            }
            else{
                res.status(200).json(exercises)
            }
        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
    }
};


module.exports = exercisesController;