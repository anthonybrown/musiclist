const express = require('express');

const router = express.Router();
const User   = require('../../models/user');

router.get('/list', (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }

    return res.json(users);
  });
});

module.exports = router;

