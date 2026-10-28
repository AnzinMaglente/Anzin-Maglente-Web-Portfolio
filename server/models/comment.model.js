const mongoose = require('mongoose');

// Comment schema
const commentSchema = new mongoose.Schema ({
    commentGroupID: {
        type: mongoose.Schema.Types.ObjectId, ref: "commentsGroup"
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId, ref: "users"
    },
    text: {
        type: String,
        required: true 
    }
});

const Comment = mongoose.model('Comments', commentSchema);
module.exports = Comment;