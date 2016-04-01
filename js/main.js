var $body = $('body');
var $box = $('.box');
var $diamond = $('diamond');
var $panel = $('panel');
var $circle = $('circle');
var $list = $('list');


$('btn-show-hide').on('click', function() {
  $(.box).toggleClass('.show');
});

$('btn-move').on('click', function() {
  $(.diamond).toggleClass('.show');
});
