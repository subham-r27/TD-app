const mongoose = require('mongoose');

// Use environment variable or default to local MongoDB
const mongo_url = process.env.MONGO_CONN || 'mongodb://localhost:27017/thinkdriven';

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('MongoDB Connected to:', mongo_url);
    }).catch((err)=>{
        console.log('MongoDB connection error:', err);
        console.log('Please make sure MongoDB is running and accessible');
    })
    