
// Load environment variables
require('dotenv').config();
console.log('Loading environment variables...');

// Load Express and configure it
const express = require('express');
console.log('Loading Express...');
const app = express();
console.log('Express loaded');

// Enable CORS
console.log('Configuring CORS...');
const cors = require('cors');
app.use(cors());
console.log('CORS configured');

// Parse JSON requests
console.log('Configuring JSON parsing middleware...');
app.use(express.json());
console.log('JSON parsing middleware configured');

// Load routes
console.log('Configuring routes...');
const itemsRoutes = require('./routes/item');
app.use('/items', itemsRoutes);
console.log('Routes configured');
const MONGODB_URI = process.env.MONGODB_URI;
// Connect to MongoDB
console.log('Connecting to MongoDB...');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('Starting server...');
    app.listen(4000, () => {
      console.log('Server running on port 4000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
