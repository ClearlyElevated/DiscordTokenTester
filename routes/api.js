var express = require('express')
var router = express.Router()
var _JSON = require('circular-json')
// Needed to Stringify Circular JSON structures (client)

const Discord = require('discord.js')

/* POST /api page. */
router.post('/', (req, res, next) => {
  var token = escapeHtml(req.body.token)
  var client = new Discord.Client({ disableEveryone: true })

  client.login(token)
    .then(() => {
      res.status(200).send(_JSON.stringify(client)).end()
    })
    .catch(e => {
      res.status(400).send("Unable to get data from this token.").end()
    })

  // client.on('ready', () => {
  //   res.status(200).send(_JSON.stringify(client))
  // }) This gives more informations, but we don't need it on this app.
})

module.exports = router

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}