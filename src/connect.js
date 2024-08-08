const express = require('express');
const cors = require('cors') ;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const { Link } = require('react-router-dom');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 

// MongoDB Connection
const uri = "mongodb+srv://khom2548:khom192548@saig.34tim.mongodb.net/?retryWrites=true&w=majority&appName=SAIG" ;
mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Schema and Model
const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String
});

const adminSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String
});

const boardGameSchema = new mongoose.Schema({
    name: String,
    players: String,
    category: String,
    description: String,
    pic: String
});

const currentUserSchema = new mongoose.Schema({
  email: String,
  username: String
});

const currentAdminSchema = new mongoose.Schema({
  email: String,
  username: String
});

const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin' , adminSchema) ;
const Boardgame = mongoose.model('Boardgame' , boardGameSchema) ;
const currentUser = mongoose.model('currentUser' , currentUserSchema) ;
const currentAdmin = mongoose.model('currentAdmin' , currentAdminSchema) ;

// Routes
app.post('/api/users', async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const newUser = new User({ email, username, password });
        await newUser.save();
        res.status(201).send('User created');
    } catch (err) {
        res.status(400).send('Error creating user');
    }
});

app.post('/api/admins', async (req, res) => {
  const { email, username, password } = req.body;
  try {
      const newAdmin = new Admin({ email, username, password });
      await newAdmin.save();
      res.status(201).send('User created');
  } catch (err) {
      res.status(400).send('Error creating user');
  }
});

app.post('/api/boardgames', async (req, res) => {
    const { name, players, category ,description , pic } = req.body;
    try {
        const newBoardgame = new Boardgame({ name, players, category ,description , pic });
        await newBoardgame.save();
        res.status(201).send('Added boardgame');
    } catch (err) {
        res.status(400).send('Adding boardgame error');
    }
  });

  app.post('/api/currentUser', async (req, res) => {
    const { email, username } = req.body;
    try {
        const newcurrentUser = new currentUser({ email, username });
        await newcurrentUser.save();
        res.status(201).send('Added currentUser');
    } catch (err) {
        res.status(400).send('Adding currentUser error');
    }
  });

  app.post('/api/currentAdmin', async (req, res) => {
    const { email, username } = req.body;
    try {
        const newcurrentAdmin = new currentAdmin({ email, username });
        await newcurrentAdmin.save();
        res.status(201).send('Added currentAdmin');
    } catch (err) {
        res.status(400).send('Adding currentAdmin error');
    }
  });

// Fetch 
app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.get('/api/admins', async (req, res) => {
    try {
      const admins = await Admin.find();
      res.json(admins);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.get('/api/boardgames', async (req, res) => {
    try {
      const boardgames = await Boardgame.find();
      res.json(boardgames);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.get('/api/currentUser', async (req, res) => {
    try {
      const currentuser = await currentUser.find();
      res.json(currentuser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  //update
  app.put('/api/currentUser/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { email , username } = req.body;
      const updatedUser = await currentUser.findByIdAndUpdate( id , {email,username} , { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.put('/api/currentAdmin/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { email , username } = req.body;
      const updatedAdmin = await currentAdmin.findByIdAndUpdate( id , {email,username} , { new: true });
      res.json(updatedAdmin);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.listen(port, () => console.log("Server running on port " , {port}));
