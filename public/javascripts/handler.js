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

var HTMLincrement = (client) => {
  $('main form input[type=submit]').prop('disabled', true)
  $('#tester').append('<div class="w90 flex column space-between flex-07" id="botInfo"></div>')
  $('#botInfo').append(`<img src="${client.user.avatarURL}" id="avatarPicture">`)
  createFields(3)

  $('#infoLine1').append(`<div class="botValue"><span class="prop">TAG</span><span class="propVal">${client.user.tag}</span></div>`)
  $('#infoLine1').append(`<div class="botValue"><span class="prop">ID</span><span class="propVal">${client.user.id}</span></div>`)

  $('#infoLine2').append(`<div class="botValue"><span class="prop">Guilds</span><span class="propVal">${client.guilds.length}</span></div>`)
  $('#infoLine2').append(`<div class="botValue"><span class="prop">Users</span><span class="propVal">${client.users.length}</span></div>`)
  $('#infoLine2').append(`<div class="botValue"><span class="prop">Channels</span><span class="propVal">${client.channels.length}</span></div>`)

  $('#infoLine3').append(`<div class="botValue"><span class="prop">Avatar</span><span class="propVal">${client.user.avatarURL}</span></div>`)
}

// Utils
function repeat(fn, times) {for(var i = 0; i < times; i++) fn()}

function createFields(n) {
  for(var i = 0; i < n; i++) {
    $('#botInfo').append(`<div class="flex space-between flex-03 infoLine" id="infoLine${i+1}"></div>`)
  }
}