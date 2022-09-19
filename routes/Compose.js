const express = require('express');
const router =  express.Router();
const Post = require('../models/PostModel');


router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.post("/compose" , (req , res)=>{

    const newPost = new Post({
      post_title : req.body.post_title,
      post_body : req.body.post_body
    });
    newPost.save(()=>{
      res.redirect('/latest');
    })
 
});

module.exports = router;