var db = require('./');

module.exports = {
  students: {
    // fetch all students
    /**
     * Fetch all students
     * Return just db.find
     *   Returns as a promise
     */
    getStudent: () => db.find({}),
    // add a student
    postName: (student) => db.create(student),
    // update a student's name
    updateName: (_id, name) => db.findOneAndUpdate(_id, name),
  },
};
