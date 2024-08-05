const express = require('express') ;
const app = express() ;
const cors = require('cors') ;
const mongoose = require('mongoose') ;

app.use(cors()) ;
app.use(express.json()) ;

//connect to mongoose
mongoose.connect("mongodb+srv://khom2548:khom192548@saig.g9scmye.mongodb.net/?retryWrites=true&w=majority&appName=SAIG").then(() => 
    {
    console.log("connected") ;
    }).catch((error) =>
    {
    console.log("Error" , error) ; 
    });