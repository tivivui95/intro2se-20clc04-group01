const { Exercises, Series, CmtAndRate} = require('../model/model');

const exercisesController = {
    //add exercises
    addExercises: async(req, res) =>{
        console.log("true");
        res.status(200).json(req.body);
    }
};


module.exports = exercisesController;