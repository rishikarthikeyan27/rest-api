const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET REQUEST
router.get('/', (req,res) => {
    res.send('Dont fear failure, its not real');
})

//GET SPECIFIC DATA
router.get('/:postId', async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//POST REQUEST
router.post('/', async (req,res) => {
    console.log(req.body)
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

//PATCH REQUEST
router.patch('/:postId', async(req,res) =>{
    try{
        const updatedpost = await Post.updateOne( {_id:req.params.postId},
            {$set : {title : req.body.title}}
        );
        res.json(updatedpost);
    }catch(err){
        res.json( {message:err})
    }
})

//DELETE REQUEST
router.delete('/:postId',async(req,res) => {
    try{
        const post = await Post.findByIdAndRemove(req.params.postId);
        res.json(post);
    }catch(err){
        res.json( {message:err} )
    }
})

module.exports = router;