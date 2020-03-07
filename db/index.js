var mongoose = require('mongoose');
var studentSchema = require('../schema.js');
var mongoURI = 'mongodb://localhost/review';
// allow use of es6 promises
// only for verions below 5
mongoose.Promise = global.Promise;

// Connect Mongoose to our local MongoDB via URI specified above
var db = mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('connected to mongoDB');
  })
  .catch((err) => console.error(err));

// specify your model "Student" here
// define what the model is called and the structure it should follow
// don't need new keyword
  // 
var Student = mongoose.model('Students', studentSchema);

// export your model
module.exports = Student;
