//Imports
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {User} = require('../models/user');
const {isValidPassword} = require('../utils/hash');

//Login route
router.post('/', async (req, res) => {
    
    //See if the username entered exists in the DB
    const user = await User.findOne({username: req.body.username});
    if (!user)
    return res.status(401).json({error: 'Incorrect username or password'});

    //Check if the password matches what is stored in the DB
    const valid = await isValidPassword(req.body.password,user.password);

    if(!valid)
        return res.status(401).json({error: 'Incorrect username or password'});

    //Create JWT if the username and password is valid. Sign with userID
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY);
    res.send({token});

});

module.exports = router;