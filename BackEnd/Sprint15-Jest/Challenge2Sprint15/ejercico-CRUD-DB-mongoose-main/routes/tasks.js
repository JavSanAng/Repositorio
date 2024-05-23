const express = require ('express');
const router = express.Router();
const Task = require('../models/Task')

router.post('/create', async(req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).send(task);
    } catch (error){
        console.error(error);
        res
            .status(500)
            .send({message:'There was a problem trying to create a task'});
    }
});

router.get('/', async(req,res)=>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch(error){
        res.status(404).json({message: 'There was a problem to view all tasks'});
    }
})

router.get('/id/:_id', async (req, res) => {
    const id = req.params._id; 
    try {
        const taskId = await Task.findById(id); 
        if (!taskId) {
            return res.status(404).json({ message: 'Task not found' });
        }
        console.log(taskId);
        res.status(200).json(taskId);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'There was a problem retrieving the task' });
    }
});

router.put('/markAsCompleted/:_id', async(req, res)=>{
    const id = req.params._id;
    try {
        const taskModify = await Task.findByIdAndUpdate(id,{completed:true});
            if (!taskModify) {
                return res.status(404).json({message: 'Impossible modify the task'});
        }
        console.log(taskModify);
        res.status(200).json(taskModify);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'There was a problem modifying the task'})
        }  
});

router.put('/id/:_id', async (req, res)=>{
    const id = req.params._id;
    const {title} = req.body;
    try{
        const taskModifyTitle = await Task.findByIdAndUpdate(id, {title});
        if(!taskModifyTitle){
            return res.status(404).json({message:'Impossible modify the title of the task'});
        }
            console.log(taskModifyTitle);
            res.status(200).json(taskModifyTitle);
        } catch(error){
            console.error(error);
            res.status(500).json({message: 'There was a problem modifying the title of the task'})
    }
})

router.delete('/id/:_id', async(req, res)=>{
    const id = req.params._id;
    try{
        const taskDeleteById = await Task.findByIdAndDelete(id);
    if(!taskDeleteById){
        return res.status(404).json({message:'Impossible delete the task'});
    }
    console.log(taskDeleteById);
    res.status(200).json(taskDeleteById);
    } catch(error){
        console.error(error);
        res.status(500).json({message:'There was a problem deleting the task'});
    }
})

module.exports = router;