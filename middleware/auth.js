//Imports
//Allows middleware the access of the jsonwebtoken library
const jwt = require('jsonwebtoken');

//Middleware function for authentication
function auth(req, res, next){
    //Get the JWT from the x-auth-token header
    const token = req.header('x-auth-token');
    let id;

    //Verify the token retrieved from the header & extract the userID
    try{
        const {userId} = jwt.verify(token, process.env.JWT_SECRET_KEY);
        id= userId;
    } catch (err){
        return res.sendStatus(401);
    }
    //If the ID is extracted, set it and continue 
    if(id){
        req.user = {id};
        return next();
    }
    
    res.sendStatus(401);
}

module.exports = auth;