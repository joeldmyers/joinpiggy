$(window).load(function(){var e=skrollr.init({forceHeight:!1,render:function(e){}});$("a.scroll-down").bind("click",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-0},2e3,"easeOutExpo"),e.preventDefault()});var t={useEasing:!1,useGrouping:!1,separator:",",decimal:".",prefix:"",suffix:""},n=new CountUp("counter",60789,90900,0,1e4,t),o=new Waypoint({element:document.getElementById("counter"),handler:function(e){n.start()},offset:"75%"})});