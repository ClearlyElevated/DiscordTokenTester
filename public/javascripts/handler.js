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
})

var HTMLincrement = (client) => {
  $("main form input[type=submit]").prop("disabled", true)
  $("#tester").append('<div class="w90 bg-blue flex column space-between flex-07" id="botInfo"></div>')
  $("#botInfo").append(`<div class="bg-red flex-03" id="infoLine1"></div>`)
  $("#botInfo").append(`<div class="bg-red flex-03" id="infoLine2"></div>`)
  $("#botInfo").append(`<div class="bg-red flex-03" id="infoLine3"></div>`)
}