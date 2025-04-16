const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req, res) => {
    try {
        const result = await db.query('SELECT id, name, role FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;