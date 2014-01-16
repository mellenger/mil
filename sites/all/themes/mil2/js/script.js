(function ($) {
  $(document).ready(function(){
    $('.panel-display').css({'width': $('html').width() * $('.panel-pane').length});
    $('.panel-pane').css({'width': $('html').width()});
    $(window).resize(function(){
      var resizePanes = setTimeout(function(){
        $('.panel-display').css({'width': $('html').width() * $('.panel-pane').length});
        $('.panel-pane').css({'width': $('html').width()});
      }, 350);
    });
  });
})(jQuery);
