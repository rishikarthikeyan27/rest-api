const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req,res) => {
    res.send('Dont fear failure');
})

router.post('/', (req,res) => {
    console.log(req.body);
})
router.patch('/', (req,res) =>{
    console.log(req.body);
})
router.delete('/',(req,res) => {
    console.log(req.body);
})
router.get('/why', (req,res) => {
    res.send('Becausem failure helps you grow');
})

module.exports = router;