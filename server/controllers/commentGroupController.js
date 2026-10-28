const router = require('express').Router();
const Comment = require('../models/commentsGroup.model');
const authMiddleware = require('../middlewares/authMiddleware');

// Creates a comment section.
router.route('/create-new-comment-group').post(authMiddleware, async (req, res) => {
    try{
        const comment = new Comment(req.body);
        const savedComment = await comment.save()

        res.status(201).send({
            message: "Comment group created successfully",
            success: true,
            data: savedComment
        })
    }catch(err){
        res.status(400).send({
            message: err.message,
            success: false
        })
    }
})

// Get all comments that a specific member is part of.
router.route('/get-all-comments').get(authMiddleware, async (req, res) => {
    try{
        const userId = req.userId
        const allComments = await Comment.find({members: {$in: [userId]}});

        res.status(201).send({
            message: "Comments fetched successfully",
            success: true,
            data: allComments
        })
    }catch(err){
        res.status(400).send({
            message: err.message,
            success: false
        })
    }
})

module.exports = router;