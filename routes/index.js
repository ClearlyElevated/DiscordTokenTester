var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Token Tester',
    stylesheets: ['style.css'],
    scripts: ['app.js']
  })
})

module.exports = router
