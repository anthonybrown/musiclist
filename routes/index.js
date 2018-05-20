const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MusicList' });
});

const testJSON = [
  {
    name: 'Tony Brown',
    username: 'codebarbarian',
  },

  {
    name: 'Ho Cakes',
    username: 'StormyCakes',
  }
]

router.get('/sendjson', (req, res, next) => {
  res.json(testJSON)
})

module.exports = router;
