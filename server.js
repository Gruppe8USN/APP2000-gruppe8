const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users'); // Assuming you have a UserModel defined

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB with the hardcoded connection string
const mongoDBURI = "mongodb+srv://David:Test123@cluster0.rd0lfu2.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB', error));

// Define a route to fetch users
app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => res.json (users))
    .catch(err => res.json(err))
    })

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});