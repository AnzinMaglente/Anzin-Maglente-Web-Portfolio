const mongoose = require('mongoose');

// Article schema
const articleSchema = new mongoose.Schema ({
    userID: {
      type: mongoose.Schema.Types.ObjectId, ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200
    },
    description: {
      type: String,
      trim: true,
      maxlength: 200
    },
    tag: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      min: 0,
    },
    comments: {
      type: Number,
      min: 0, 
    },
    delta: {
      type: Object, // Quill Delta JSON
      required: true
    }
  },
  { timestamps: true })

const Article = mongoose.model('ArticleContent', articleSchema);
module.exports = Article;