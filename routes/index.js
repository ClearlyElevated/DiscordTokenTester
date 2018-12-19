var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Discord Token Tester',
    stylesheets: ['style.css'],
    scripts: ['handler.js']
  })
})

module.exports = router
