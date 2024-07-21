const express = require('express') ;
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')
app.use(express.json()) ;
const cors = require('cors') ;
app.use(cors()) ;
const bcrypt = require('bcryptjs') ;
app.set("view engine" , "ejs") ;
app.use(express.urlencoded({extended:false})) ;

const mongo = "mongodb+srv://khom2548:khom192548@saig.g9scmye.mongodb.net/?retryWrites=true&w=majority&appName=SAIG";

const client = new MongoClient(mongo, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
    } finally {
      // Ensures that the client will close when you finish/error
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
  }
  run().catch(console.dir);

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