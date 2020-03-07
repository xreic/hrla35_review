var mongoose = require('mongoose');

var studentSchema = mongoose.Schema ({
  name: {type: String},
  imgurl: {type: String}
});

module.exports = studentSchema;