const { Exercises, Series, MuscleGroup, CmtAndRate} = require('../model/model');

const muscleGroupController = {
    addMuscleGroup : async (req, res) =>{
        try {
            const newMuscleGroup = new MuscleGroup(req.body);
            const savedMuscleGroup = await newMuscleGroup.save();
            res.status(200).json(savedMuscleGroup);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllMuscleGroup: async (req, res) =>{
        try {
            const groups = await MuscleGroup.find();
            res.status(200).json(groups);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAGroup: async(req, res) =>{
        try {
            const group = await MuscleGroup.findOne({group_id: req.params.id}).populate("exercises", "id name video descrip duration");
            res.status(200).json(group);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = muscleGroupController;