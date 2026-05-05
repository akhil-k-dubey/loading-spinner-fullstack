const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated API route with delay
app.get('/api/data', (req, res) => {
  // Simulate data fetching delay (2-3 seconds)
  setTimeout(() => {
    res.json({
      success: true,
      message: 'Data loaded successfully!',
      data: [
        { id: 1, title: 'Item 1', description: 'First item' },
        { id: 2, title: 'Item 2', description: 'Second item' },
        { id: 3, title: 'Item 3', description: 'Third item' },
        { id: 4, title: 'Item 4', description: 'Fourth item' }
      ]
    });
  }, 2500);
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});