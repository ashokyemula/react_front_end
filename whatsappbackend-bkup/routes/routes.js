const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models');

router.post('/signup', (request, response) => {
    //response.send('send');
    const signedUpUser = new signUpTemplateCopy ({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
})

module.exports = router