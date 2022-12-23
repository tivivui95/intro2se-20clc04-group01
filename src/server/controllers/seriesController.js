const { Exercises, Series, MuscleGroup, CmtAndRate} = require('../model/model');

const seriesController = {
    addSeries: async (req, res) =>{
        try {
            const newSeries = new Series(req.body);
            const savedSeries = await newSeries.save();
            res.status(200).json(savedSeries);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getAllSeries: async (req, res) =>{
        try {
            const series = await Series.find();
            res.status(200).json(series);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getASeries: async (req, res) =>{
        try {
            const series = await Series.findOne({series_id: req.params.id}).populate("exercises", "id name video descrip duration imagePath");
            res.status(200).json(series);
        } catch (error) {
            res.status(500).json(error.message)
        }
    },
    updateASeries: async (req, res) =>{
        try {
            const updatedSeries = await Series.findOneAndUpdate({series_id: req.params.id}, {$set: req.body});
            if (!updatedSeries)
                res.status(500).send('This series id does not exists.');
            else res.status(200).send("Update series successfully!")
        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
    },
    deleteASeries: async (req, res) =>{
        try {
            const deletedSeries = await Series.findOneAndDelete({series_id: req.params.id})
            if (!deletedSeries)
                res.send("This series id does not exists.");
            else {
                await Exercises.updateMany({series: deletedSeries._id}, {$set: {series: null}});
                res.send("Delete successfully!");
            }
        } catch (err) {
            res.status(500).json({ success: false, msg: err.message });
        }
    }
};

module.exports = seriesController;