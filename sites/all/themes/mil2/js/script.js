(function ($) {
  $(document).ready(function(){
    $('.panel-display').css({'width': $('html').width() * $('.panel-pane').length});
    $('.pane-content-wrapper').css({'width': $('html').width()-10});
    $(window).resize(function(){
      var resizePanes = setTimeout(function(){
        $('.panel-display').css({'width': $('html').width() * $('.panel-pane').length});
        $('.pane-content-wrapper').css({'width': $('html').width()-10});
      }, 350);
    });
  });
})(jQuery);
