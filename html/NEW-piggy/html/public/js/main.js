
$(window).load(function(){
  
  // Init Skrollr
    var s = skrollr.init({
        forceHeight: false,
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });


    $('a.scroll-down').bind('click',function(event){
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 2000,'easeOutExpo');

        event.preventDefault();
    });

    var optionsC = {
      useEasing : false, 
      useGrouping : false, 
      separator : ',', 
      decimal : '.', 
      prefix : '', 
      suffix : '' 
    };


   var numAnim = new CountUp("counter", 60789, 90900, 0, 10000, optionsC);
   



    var waypoint = new Waypoint({
      element: document.getElementById('counter'),
      handler: function(direction) {
        numAnim.start();
      },
      offset: '75%'
    });



});

