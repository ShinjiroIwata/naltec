$(document).ready(function () {
  // クリックイベントを設定
  $(".js__acor-btn").on("click", function () {
    // thisキーワードを使用して、クリックされたボタンに最も近いjs__acor-openクラスを持つ要素を選択
    let $answer = $(this).closest(".js__acor-area").find(".js__acor-open");
    $answer.slideToggle(); //
    $(this).toggleClass("js__acor-active");
  });
});
