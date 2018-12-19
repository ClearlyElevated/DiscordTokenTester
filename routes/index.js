var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Discord Token Tester',
    stylesheets: ['style.css'],
    scripts: ['app.js']
  })
})

/* POST home page */
router.post('/', (req, res, next) => {
  console.log(req.body)
})

module.exports = router
