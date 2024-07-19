const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/SAIG/userInfo")
.then (() => {
    console.log("connect") ;
})
.catch(() => {
    console.log("fail") ;
})

const newSchema = new mongoose.Schema({
    userInfo:{
        type:Object ,
        require:true
    }
})

const collection = mongoose.model("userInfo" , newSchema)

module.exports=collection