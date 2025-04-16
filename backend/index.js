const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import and use the user routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes); // Make sure this line exists!

app.get('/', (req, res) => {
    res.send('Asset Management Backend Running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});