const router = require('express').Router();
const Image = require('../models/image.model');
const authMiddleware = require('../middlewares/authMiddleware'); 

// saves an image
router.route('/save-image').post(authMiddleware, async (req, res) => {
    try{
        const image = new Image({
            userID: req.body.userID,
            image: req.body
        })
        const savedImage = await image.save()

        res.status(201).send({
            message: "Image saved successfully",
            success: true,
            data: savedImage
        })
    }catch (err){
        res.status(400).send({
            message : err.message,
            success : false
        })
    }
})

// gets a single image
router.route('/get-image/:id').get(authMiddleware, async (req, res) => {
    const id = req.params.id;
    Image.findById(id)
         .then((image) => {
            res.setHeader("Content-Type", image.type);
            res.send(image.data);
        })
         .catch((error) => {
            console.error(error);
            res.status(500).send("Error retrieving image");
        });
})

// gets multiple images from user
router.route('/get-all-user-images/:userID').get(authMiddleware, async (req, res) => {
    try{
        const allImages = await Image.find({userID: req.params.userID})
                                     .sort({createdAt: 1});
        res.send({
            message : "all images fetched successfully",
            success : true,
            data : allImages
        })        
    } catch (err){
        res.status(400).send({
            message : err.message,
            success : false
        })
    }
})

// deletes a single image
router.route('/delete-image').get(authMiddleware, async (req, res) => {
    try{
        Image.deleteOne({_id: req.body._id});
        
        res.status(201).send({
            message: "Image deleted successfully",
            success: true,
        })
    }catch(err){
        res.status(400).send({
            message: err.message,
            success: false
        })
    }
})

module.exports = router;