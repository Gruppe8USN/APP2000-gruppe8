const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users'); // Assuming you have a UserModel defined

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoDBURI = process.env.MONGODB_URI; "mongodb+srv://David:Test123@cluster0.rd0lfu2.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB', error));

// Define a route to fetch users
app.get('/api/users', async (req, res) => {
  try {
    const users = await UserModel.find(); // Fetch users from MongoDB
    res.json(users); // Send users as JSON response
  } catch (error) {
    console.error('Failed to fetch users', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});