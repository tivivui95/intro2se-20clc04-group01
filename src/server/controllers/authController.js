const bcrypt = require('bcrypt');
const { Users } = require('../model/model');

const authController = {
    // REGISTER
    registerUser: async(req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // CREATE NEW USER
            const newUser = await new Users({
                username: req.body.username,
                email: req.body.email,
                password: hashed
            });

            // SAVE TO DATABASE
            const user = await newUser.save();
            res.status(200).json(user);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = authController;