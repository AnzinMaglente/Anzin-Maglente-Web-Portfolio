const router = require('express').Router();
const CommentGroup = require('../models/commentsGroup.model');
const Comment = require('../models/comment.model');
const authMiddleware = require('../middlewares/authMiddleware')

// Creates new comments
router.route('/new-comment').post(authMiddleware, async (req, res) => {
    try{
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();

        const currentCommentGroup = await CommentGroup.findOneAndUpdate({
            _id: req.body.CommentGroupID
        }, {
            lastComment: savedComment._id
        })

        res.status(201).send({
            message: "Comment added to group successfully",
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

// Gets all comments on a specific article 
router.route('/get-comments-by-group/:commentGroupID').get(authMiddleware, async (req, res) => {
    try{
        const allComments = await Comment.find({commentGroupID: req.params.groupId})
                                         .sort({createdAt: 1});
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