const express = require('express');
const { isEmpty } = require('lodash');
const Lesson = require('../models/lesson');
const router = express.Router();

router.post('/add', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { name, price, lessonDate } = req.body;

    const newLesson = new Lesson({
        name,
        price,
        lessonDate,
        date: Date.now()
    });
    try {
        await newLesson.save();
        res.json({
            message: 'Data successfully saved',
            statusCode: 200,
            name,
            lessonDate,
            price
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});


router.get('/lessons', async (req, res) => {

    try {
        const lessons = await Lesson.find({});

        return res.json({
            lessons
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

module.exports = router;