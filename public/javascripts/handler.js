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
  $("#resetButton").click(function() {
    $("#botInfo").fadeOut(1000, function() {
      $(this).remove()
    })
  })
})

var HTMLincrement = (client) => {
  $("main form input[type=submit]").prop("disabled", true)
  $("#tester").append('<div class="w90 bg-blue flex column space-between flex-07" id="botInfo"></div>')
  createFields(3)
}

// Utils
function repeat(fn, times) {for(var i = 0; i < times; i++) fn()}

function createFields(n) {
  for(var i = 0; i < n; i++) {
    $("#botInfo").append(`<div class="bg-red flex-03 infoLine" id="infoLine${i+1}"></div>`)
  }
}