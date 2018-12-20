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
      console.log(data)
    })
    .fail(xhr => {
      console.log(xhr.responseText)
    })
    event.preventDefault()
  })
})