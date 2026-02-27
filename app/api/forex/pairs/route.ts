// Route to get all forex pairs

import { Router } from 'express';

const router = Router();

// Sample data for forex pairs
const forexPairs = [
    { pair: 'EUR/USD', value: 1.10 },
    { pair: 'USD/JPY', value: 110.25 },
    { pair: 'GBP/USD', value: 1.35 },
];

// GET all forex pairs
router.get('/', (req, res) => {
    res.json(forexPairs);
});

export default router;