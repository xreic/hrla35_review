const helper = require('../db/dbhelpers.js');

const controller = {
  students: {
    get: (req, res) => {
      helper.students
        .getStudent()
        .then((reuslt) =>
          res
            .status(200)
            .send(reuslt)
            .end()
        )
        .catch((err) =>
          res
            .status(400)
            .send('Controllers:Students:Get - Sum Ting Wong')
            .end()
        );
    },

    post: (req, res) => {
      const name = req.body.name;
      const imgurl = req.body.imgurl;

      helper.students
        .postName({ name, imgurl })
        .then(() =>
          res
            .status(200)
            .send('Posted')
            .end()
        )
        .catch((err) =>
          res.status(400).send('Controllers:Students:Post - Sum Ting Wong')
        );
    },

    update: (req, res) => {
      let name = req.body.name;
      let _id = req.params.id;

      // no $set because of put vs patch?
      helper.students
        .updateName({ _id }, { name })
        .then(() =>
          res
            .status(200)
            .send('Updated')
            .end()
        )
        .catch((err) =>
          res.status(400).send('Controllers:Students:Update - Sum Ting Wong')
        );
    },
  },
};

module.exports = controller;
