const { Exercises, Series, MuscleGroup, CmtAndRate} = require('../model/model');

const exercisesController = {
    //add exercises
    addExercises: async(req, res) =>{
        try {
            const newExercises = new Exercises(req.body);
            const savedExercises = await newExercises.save();
            let msg = "Add successfully!\n";

            if (req.body.series_id){
                const series = await Series.findOne({series_id: req.body.series_id});
                if (!(await series)){
                    msg += "Series ID không tồn tại, vui lòng cập nhật lại sau!\n"
                }
                else{
                    await series.updateOne({$push: {exercises: savedExercises._id}});
                    await savedExercises.updateOne({$set: {series: series._id}});
                }
            }
            if (req.body.group_id){
                const group = await MuscleGroup.findOne({group_id: req.body.group_id});
                if (!(await group)){
                    msg += "Muscle group ID không tồn tại, vui lòng cập nhật lại sau!\n"
                }
                else{
                    await group.updateOne({$push: {exercises: savedExercises._id}});
                    await savedExercises.updateOne({$set: {group: group._id}});
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
            const exercises = await Exercises.findOne({id: req.params.id}).populate([{path: "group", select:"group_id name descrip"},{path:"series", select:"series_id name descrip"}]);
            if (!(await exercises)){
                res.status(500).send('This exercises id does not exists.');
            }
            else{
                res.status(200).json(exercises)
            }
        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
    },
    searchExercises: async (req, res) =>{
        try {
            const exercises = await Exercises.find({name: {$regex: new RegExp(req.params.searchString, 'i')}});
            if (!(await exercises)){
                res.status(500).send('No exercises.');
            }
            else{
                res.status(200).json(exercises)
            }
        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
    },
    updateExercises: async(req, res) =>{
        try {
            let msg = "";
            const exercisesToUpdate = await Exercises.findOne({id: req.params.id});
            if (req.body.series_id){
                
                const series = await Series.findOne({series_id: req.body.series_id});
                if (!(await series)){
                    msg += "Series ID không tồn tại, vui lòng cập nhật lại sau!\n"
                }
                else{
                    await Series.findOneAndUpdate({_id: exercisesToUpdate.series}, {$pull: {exercises: exercisesToUpdate._id}});
                    await series.updateOne({$push: {exercises: exercisesToUpdate._id}});
                    await exercisesToUpdate.updateOne({$set: {series: series._id}});
                }
            }
            if (req.body.group_id){
                
                const group = await MuscleGroup.findOne({group_id: req.body.group_id});
                if (!(await group)){
                    msg += "Muscle group ID không tồn tại, vui lòng cập nhật lại sau!\n"
                }
                else{
                    await MuscleGroup.findOneAndUpdate({_id: exercisesToUpdate.group}, {$pull: {exercises: exercisesToUpdate._id}});
                    await group.updateOne({$push: {exercises: exercisesToUpdate._id}});
                    await exercisesToUpdate.updateOne({$set: {group: group._id}});
                }
            }
            const updated = await exercisesToUpdate.update({$set: req.body});
            //const updatedExercises = await Exercises.findOneAndUpdate({id: req.params.id}, {$set: req.body});
            if (!updated)
                res.status(500).send(msg + 'This exercises id does not exists.');
            else res.status(200).send(msg + "Update exercises successfully!")
        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
    },
    deleteAnExercises: async (req, res) =>{
        try {
            const deletedExercises = await Exercises.findOneAndDelete({id: req.params.id})
            if (!deletedExercises)
                res.send("This exercises id does not exists.");
            else{
                await Series.findByIdAndUpdate(deletedExercises.series, {$pull: {exercises: deletedExercises._id}});
                await MuscleGroup.findByIdAndUpdate(deletedExercises.group, {$pull: {exercises: deletedExercises._id}});
                res.send("Delete successfully!");
            }
        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
    }
};


module.exports = exercisesController;