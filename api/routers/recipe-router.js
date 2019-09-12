const express = require('express');
const db = require('../../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('recipes')
        .then(recipes => res.status(200).json(recipes))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
