const Discord = require('discord.js')
const colors = require('colors')

client = new Discord.Client({ disableEveryone: true })

client.login('Mjc0OTQxMjI4NTE1MTk2OTI4.C25brA.Ye3WtHacvoXXQ3ENJN8MWbHl_LU')
  .catch(e => {
    console.log('Unable to login with the token you provided.'.red);
  })

client.on('ready', () => {
  giveInformation(client)
})

function giveInformation (client) {
  console.log(`== LOGGED IN AS ${client.user.tag} - ${client.id} ==\n`.green,
  ` > ${client.guilds.size} guilds
  > ${client.users.size} users
  > ${client.channels.size} channels`.yellow)
}