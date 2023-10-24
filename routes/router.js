const express = require('express');
const path = require('path');

const router = express.Router();
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'car-list.html'))
})

router.get('/car-details', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'car-details.html'))
})

module.exports = router;
