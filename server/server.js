const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/usermodel');


require('dotenv').config();
app.use(cors());

app.use(express.json());

const dbconfig = require('./config/dbconfig');
const usersRoute = require('./routes/usersRoute');

app.use('/api/users', usersRoute);
app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find(); // Retrieve all users
      res.status(200).json(users); // Send users as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users' }); // Send error message
    }
  });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`);
})