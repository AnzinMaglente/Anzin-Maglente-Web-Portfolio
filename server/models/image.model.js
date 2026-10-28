const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Image Schema
const imageSchema = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId, ref: "users",
        required: true
    },
    imageName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    data: {
        type: Buffer,
        require: true
    }
})

const Image = mongoose.model('Image', imageSchema)
module.exports = Image