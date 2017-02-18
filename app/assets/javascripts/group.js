$(function() {
  $('#user-search-field').on("keyup", function(e) {
    e.preventDefault();
    AjaxSearch();
  });
});

function buildAddingList(user) {
  var list = `<div class="chat-group-user", id="adding-user">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="chat-group-user__btn"><div class="chat-group-user__btn--add">追加</div></p>
                </div>`;
  return list;
}

function buildAddedList(user) {
  var list = `<li class="chat-group-user">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="chat-group-user__btn"><div class="chat-group-user__btn--remove">削除</div></p>
                </li>`;
  return list;
}

function AjaxSearch() {
  var keyword = $('#user-search-field').val();
  $.ajax({
    type: 'GET',
    url: '/users/search',
    data: { name: keyword },
    dataType: 'json'
  })
  .done(function(data) {
    $("#adding-user").remove();
    if (keyword.length !== 0) {
      $.each(data, function(i, user) {
        var list = buildAddingList(user);
        $('#user-search-result').append(list);
      });
    }
  })
  .fail(function() {
    alert('エラーが発生しました。');
  });
  return false;
}