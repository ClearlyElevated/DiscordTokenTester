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
  $('#tester').append('<div class="w90 bg-blue flex column space-between flex-07" id="botInfo"></div>')
  $('#botInfo').append(`<img src="${client.user.avatarURL}" height=100 width=100>`)
  createFields(3)

  $('#infoLine1').append(`<div class="container middle">TAG : ${client.user.tag}</div>`)
  $('#infoLine1').append(`<div class="container middle">ID : ${client.user.id}</div>`)

  $('#infoLine2').append(`<div class="container middle">Guilds : ${client.guilds.length}</div>`)
  $('#infoLine2').append(`<div class="container middle">Channels : ${client.channels.length}</div>`)

  $('#infoLine3').append(`<div class="container middle">Avatar : ${client.user.avatarURL}</div>`)
  $('#infoLine3').append(`<div class="container middle">Users : ${client.users.length}</div>`)
}

// Utils
function repeat(fn, times) {for(var i = 0; i < times; i++) fn()}

function createFields(n) {
  for(var i = 0; i < n; i++) {
    $('#botInfo').append(`<div class="bg-red flex space-between flex-03 infoLine" id="infoLine${i+1}"></div>`)
  }
}