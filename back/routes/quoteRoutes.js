const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');



// Create a new quote
router.post('/', async (req, res) => {
  try {
    const { email, projectName, budget, functionality } = req.body;

    if (!email || !projectName || !budget || !functionality) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const quote = new Quote(req.body);
    await quote.save();
    res.status(201).json({ message: 'Quote created successfully', quote });
  } catch (error) {
    console.error('Error creating quote:', error);
    res.status(500).json({ error: 'Failed to create quote' });
  }
});


module.exports = router;
