$(document).ready(() => {
  // Processing the form
  $('form').submit((event) => {
    // Processing the ajax request
    $.ajax({
      type: 'POST',
      url: '/api',
      data: {
        'token': $('input[name=token]').val() 
      }
    })
    .done(data => {
      HTMLincrement(data)
    })
    .fail(xhr => {
      console.log(xhr.responseText)
    })
    event.preventDefault()
  })

  // Processing reset
  $('#resetButton').click(function() {
    $('#botInfo').fadeOut(400, function() {
      $(this).remove()
      $('main form input[type=submit]').prop('disabled', false)
    })
  })
})

function HTMLincrement (client) {
  $('main form input[type=submit]').prop('disabled', true)
  $('#tester').append('<div class="w90 flex column space-between flex-07" id="botInfo"></div>')
  createFields(3)

  $('#infoLine1').append(`<div class="botPill"><span class="prop">TAG</span><span class="prop propVal">${client.user.tag}</span></div>`)
  $('#infoLine1').append(`<img height=100 src="${client.user.avatarURL}" id="avatarPicture">`)
  $('#infoLine1').append(`<div class="botPill"><span class="prop">ID</span><span class="prop propVal">${client.user.id}</span></div>`)

  $('#infoLine2').append(`<div class="botPill"><span class="prop">Guilds</span><span class="prop propVal">${client.guilds.length}</span></div>`)
  $('#infoLine2').append(`<div class="botPill"><span class="prop">Users</span><span class="prop propVal">${client.users.length}</span></div>`)
  $('#infoLine2').append(`<div class="botPill"><span class="prop">Channels</span><span class="prop propVal">${client.channels.length}</span></div>`)

  $('#infoLine3').append(`<div class="botPill" id="inviteLink"><span class="prop">Invite</span><span class="prop propVal"><a href="${client.inviteLink}" target="_blank">Discord's API Invite link</a></span></div>`)
}

// Utils
function repeat(fn, times) {for(var i = 0; i < times; i++) fn()}

function createFields(n) {
  for(var i = 0; i < n; i++) {
    $('#botInfo').append(`<div class="flex space-between flex-03 infoLine" id="infoLine${i+1}"></div>`)
  }
}