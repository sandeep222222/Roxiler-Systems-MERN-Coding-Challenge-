const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
const PORT = 8000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/api', transactionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
