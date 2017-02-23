$(document).on('turbolinks:load', function() {
  moveToBottom();
  $('#new-message').on("submit", function(e) {
    e.preventDefault();
    AjaxSend();
    return false;
  });
  pageReload();
});

function buildHTML(message) {
  if (message.image) {
    var image = `<img src="${ message.image }"/>`
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

function moveToBottom() {
  $('.chat-body').animate({
    scrollTop: $('.chat-messages').height() + $('.chat-message').height()
  });
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
    moveToBottom();
  })
  .fail(function() {
    alert('メッセージを入力してください。');
  });
}

function pageReload(){
  setInterval(function() {
    $.ajax({
      type: 'GET',
      url: './messages',
      dataType: 'json'
    })
    .done(function(data) {
      $.each(data.messages, function(i, message) {
        var html = buildHTML(message);
        $('.chat-messages').append(html);
      })
    })
    .fail(function() {
      'window.location.reload()';
    })
  },5000);
}

