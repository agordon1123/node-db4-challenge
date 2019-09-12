const express = require('express');
const db = require('../../data/db-config');

const router = express.Router();

router.use('/', (req, res) => {
    db('ingredients')
        .then(ingredients => res.status(200).json(ingredients))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
