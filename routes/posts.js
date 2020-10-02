const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req,res) => {
    res.send('Dont fear failure');
})

router.post('/', async (req,res) => {
    
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json( {message:err} );
    }
    
});
// router.patch('/', (req,res) =>{
//     console.log(req.body);
// })
// router.delete('/',(req,res) => {
//     console.log(req.body);
// })

module.exports = router;