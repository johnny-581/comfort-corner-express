const generateQuote = require('../utils/openai');

exports.getQuote = async (req, res) => {
    try {
        const quote = await generateQuote();
        console.log(quote);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate quote (controller)' });
    }
};