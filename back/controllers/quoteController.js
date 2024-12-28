const Quote = require('../models/Quote'); // Adjust the path if necessary

// Create a new quote
exports.createQuote = async (req, res) => {
  try {
    const { email, projectName, budget, functionality } = req.body;

    // Validation
    if (!email || !projectName || !budget || !functionality) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const quote = new Quote(req.body);
    await quote.save();
    res.status(201).json({ message: 'Quote created successfully', quote });
  } catch (error) {
    console.error('Error creating quote:', error.message);
    res.status(500).json({ error: error.message || 'Failed to create quote' });
  }
};

// Other CRUD operations can go here (e.g., getQuotes, updateQuote, deleteQuote)


// Get all quotes
exports.getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
};

// Update a quote
// Update a quote's status
exports.updateQuoteStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedQuote = await Quote.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedQuote) {
      return res.status(404).json({ error: "Quote not found" });
    }

    res.json(updatedQuote);
  } catch (error) {
    console.error("Error updating status:", error.message);
    res.status(500).json({ error: "Failed to update status" });
  }
};


// Delete a quote
exports.deleteQuote = async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);
    res.json({ message: 'Quote deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete quote' });
  }
};
