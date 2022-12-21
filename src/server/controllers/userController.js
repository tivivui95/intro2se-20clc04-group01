const { Users, CmtAndRate } = require("../model/model")


const userController = {
    // GET ALL USERS
    getAllUsers: async(req, res) => {
        try {
            const users = await Users.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Comment and rate
    commentAndRate: async(req, res) => {
        try {
            const newUserComment = await CmtAndRate({
                user_id: req.body.user_id,
                rate: req.body.rate,
                cmt: req.body.cmt,
                exercise_id: req.body.exercise_id
            });

            const commentsAndRates = await newUserComment.save();
            res.status(200).json(commentsAndRates);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = userController;