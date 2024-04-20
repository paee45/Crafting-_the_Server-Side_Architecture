const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://paee45:MjI0OTUtcGFlZTQ1@localhost:27017git commit -m "Adding temporary changes to Github"');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;