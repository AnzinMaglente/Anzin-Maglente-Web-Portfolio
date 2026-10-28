const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// The comment group schema.
const commentSchema = new Schema({
    members: {
        type : [
            {type: mongoose.Schema.Types.ObjectId, ref: "users"}
        ]
    },
    lastComment: {
        type: mongoose.Schema.Types.ObjectId, ref: "comments"
    }
    }, {
        timestamps:true
    });

    const CommentGroup = mongoose.model('CommentGroup', commentSchema)
    module.exports = CommentGroup