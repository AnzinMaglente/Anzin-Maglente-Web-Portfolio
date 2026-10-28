const router = require('express').Router();
const User = require('../models/users.model');
const authMiddleware = require('../middlewares/authMiddleware'); 

// Get logged user
router.route('/get-logged-user').get(authMiddleware, async (req, res) => {
    try{
        const user = await User.findOne({_id: req.userId});

        res.send({
            message : "user fetched successfully",
            success : true,
            data : user
        })
    }
    catch(err){
        res.status(400).send({
            message : err.message,
            success : false
        })
    }
})

// Get all users except the current one
router.route('/get-all-users').get(authMiddleware, async (req, res) => {
    try{
        const userId = req.userId
        const allUser = await User.find({_id: {$ne: userId}});

        res.send({
            message : "all user fetched successfully",
            success : true,
            data : allUser
        })
    }
    catch(err){
        res.status(400).send({
            message : err.message,
            success : false
        })
    }
})

module.exports = router;