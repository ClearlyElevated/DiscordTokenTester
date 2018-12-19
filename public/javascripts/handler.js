$(document).ready(() => {
  // Processing the form
  $('form').submit((event) => {
    // Processing the ajax request
    $.ajax({
      type: 'POST',
      url: '/api',
      data: {
        'token': $('input[name=token]').val() 
      },
      error: (result, status, error) => {
        console.log(`Error during request: ${result}`, error)
      }
    })
    .done(data => {
      console.log(data)
    })
    .fail((req, status) => {
      console.log(`Failed to execute request ${req}`, status)
    })
    event.preventDefault()
  })
})