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
    scrollTop: $('.chat-messages').height()
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
  if (window.location.href.match(/messages/)) {
    setInterval(function() {
      $.ajax({
        type: 'GET',
        url: './messages',
        dataType: 'json'
      })
      .done(function(data) {
        var number = data.messages.length;
        var html = '';
        for(var i = 0; i < number; i++) {
          html += buildHTML(data.messages[i]);
        };
        $('.chat-messages').append(html);
      })
      .fail(function() {
        alert('メッセージを読み込めませんでした。');
        'window.location.reload()';
      })
    },5000);
  };
}
