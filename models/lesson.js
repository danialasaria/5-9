const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    name: String,
    price: String,
    lessonDate: String,
    date: Date
});

const Lesson = mongoose.model('Lesson', LessonSchema);


module.exports = Lesson;