const express = require('express');
const app = express();

const partials = require('./index')

module.exports = (app, partials) => {
    app.post('/newuser', (req, res, next) => {

        console.log(req.header('Content-Type'))
        console.log(req.body) // this prints [object Object]
        console.log(JSON.parse(req.body)) // this throws SyntaxError: Unexpected token o in JSON at position 1
    });
};

// module.exports = app;
