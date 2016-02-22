$(function(){
	$('#display').after('<ul id="nav">').cycle({ 
        fx:     'fade', 
        speed:  'fast', 
        timeout: 0, 
        pager:  '#nav', 
        // callback fn that creates a thumbnail to use as pager anchor 
        pagerAnchorBuilder: function(idx, slide) { 
            return '<li><a href="#"></a></li>'; 
        } 
    });
    var navScrollY = $('#secondary-nav').offset().top;
    $(window).on('scroll',function(){
    	if( window.scrollY >= navScrollY - 25 ){
    		$('#secondary-nav').addClass('scroll');
    	} 
        if( window.scrollY < navScrollY - 26 ){	
            $('#secondary-nav').removeClass('scroll');
        }
    });
});