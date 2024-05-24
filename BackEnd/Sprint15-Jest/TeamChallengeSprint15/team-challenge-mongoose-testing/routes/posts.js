const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/create', async (req,res)=>{
    try{
        const posting = await Post.create(req.body);
        console.log('Creating Post...');
        res.status(201).send(posting);
        console.log('Created Post!')
    } catch (error){
        console.error(error);
        res
            .status(500)
            .send({message: 'There was a problem trying to create a task'});
    }
});

router.get('/', async(req, res)=>{
    try {
        const posts = await Post.find();
        console.log('Get the post in 3,2,1..');
        res.status(201).send(posts);
    } catch (error){
        console.error(error);
        res
            .status(500)
            .send({message: 'There was a problem to view the posts'});
    }
});

router.get('/id/:_id', async(req, res)=>{
    const id = req.params._id;
    try {
        const postById = await Post.findById(id);
        if(!postById){
            return res.status(404).json({ message: 'Post not found by Id' });
        }
        console.log('Get the post by id..');
        res.status(201).send(postById);
    } catch (error){
        console.error(error);
        res.status(500).send({message:'There was a problem viewing the post'})
    }
})

router.get('/title/:title', async(req,res)=>{
    const title = req.params.title;
    try{
        const postByTitle = await Post.find(title);
        if(!postByTitle){
            return res.status(404).json({ message: 'Post not found by title' });
        }
        console.log('Get the post by title..');
        res.status(201).send(postByTitle);
    } catch (error){
        console.error(error);
        res.status(500).send({message:'There was a problem viewing the post'})
    }
});
router.put('/id/:_id', async(req, res)=>{
    const id = req.params._id;
    const { title, body } = req.body; 
    try {
        const postModify = await Post.findByIdAndUpdate(id,{title, body});
            if (!postModify) {
                return res.status(404).json({message: 'Impossible modify the post'});
        }
        console.log(postModify);
        res.status(200).json(postModify);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'There was a problem modifying the post'})
        }  
});

router.delete('/id/:_id', async(req, res)=>{
    const id = req.params._id;
    try{
        const postDeleteById = await Task.findByIdAndDelete(id);
    if(!postDeleteById){
        return res.status(404).json({message:'Impossible delete the task'});
    }
    console.log(postDeleteById);
    res.status(200).json(postDeleteById);
    } catch(error){
        console.error(error);
        res.status(500).json({message:'There was a problem deleting the post'});
    }
})

module.exports = router;
