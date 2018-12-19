$(document).ready(() => {
  // Processing the form
  $('form').submit((event) => {
    var formData = {
      'token': $('input[name=token]').val()
    }
    // Processing the ajax request
    $.ajax({
      type: 'POST',
      url: '/api',
      data: formData,
      dataType: 'json',
      encode: true
    })
    .done((data) => {
      console.log(data);
    })
    event.preventDefault()
  })
})