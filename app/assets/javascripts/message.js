$(function() {
  function buildHTML(message) {
    var name   = $('<p class="chat-message__user">').append(message.name);
    var time   = $('<p class="chat-message__time">').append(message.time);
    var header = $('<div class="chat-message__header">').append(name).append(time);
    var text   = $('<p class="chat-message__body">').append(message.text);
    var html   = $('<li class="chat-message">').append(header).append(text);
    return html;
  }

  $('.new-message').on("submit", function(e) {
    e.preventDefault();
    var textField = $('.chat-footer__body--textarea');
    var message = textField.val();
    $.ajax({
      type: 'POST',
      url: './messages.json',
      data: {
        message: {
          text: message
        }
      },
      dataType: 'json'
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.chat-messages').append(html);
      textField.val('');
    })
    .fail(function() {
      alert('error');
    });
  });
});