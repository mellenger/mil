/**
 * @file
 * Attaches behaviors for the Contextual module.
 */

(function ($) {



// Drupal.behaviors.imagesizeSwap = {
//   attach: function (context) {

//     // $("article.node-article img").each(function(){
//     //   var path = $(this).attr('src');
//     //   path = path.split("files");
//     //   path = path[0] + "files/styles/large/public/" + path[1];
//     //   $(this).attr('src', path);
//     // });

//   }
// };

// Drupal.behaviors.teamcycle = {
// 	attach: function (context){

// 		$('.view-team-members .view-header a').each(function(i){
// 			$(this).attr('data-slide-index', i);
// 		});

// 		$('.view-team-members .view-content ul').bxSlider({
// 			pagerCustom: '.view-team-members .view-header .view-content'
// 		});
// 	}
// };

Drupal.behaviors.homepageselector = {
	attach: function(context){

    var collapsePanels = "body.page-home .region-two-66-33-bottom h2.pane-title";

    $(collapsePanels, context).prepend('<div class="arrow"></div>').parent().find('.block-content').hide();

		$(collapsePanels, context).click(function(){

      if($(this).hasClass('open')){
        $(this).removeClass('open').parent().find('.block-content').hide(500);
      }else{
        $(collapsePanels).not(this).removeClass('open').parent().find('.block-content').hide(500);
        $(this).addClass('open').parent().find('.block-content').show(500);
      }
			
		});

		//$(collapsePanels).last().click();
	}
};


Drupal.behaviors.mellemation = {
  attach: function(context){
    $('.mellemation', context).each(function(){
      $(this).css({'background-image': 'url('+$(this).attr('data-background-image')+')', 'background-position': $(this).attr('data-position') });
    });
  }
};

Drupal.behaviors.ourWorkImages = {
  attach: function(context){

    $('.view-work .region-two-66-33-first .region-inner').cycle();

    $('.view-work img').click(function(e){
      e.preventDefault();

      $('body').prepend('<div class="popover"><img src="'+ $(this).attr('src') +'" /></div>');
      $('.popover').css({
        'position':'fixed',
        'top': '0px',
        'left': '0px',
        'width': '100%',
        'height': '100%',
        'z-index': '50000',
        'background-color':'rgba(255,255,255,0.8)',
        'cursor': 'pointer',
      });

      $('.popover img').css({
        'position':'absolute',
        'top': $(window).height()/2 - $('.popover img').height()/2 + 'px',
        'left': $(window).width()/2 - $('.popover img').width()/2 + 'px',
        'z-index': '50000',
      });

      $('.popover').click(function(){
        $(this).remove();
      });

    });
  }
};



$(document).ready(function(){
    var konami = function(){
      var konamiKeys = new Array();
      konamiKeys = [38,38,40,40,37,39,37,39,66,65,13]
      $('body').bind('keydown', function(e){
        if(konamiKeys[0] == e.keyCode){
          konamiKeys.shift();
          if(konamiKeys.length < 1){
            $('body').prepend('<div class="adwalkon"></div>');
          }
        }
      });
    }
    konami();
});

})(jQuery);