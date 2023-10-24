const express = require('express');

const router = express.Router();
router.get('/', (req, res, next) => {
    res.send('<h1>TEST 1</h1>')
})

router.get('/car-details', (req, res, next) => {
    res.send('<h1>Car Details</h1>')
})

module.exports = router;
