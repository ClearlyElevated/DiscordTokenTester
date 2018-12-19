var express = require('express')
var router = express.Router()

var Discord = require('discord.js')
var client = new Discord.Client({ disableEveryone: true })

/* POST /api page. */
router.post('/', (req, res, next) => {
  var token = escapeHtml(req.body.token)

  client.login(token)
    .then(() => {
      res.status(200).send(client)
    })
    .catch(e => {
      res.status(404).send("Unable to get data from this token.")
    })
})

module.exports = router

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}