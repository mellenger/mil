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

Drupal.behaviors.teamcycle = {
	attach: function (context){

		$('.view-team-members .view-header a').each(function(i){
			$(this).attr('data-slide-index', i);
		});

		$('.view-team-members .view-content ul').bxSlider({
			pagerCustom: '.view-team-members .view-header .view-content'
		});
	}
};

Drupal.behaviors.homepageselector = {
	attach: function(context){

    var collapsePanels = "body.page-home .region-two-66-33-bottom h2.pane-title";

		$(collapsePanels).click(function(){
			$(collapsePanels).not(this).parent().find('.block-content').hide(500);
			$(this).parent().find('.block-content').show(500);
		});

		$(collapsePanels).eq(0).click();
	}
};

})(jQuery);