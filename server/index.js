const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose')
const path = require('path');

// routes
const authRouter = require('./controllers/authController')
const articleRouter = require('./controllers/articleController')
const commentRouter = require('./controllers/commentController')
const commentGroupRouter = require('./controllers/commentGroupController')
const imageRouter = require('./controllers/imageController')
const userRouter = require('./controllers/userController')

// config files
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });;

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Connects to mongodb
const uri = process.env.COMPASS_URI;
mongoose.connect(uri)
        .then(() => console.log("DB connected!"))
        .catch(err => console.error("Error connecting to Mongo", err));
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Server Routers
app.use('/article', articleRouter);
app.use('/auth', authRouter);
app.use('/comment', commentRouter);
app.use('/commentGroup', commentGroupRouter);
app.use('/image', imageRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Server running on port: ${port}`));