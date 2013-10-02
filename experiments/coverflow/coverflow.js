coverFlow = {};


coverFlow.coverAction.CatPicture.down = function(){
	//do stuff
}

coverFlow.coverAction = function(y){
	if(y > 100 && coverFlow.coverAction.CatPicture.ran != 1){
		coverFlow.coverAction.CatPicture.down();
		coverFlow.coverAction.CatPicture.ran == 1;
	}else if(y < 100 && coverFlow.coverAction.CatPicture.ran == 1){
		coverFlow.coverAction.CatPicture.up();
		coverFlow.coverAction.CatPicture.ran == 0;
	}
}

coverFlow.scrollEvent = function(){
	$(window).scroll(function(){
		var y = $(window).scrollTop();
		coverFlow.coverAction(y);
	});
}


coverFlow.scrollEvent();