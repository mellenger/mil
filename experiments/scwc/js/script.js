$(document).ready(function(){
	$('.wrapper-content').css({'width': $('html').width() * $('.content-pane').length});
	$('.content-pane').css({'width': $('html').width()});
  $('[data-link]:not([data-collector])').click(function(e){
    e.preventDefault();
    dataLink($(this).attr('data-link'));
  });
  $('[data-collect]').click(function(e){
    e.preventDefault();
    dataCollector($(this).attr('data-collect'), $(this).attr('data-colid'));
  });
});


function dataCollector(col, cid){
  var dataColEndPos = $('[data-collector="'+col+'"]:not(.clone) [data-colid="'+cid+'"]').offset();
  var dataColStartPos = $('[data-collect="'+col+'"][data-colid="'+cid+'"]:not(.clone)').offset();
  var dataColStartClone = $('[data-collect="'+col+'"][data-colid="'+cid+'"]:not(.clone)').clone();
  console.log(dataColEndPos);
  console.log(dataColStartPos);

  $('body').prepend(dataColStartClone);
  $('body > [data-collect]').addClass('clone').css({ 'top': dataColStartPos.top, 'left': dataColStartPos.left });;
  $('body > [data-collect]').animate({
    'top': dataColEndPos.top,
    'left': dataColEndPos.left,
  }, 500, function(){
    $('body > [data-collect]').remove();
    $('[data-collector="'+col+'"]:not(.clone) [data-colid="'+cid+'"]').css({'visibility': 'inherit'});
    $('[data-collect="'+col+'"][data-colid="'+cid+'"]:not(.clone)').removeAttr('data-collect').removeAttr('data-colid');
    window.dataColid = true;
    $('[data-collector="'+col+'"]').find('[data-colid]').each(function(){
      if($(this).css('visibility') != 'visible'){
        window.dataColid = false;
      }
    });
    if(window.dataColid === true){
      $('[data-collector="'+col+'"]').addClass('completed');
      $('[data-collector="'+col+'"]').click(function(e){
        dataLink($(this).attr('data-link'));
      }); 
    }

  });
}


function dataLink(dlink){
  var runif = true;
  if($('.content-pane:not(.active) [data-link="'+dlink+'"]').attr('data-collector') != undefined){
    runif = false;
    if($('.content-pane:not(.active) [data-link="'+dlink+'"]').hasClass('completed')){
      runif = true;
    }
  }
  console.log(runif);
  console.log($('.content-pane:not(.active) [data-link="'+dlink+'"]').attr('data-collector'));
  if(runif){
    var dataLinkEndPos = $('.content-pane:not(.active) [data-link="'+dlink+'"]').offset();
    var dataLinkStartPos = $('.content-pane.active [data-link="'+dlink+'"]').offset();
    var dataLinkStart = $('.content-pane.active [data-link="'+dlink+'"]').clone();
    // console.log(dataLinkStartPos);
    // console.log(dataLinkEndPos);

    $('.content-pane:not(.active) [data-link="'+dlink+'"]').css({'visibility': 'hidden'});
    $('.content-pane.active [data-link="'+dlink+'"]').css({'visibility': 'hidden'});

    $('body').prepend(dataLinkStart);
    $('body > [data-link]').css({
      'top': dataLinkStartPos.top - $(window).scrollTop(),
      'left': dataLinkStartPos.left,
      'margin-top': 0,
      'margin-left': 0,
      'padding-top': 0,
      'padding-left': 0,
     });

    if((dataLinkStartPos.top - dataLinkEndPos.top) > $(window).scrollTop()){
      //console.log('to close to the top');
      $('body > [data-link]').animate({
        'top':  $('body > [data-link]').offset().top - ((dataLinkStartPos.top - dataLinkEndPos.top)),
      }, 350);
    }else if((dataLinkEndPos.top - dataLinkStartPos.top) > ($(document).height() - ($(window).scrollTop() + $(window).height()))){
      //console.log('to close to the bottom');
      $('body > [data-link]').animate({
        'top': Math.round(($('body > [data-link]').offset().top - $(window).scrollTop()) + (Math.abs((dataLinkEndPos.top - dataLinkStartPos.top)) - ($(document).height() - ($(window).scrollTop() + $(window).height()))) ),
      }, 350);
    }

    $('.wrapper-content').animate({
      'left': (dataLinkEndPos.left - (dataLinkStartPos.left + $('.wrapper-content').offset().left) )*-1,
    }, 750, function(){




      $('body').animate({
        'scrollTop': $(window).scrollTop() + (dataLinkEndPos.top - dataLinkStartPos.top),
      }, 500, function(){
        $('.content-pane:not(.active) [data-link="'+dlink+'"]').css({'visibility': 'visible'});
        $('.content-pane.active [data-link="'+dlink+'"]').css({'visibility': 'visible'});
        $('body > [data-link]').remove();
        $('.content-pane:not(.active) [data-link="'+dlink+'"]').parents('.content-pane').addClass('add');
        $('.content-pane.active [data-link="'+dlink+'"]').parents('.content-pane').addClass('remove');
        $('.remove').removeClass('active').removeClass('remove');
        $('.add').addClass('active').removeClass('add');
      });
    });
  }
}


