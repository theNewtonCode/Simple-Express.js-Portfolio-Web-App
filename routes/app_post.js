const express = require('express');
const post_router = express.Router();
const path = require('path');
const fs = require('fs');

post_router.post('/contact', (req,res)=>{
    const contactDetails = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        time: new Date
    };
    console.log(contactDetails);
    // console.log(req.body)

    fs.readFile('./contacts.js', 'utf8', (err, data)=>
    {
        if(err){
            console.error(err);
            return;
        }

        let existing_contacts = JSON.parse(data || '[]');
        existing_contacts.push(contactDetails);
        console.log(existing_contacts)

        fs.writeFile('./contacts.js', JSON.stringify(existing_contacts, null, 2), (err, data)=>{
            if(err){
                console.error(err);
                return;
            }
            res.send('Received Your Info, will be contacting soon!');
            });
    });
});

module.exports = post_router;

 
