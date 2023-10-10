//Imports
const mongoose = require('mongoose');
const Joi = require('joi');

//Schema for post model
const postSchema = new mongoose.Schema({
        title: String,
        description: String,
        departmentCode: String
    });

//Create mongoose model from the defined schema
const Post = mongoose.model('Post',postSchema);

//Validates Post using Joi
function validatePost(post) {
    const schema = Joi.object({
        title: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(3).max(50).required(),
        departmentCode: Joi.string().min(3).max(50).required()
        });
        return schema.validate(post);
} 

module.exports = {Post, validatePost};