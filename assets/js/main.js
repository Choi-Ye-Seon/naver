$(document).ready(function () {
  $('#input-search')
    .focus(function () {
      $(this).attr('placeholder', '검색어를 입력해 주세요');
    })
    .blur(function () {
      $(this).attr('placeholder', '');
    })
});
