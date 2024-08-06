const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const flash = require('connect-flash');

app.use(express.static('SAIG'))
app.use(cors()) ;
app.use(express.json()) ;
app.use(express.urlencoded()) ;
app.use(flash());

app.listen(3000 , () => {
  console.log("App listenning on port 3000")
})

//connect to mongoose
mongoose.connect("mongodb+srv://khom2548:khom192548@saig.g9scmye.mongodb.net/?retryWrites=true&w=majority&appName=SAIG").then(() => 
    {
    console.log("connected") ;
    }).catch((error) =>
    {
    console.log("Error" , error) ; 
    });