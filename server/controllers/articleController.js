const router = require('express').Router();
const mongoose = require("mongoose");
const authMiddleware = require('../middlewares/authMiddleware'); 
const Article = require('../models/articlesContent.model');

// Saves a new article
router.route('/save-article').post(authMiddleware, async (req, res) => {
    try{
        const title = await Article.findOne({title: req.body.title});
        if(title){
            return res.status(400).json({message: "Article Title already exists"});
        }
        
        const newArticle = new Article({
            userID: new mongoose.Types.ObjectId(req.userId),
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            delta: req.body.delta
        });

        await newArticle.save();
        
        res.status(200).send({message: "Article saved successfully", 
                              success:true,
                              data: newArticle
                              });
    }catch(err){
        res.status(400).send({
            message: err.message,
            success: false
        });
    }
})

// Gets a specific article.
router.route('/get-article/:id').get(async (req, res) => {
    try{
        const article = await Article.findById(req.params.id);

        res.status(200).send({
            message: "Article fetched successfully",
            success: true,
            data: article
        })
    }catch(err){
        res.status(400).send({
            message: err.message,
            success: false
        })
    }
})

// Get all articles.
router.route('/get-all-articles').get(async (req, res) => {
    try{
        const allArticles = await Article.find();

        res.status(200).send({
            message: "All articles fetched successfully",
            success: true,
            data: allArticles
        })
    }catch(err){
        res.status(400).send({
            message: err.message,
            success: false
        })
    }
})

// Get all articles from a specific user.
router.route('/get-all-user-articles').get(authMiddleware, async (req, res) => {
    try{
        const allArticles = await Article.find({ userID: req.userId });

        res.status(200).send({
            message: "User articles fetched successfully",
            success: true,
            data: allArticles
        })
    }catch(err){
        console.error("Full error in get-all-user-articles:", err);
        res.status(500).json({
            message: err.message,
            success: false
        });
    }
})

// Update a specific article.
router.route('/edit-article/:id').patch(authMiddleware, async (req, res) => {
    try{
        const updatedArticle = await Article.findByIdAndUpdate( req.params.id, 
            {
                title: req.body.title,
                description: req.body.description,
                tag: req.body.tag,
                delta: req.body.delta
            },

            {
                new: true,
                runValidators: true
            })

        if (!updatedArticle) {
            return res.status(404).json({
                success: false,
                message: "Article not found",
            });
        }
        
        res.status(200).send({
            message: "Article edited successfully",
            success: true,
            data: updatedArticle
        })
    }catch(err){
        res.status(400).send({
            message: err.message,
            success: false
        })
    }
})

// Delete a specific article.
router.route('/delete-article/:id').delete(authMiddleware, async (req, res) => {
    try{
        const deletedArticle = await Article.findByIdAndDelete(req.params.id);
        
        if (deletedArticle.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Article not found",
            });
        }
        
        res.status(200).send({
            message: "Article deleted successfully",
            success: true,
            data: deletedArticle
        })
    }catch(err){
        res.status(400).send({
            message: err.message,
            success: false
        })
    }
})

module.exports = router;