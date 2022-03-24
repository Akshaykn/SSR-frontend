const express = require('express');
const app = express();
const ejs = require('ejs');
var fs = require('fs');
const port = 8000;   
app.use(express.static(__dirname + '/assets'));

// Render index.ejs file
app.get('/', function (req, res) {
   
    // Render page using renderFile method
    ejs.renderFile('index.ejs', { name: 'Akshay' }, 
        {}, function (err, template) {
        if (err) {
            throw err;
        } else {
            res.end(template);
        }
    });
});


app.get('/home', function (req, res) {
   
    // Render page using renderFile method
    ejs.renderFile('home.ejs', { name: 'Akshay' }, 
        {}, function (err, template) {
        if (err) {
            throw err;
        } else {
            res.end(template);
        }
    });
});
   
// Server setup
app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running");
});