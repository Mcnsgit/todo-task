// Load environment variables
require('dotenv').config();

// Load Express and configure it
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/items');

const app = express();
// Enable CORS
app.use(cors());
// Parse JSON requests
app.use(express.json());
app.use('/items', itemRoutes);
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error))
  .then(() => {
    app.listen(4000, () => {
      console.log('Server running on port 4000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

