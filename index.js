const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('runnings');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/course/:name', (req, res) => {
    const name = req.params.name;
    const getCourse = courses?.filter(course => course.name == name);
    res.send(getCourse);
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    const getCourse = courses?.filter(course => course.id == id);
    res.send(getCourse);
});

app.listen(port, () => {
    console.log('running successfully');
});

module.exports = app;
