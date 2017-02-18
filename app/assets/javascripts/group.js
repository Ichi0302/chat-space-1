$(function() {
  $('#user-search-field').on("keyup", function() {
    AjaxSearch();
  });
});

function buildAddingList(user) {
  var list = `<div class="adding-group-user">
                  <p class="adding-group-user__name">${ user.name }</p>
                  <a class="adding-group-user__btn">追加</a>
              </div>`;
  return list;
}

function buildAddedList(user) {
  var list = `<li class="chat-group-user">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="chat-group-user__btn">削除</a>
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
    console.log("hey");
    $(".adding-group-user").remove();
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