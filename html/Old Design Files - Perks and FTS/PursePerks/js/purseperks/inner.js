$(function(){

	$('#cat-drop select').customSelect();

	$('#slides').after('<ul id="nav">').cycle({ 
        fx:     'fade', 
        speed:  'fast', 
        timeout: 0, 
        pager:  '#nav', 
         
        // callback fn that creates a thumbnail to use as pager anchor 
        pagerAnchorBuilder: function(idx, slide) { 
            return '<li><a href="#"></a></li>'; 
        } 
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $("#popular-stores li").removeClass('hidden-md')
        $('#download-app').css({
            'display': 'none'
        });
        $('#testimonials').css({
            'display': 'none'
        });
    }
});