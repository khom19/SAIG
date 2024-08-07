const express = require('express');
const cors = require('cors') ;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

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

const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin' , adminSchema) ;

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

app.listen(port, () => console.log("Server running on port " , {port}));
