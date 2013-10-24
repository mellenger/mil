(function ($) {

  $.fn.baller = function(options){
    return this.each(function(){
      var elm = this;
      var defaults = {
        'topArg': function(elm){ return $(elm).offset().top - $(window).height();},
        'bottomArg': function(elm){ return false },
        'leftArg': function(elm){ return false },
        'rightArg': function(elm){ return false },
        'startCallback': function(elm){ console.log('ran'); $(elm).addClass('ballerd'); },
        'endCallback': false,
        'scrollTop': $('body').attr('data-scroll-top'),
        'scrollLeft':$('body').attr('data-scroll-left'),
      };

      var ifran = {
        'topRan': ($(this).attr('data-top-ran'))? true : false,
        'leftRan': ($(this).attr('data-left-ran'))? true : false,
      };

      var defaults = $.extend( {}, defaults, ifran );
      var settings = $.extend( {}, defaults, options );

      if(!settings.leftArg(elm)){
        if(!settings.topRan && settings.scrollTop >= settings.topArg(elm)) {
          settings.startCallback(elm);
          $(this).attr('data-top-ran', 'true');
        }else if(typeof(settings.endCallback) === 'function' && settings.topRan && settings.scrollTop >= (settings.topArg(elm) + settings.bottomArg(elm))){
          settings.endCallback(elm);
          //$(this).attr('data-top-ran', 'false');
        }
      }else{
        if(!settings.leftRan && settings.scrollLeft >= settings.leftArg(elm)) {
          settings.startCallback(elm);
          $(this).attr('data-left-ran', 'true');
        }else if(typeof(settings.endCallback) === 'function' && settings.leftRan && settings.scrollLeft >= (settings.leftArg(elm) + settings.rightArg(elm))){
          settings.endCallback(elm);
          //$(this).attr('data-left-ran', 'false');
        }
      }

    });
  };


  $.fn.ballerScroll = function(callback){

    function isTouchDevice(){
      try{
        document.createEvent("TouchEvent");
        return true;
      }catch(e){
        return false;
      }
    }

    return this.each(function(){
      if (isTouchDevice()){
        $(this).delegate('body', 'touchstart', function(e) {
          var scroll = {
           'top':  e.originalEvent.touches[0].pageY - e.originalEvent.touches[0].clientY,
           'left': e.originalEvent.touches[0].pageX - e.originalEvent.touches[0].clientX,
          };
          callback(scroll);
        });
        $(this).delegate('body', 'touchmove', function(e) {
          var scroll = {
           'top':  e.originalEvent.touches[0].pageY - e.originalEvent.touches[0].clientY,
           'left': e.originalEvent.touches[0].pageX - e.originalEvent.touches[0].clientX,
          };
          $('body').attr('data-scroll-top', scroll.top);
          $('body').attr('data-scroll-left', scroll.left);
          callback(scroll);
          this.ease = 0;

          function easeing(i, scroll, settings){
            i = i + 1;
            scroll.top = scroll.top + 1;
            scroll.left = scroll.left + 1;
            if(i < 5){
              clearTimeout(window.easing);
              window.easing = setTimeout(easeing(i, scroll, settings), 20);
              callback(scroll);
            }
          }
          easeing(0, scroll);
        });
      }
      $(this).scroll(function(){
        var scroll = { 'top': $(this).scrollTop(), 'left': $(this).scrollLeft() };
        $('body').attr('data-scroll-top', scroll.top);
        $('body').attr('data-scroll-left', scroll.left);
        callback(scroll);
      });

    });
  };


})(jQuery);
