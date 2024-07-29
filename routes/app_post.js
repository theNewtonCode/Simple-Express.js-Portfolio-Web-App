const express = require('express');
const post_router = express.Router();
const path = require('path');
const fs = require('fs');

post_router.post('/contact', (req,res)=>{
    console.log(req.body)
    // const contactDetails = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     message: req.body.message
    // };
    res.send('Fine');

});

module.exports = post_router;

 
