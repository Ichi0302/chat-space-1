$(document).on('turbolinks:load', function() {
  $('#new-message').on("submit", function(e) {
    e.preventDefault();
    AjaxSend();
    return false;
  });
});

function buildHTML(message) {
  if (message.image.url) {
    var image = `<img src="${ message.image.url }"/>`
  } else {
    var image = ''
  };
  var html = `<li class="chat-message">
                <div class="chat-message__header">
                  <p class="chat-message__user">${ message.name }</p>
                  <p class="chat-message__time">${ message.time }</p>
                </div>
                <p class="chat-message__body">${ message.text }</p>
                ${ image }
              </li>`;
  return html;
}

function AjaxSend() {
  $.ajax({
    type: 'POST',
    url: './messages',
    data: new FormData($("#new-message").get(0)),
    processData: false,
    contentType: false,
    dataType: 'json'
  })
  .done(function(data) {
    var html = buildHTML(data);
    $('.chat-messages').append(html);
    $('#new-message')[0].reset();
  })
  .fail(function() {
    alert('メッセージを入力してください。');
  });
}
