const mongoose = require("mongoose") ;

const UserDetailScehma = new mongoose.Schema(
    {
        email: { type:String , unique: true } ,
        username: String ,
        password: String ,
        UserType: String ,
    },
    {
        collection: "userinfo" ,
    }
);

mongoose.model("userinfo" , UserDetailScehma);