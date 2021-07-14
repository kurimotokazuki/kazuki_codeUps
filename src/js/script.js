//スクロールに応じてヘッダーの背景色が変化
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $('.header').addClass('active');
  } else {
    $('.header').removeClass('active');
  }
});

  //ページトップへ戻る
  var $pageTop = $('.page-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  //ハンバーガーメニュー
$('.burger-btn').on('click', function () {
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');
});

//スライダー
$('.slider').slick({
  dots: true
});