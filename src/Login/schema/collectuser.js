const {Schema , model} = require("mongoose") ;
const mongoose = require('mongoose') ;

const userSchema = new Schema({
    email: String ,
    username: String ,
    password: String ,
});

const User = mongoose.model("User" , userSchema)
module.exports = User 