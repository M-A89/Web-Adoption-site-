// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pet_adoption', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create User and Pet models (adjust these according to your schema)
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  password: String,
}));

const Pet = mongoose.model('Pet', new mongoose.Schema({
  name: String,
  type: String, // 'cat' or 'dog'
  gender: String,
  extraInfo: String,
}));

// Route to handle form submissions
app.post('/submit-pet', async (req, res) => {
  try {
    const { name, type, gender, extraInfo } = req.body;

    // Create a new pet
    const newPet = new Pet({ name, type, gender, extraInfo });
    await newPet.save();

    res.status(201).send('Pet submitted successfully');
  } catch (error) {
    res.status(500).send('Error submitting pet');
  }
});

// Route for user login (you may want to implement authentication properly)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
