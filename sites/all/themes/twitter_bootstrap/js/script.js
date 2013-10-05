(function ($) {
  $( document ).ready(function() {
    window.lwSpeed = 500;
    window.lwMargin = 15;

    var ElementInterval = new Array();
    window.returnDrawMouse = new Array();
    var livingWires = new Array();

    var ii=0;
    $('#interactive span').each(function(){

      livingWires[ii] = new Array( 
        [ Math.round($(this).attr('x1')), Math.round($(this).attr('y1')) ],
        [ Math.round($(this).attr('x2')), Math.round($(this).attr('y2')) ] 
        );
      ii++;
    });


    function compute(x1, y1, x2, y2) { // draw a line connecting elements

      //console.log('ran');

        var fromTop = $(document).height() - ( $(window).scrollTop()+$('#lw3dwrapper').height() );

        if(fromTop > 0){
          console.log( 'x1: '+x1 + '    //    w/2: ' + $('#livingwire-wrapper').width()/2 );
          if( x1 > ($('#livingwire-wrapper').width()/2) ){
            x1 = x1 + Math.floor( (Math.random()* 1)+1) + ((fromTop/2)*-1 );
            y1 = y1 + Math.floor( (Math.random()* 1)+1) + ((fromTop/4)*1 );

            x2 = x2 + Math.floor( (Math.random()* 1)+1) + ((fromTop/4)*1 );
            y2 = y2 + Math.floor( (Math.random()* 1)+1) + ((fromTop/4)*-1 );
          }else{
            x1 = x1 + Math.floor( (Math.random()* 1)+1) + ((fromTop/2)*1 );
            y1 = y1 + Math.floor( (Math.random()* 1)+1) + ((fromTop/4)*1 );

            x2 = x2 + Math.floor( (Math.random()* 1)+1) + ((fromTop/4)*1 );
            y2 = y2 + Math.floor( (Math.random()* 1)+1) + ((fromTop/4)*-1 );
          }
        }

        var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
        var cx = ((x1 + x2) / 2) - (length / 2);
        var cy = ((y1 + y2) / 2) - (1/2);
        var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
        return Array( Math.round(cx) , Math.round(cy) , Math.round(length) , angle );
    }

    function scrollRedraw(){
        $.each(livingWires, function(index, value){

            var elemData = compute( 
              value[0][0], 
              value[0][1], 
              value[1][0], 
              value[1][1] 
            );

          $('#lwire-'+index).css({
            'left': elemData[0] +'px',
            'top': elemData[1] +'px',
            'width': elemData[2] +'px'
          }).rotateElm(elemData[3], 0);

        });
    }

    window.timeout=true;
    $(window).scroll(function(){
      if(window.timeout){
        window.timeout=false;
        setTimeout(function(){
          scrollRedraw();
          window.timeout=true;
        }, 15);
      }
    });
    
    //setInterval(function(){ scrollRedraw(); }, 250);

    $.fn.rotateElm = function(degree, speed) {
      this.css({
        '-webkit-transform': 'rotate(' + degree + 'deg)',
        '-moz-transform': 'rotate(' + degree + 'deg)',
        '-ms-transform': 'rotate(' + degree + 'deg)',
        '-o-transform': 'rotate(' + degree + 'deg)',
        'transform': 'rotate(' + degree + 'deg)',
        'zoom': 1
      }, speed);
    };


    $.fn.curRotation = function(){
        var matrix = this.css("-webkit-transform") ||
        this.css("-moz-transform")    ||
        this.css("-ms-transform")     ||
        this.css("-o-transform")      ||
        this.css("transform");
        if(matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } else { var angle = 0; }
        return (angle < 0) ? angle +=360 : angle;
    };


    $('#livingwire-wrapper').css({ 
      'left': $(window).width()/2 - $('#livingwire-wrapper').width()/2 +'px',
      //'top' : $('#lw3dwrapper').height()/2 - $('#livingwire-wrapper').height()/2 +'px',
      'bottom': '25px'
    });

    // PRINT OUT DESIGN
    $.each(livingWires, function(index, value){
      var elemData = compute( value[0][0], value[0][1], value[1][0], value[1][1] );

      $('#livingwire-wrapper').append('<i id="lwire-'+index+'"></i>')

      $('#lwire-'+index).css({
        'left': elemData[0] +'px',
        'top': elemData[1] +'px',
      });

      $('#lwire-'+index).animate({
        'width': elemData[2] +'px'
      }, { queue: false, duration: window.lwSpeed }).rotateElm(elemData[3], window.lwSpeed);
    });

});

})(jQuery);