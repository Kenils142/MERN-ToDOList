const mongoose = require('mongoose');

require('dotenv').config();

// Database Connector function.
// Use Dabtase ToDoList
const connectDB = async () => {
    try{
        const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/ToDoList';
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;