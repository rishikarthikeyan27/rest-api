const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Dont fear failure');
})

router.get('/why', (req,res) => {
    res.send('Becausem failure helps you grow');
})

module.exports = router;