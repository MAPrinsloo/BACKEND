//Imports
const bcrypt = require('bcrypt');

//Hashes the password  entered
async function hashPassword(password){
    const salt = await bcrypt.genSalt(10);
    const hashed = bcrypt.hash(password,salt);
    return hashed;
}

//Password and hashed-password entered and compared
async function isValidPassword(password, hash){
    //compare(password) will be encrypted
    return await bcrypt.compare(password,hash);
}

module.exports = {hashPassword, isValidPassword};