const { Exercises, Series, CmtAndRate} = require('../model/model');

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
    }
};

module.exports = seriesController;