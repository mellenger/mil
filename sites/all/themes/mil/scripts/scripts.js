/**
 * @file
 * Attaches behaviors for the Contextual module.
 */

(function ($) {



Drupal.behaviors.imagesizeSwap = {
  attach: function (context) {

    // $("article.node-article img").each(function(){
    //   var path = $(this).attr('src');
    //   path = path.split("files");
    //   path = path[0] + "files/styles/large/public/" + path[1];
    //   $(this).attr('src', path);
    // });

  }
};

Drupal.behaviors.teamcycle = {
	attach: function (context){

		var i=0;
		$('#panels-ipe-paneid-5 .view-footer a').each(function(){
			$(this).attr('data-slide-index', i);
			i++;
		});

		$('#panels-ipe-paneid-5 ul').bxSlider({
			pagerCustom: '#panels-ipe-paneid-5 .view-footer .view-content'
		});
	}
};

Drupal.behaviors.homepageselector = {
	attach: function(context){

		$('.region-two-66-33-bottom h2.pane-title').click(function(){
			$('.region-two-66-33-bottom h2.pane-title').not(this).parent().find('.block-content').hide(500);
			$(this).parent().find('.block-content').show(500);
		});

		$('.region-two-66-33-bottom h2.pane-title').eq(0).click();
	}
};

})(jQuery);