// db.js

const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI; // Updated to retrieve MongoDB URI from environment variable


mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

const db = mongoose.connection;
module.exports = db;
