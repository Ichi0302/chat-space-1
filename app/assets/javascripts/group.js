$(document).on('turbolinks:load', function() {
  $('#user-search-field').on("keyup", function() {
    AjaxSearch();
  });
  $(document).on("click", '.adding-group-user__btn', function() {
    var user = $(this).parent();
    AddingUser(user);
  });
  $(document).on("click", '.chat-group-user__btn', function() {
    var user = $(this).parent();
    RemoveUser(user);
  });
});

function buildAddingList(user) {
  var list = `<div class="adding-group-user" data-id="${user.id}" data-name="${user.name}">
                <p class="adding-group-user__name">${ user.name }</p>
                <a class="adding-group-user__btn">追加</a>
              </div>`;
  return list;
}

function buildAddedList(id, name) {
  console.log("hjhhhhh")
  var list = `<li class="chat-group-user" data-id="${id}"><input type="hidden" name="group[user_ids][]" value="${id}" />
                <p class="chat-group-user__name">${name}</p>
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
    $(".adding-group-user").remove();
    if (keyword.length !== 0) {
      $.each(data.users, function(i, user) {
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

function AddingUser(user) {
  var id   = user.data("id");
  var name = user.data("name");
  user.remove();
  var list = buildAddedList(id, name);
  $("#group-users").append(list);
}

function RemoveUser(user){
  user.remove();
}
