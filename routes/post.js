const express = require('express')
const router = express.Router()


const mongoose = require('mongoose')
const schema = mongoose.Schema
const postschema = new schema({
    title : String,
    imageurl: String,
    description: String,
    postid: String
})

// Created for test purpose.
// router.get('/test', (req, res) => {
//     res.end('Hello Router we are using')
// })

const PostModel = mongoose.model('posts', postschema)
router.post('/addnewpost', (req,res)=> {
    const newpost = new PostModel({
        title: req.body.title,
        imageurl: req.body.imageurl,
        description: req.body.description,
        postit: req.body.postid
    })
    newpost.save(function(err){
        if(!err){
            res.send('New post added successfully')
        }else{
            res.send(err)
        }
    })
})

module.exports = router