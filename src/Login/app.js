const express = require('express') ;
const app = express();
const mongoose = require('mongoose') ;
app.use(express.json()) ;
const cors = require('cors') ;
app.use(cors()) ;
const bcrypt = require('bcryptjs') ;
app.set("view engine" , "ejs") ;
app.use(express.urlencoded({extended:false})) ;

const mongo = "mongodb+srv://khom2548:khom192548@saig.g9scmye.mongodb.net/?retryWrites=true&w=majority&appName=SAIG";

mongoose
    .connect(mongo , {
        useNewUrlParser : true ,
    })
    .then(() => {
        console.log("Connected") ;
    })
    .catch((e) => console.log(e)) ;

    require("./userdetail.js") ;

const User = mongoose.model("userinfo");
app.post("/register" , async(req, res) => {
    const { email , username , password , UserType } = req.body ;

    const encryptedPassword = await bcrypt.hash(password,10) ;
    try{
        const oldUser = await User.findOne({email}) ;

        if(oldUser){
            return res.json({ error: "User Exist" });
        }
        await User.create({
            email , 
            username , 
            password: encryptedPassword ,
            UserType
        }) ;
        res.send({status: "ok"}) ;
    }catch (error) {
        res.send({status: "error"}) ;
    }
}) ;