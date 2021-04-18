const express = require('express');
const path = require('path');
const app = express();
const members = require('./api/Members');
const courses = require('./api/Courses');
const C = require('./api/C');
const Python = require('./api/Python');
const port = process.env.PORT || 8000;


app.get('/api/members', (req, res) => {
    res.json(members);
});


app.get('/api/courses', (req, res) => {
    res.json(courses);
});


app.get('/api/courses/C', (req, res) => {
    res.json(C);
});


app.get('/api/courses/Python', (req, res) => {
    res.json(Python);
})


app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});