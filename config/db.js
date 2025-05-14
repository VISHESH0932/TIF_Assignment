const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI; 
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not set in the environment variables');
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
