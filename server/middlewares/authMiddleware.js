const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided", success: false });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        if (!decoded.userId) {
            return res.status(401).json({ message: "Invalid token payload", success: false });
        }

        req.userId = decoded.userId;

        next();
    }
    catch(error){
        res.status(401).send({
            message : error.message,
            success : false
        });
    }
}