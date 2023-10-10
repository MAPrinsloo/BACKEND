//Imports
const mongoose = require('mongoose');
const Joi = require('joi');

//Schema for user model
const userSchema = new mongoose.Schema({
        username: {type:String, unique:true},
        firstname: String,
        lastname: String,
        password: String,
    });

//Create mongoose model from the defined schema
const User = mongoose.model('User', userSchema);

//Validates User using Joi
function validateUser(user) {
    const schema = Joi.object({
            username: Joi.string().min(3).max(50).required(),
            firstname: Joi.string().max(50).required(),
            lastname: Joi.string().max(50).required(),
            password: Joi.string().min(3).max(50).required()
        });
        return schema.validate(user);
}

module.exports = {User, validateUser};