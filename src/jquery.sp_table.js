/*
jQuery sp_table Plugin v1.0
by @i705
https://github.com/i705/sp_table
*/
;(function($, undefined){
	$.fn.sp_table = function(option){
		
		var w = $(window).width();
		
		option = $.extend({
			minWidth : w,
			scroll : true,
			wrapClass : 'sp_table_wrap',
		}, option);
		
		this.each(function(){
			if($(this).width() > w && option.scroll == true){
				$(this).wrap('<div class="'+option.wrapClass+'" style="width:'+option.minWidth+'; overflow: scroll;" />');
			}
		});
		
		return this;
	};
})(jQuery);