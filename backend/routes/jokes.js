const express = require('express');
const axios = require('axios');

const router = express.Router();

// GET /api/jokes/random endpoint
router.get('/random', async (req, res) => {
    try {
        const response = await axios.get('https://api.jokes.one/jokes/random');
        const joke = response.data.contents.jokes[0].joke.text;
        res.status(200).json({ success: true, joke });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching joke' });
    }
});

module.exports = router;