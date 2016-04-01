$('.btn-show-hide').on('click', function () {
  $('.box').toggleClass('show');
});

$('.btn-move').on('click', function () {
  $('.diamond').toggleClass('move');
});

$('.btn-collapse-expand').on('click', function () {
  $('.panel').toggleClass('collapse');
});

$('.btn-bounce').on('click', function () {
  $('.circle').addClass('bounce');
});

$('.circle').on('animationend', function () {
  $(this).removeClass('bounce');
});

$('.btn-append').on('click', function () {
  $('.list').append('<li> New List Item</li>');
});
