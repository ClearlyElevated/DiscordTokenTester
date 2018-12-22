var express = require('express')
var router = express.Router()
var _JSON = require('circular-json')
// Needed to stringify Circular JSON structures (client)

const Discord = require('discord.js')

/* POST /api page. */
router.post('/', (req, res, next) => {
  var token = escapeHtml(req.body.token)
  var client = new Discord.Client({ disableEveryone: true })

  client.login(token)
    .catch(e => {
      res.status(400).send("Unable to get data from this token.").end()
    })

  client.on('ready', () => {

    res.status(200).send({
      user: {
        tag: client.user.tag,
        id: client.user.id,
        avatarURL: client.user.avatarURL
      },
      inviteLink: `https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&scope=bot`,
      channels: client.channels.array(),
      users: JSON.parse(_JSON.stringify(client.users.array())),
      guilds: JSON.parse(_JSON.stringify(client.guilds.array()))
    }).end()

    client.destroy() // End the Discord connexion
  })
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