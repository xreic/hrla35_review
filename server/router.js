const router = require('express').Router();
const controller = require('./controller.js');

// routes getting and adding students
router
  .route('/students')
  .get()
  .post()

// routes student name update  
router 
  .route('/students/:id')
  .put()

module.exports = router