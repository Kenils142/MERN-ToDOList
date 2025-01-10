const express = require('express');

const connectDB = require('./config/db');
const taskRoutes = require('./routes/tasks');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 