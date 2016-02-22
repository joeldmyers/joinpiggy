$(function(){
    $('button.navbar-toggle').on( "click", function() {
        $('nav.navbar-collapse ul li.tohide').toggle('slow');
        $('nav.navbar-collapse ul li.dropdown-hide').toggle();
    });
});

$(function(){
    $(".ddm1-h").hover(function(){
        $('.ddm1').show();
    }, function(){
        $('.ddm1').hide();
    });
    $(".ddm1").hover(function(){
        $('.ddm1').show();
    }, function(){
        $('.ddm1').hide();
    });
});

$(function(){
    $(".ddm2-h").hover(function(){
        $('.ddm2').show();
    }, function(){
        $('.ddm2').hide();
    });
    $(".ddm2").hover(function(){
        $('.ddm2').show();
    }, function(){
        $('.ddm2').hide();
    });
});

function checkApp() {
    if(getBrowser() == 'Chrome') {
        downloadApp();
    } else {
        window.location.href = '/cashback-apps?dl=1';
    }
}

$(function(){
    $(".ddm3-h").hover(function(){
        $('.ddm3').show();
    }, function(){
        $('.ddm3').hide();
    });
    $(".ddm3").hover(function(){
        $('.ddm3').show();
    }, function(){
        $('.ddm3').hide();
    });
});

$("#search-form").submit(function() {
    $.ajax({
       type: "GET",
       url: "/searchexact",
       data: $("#search-form").serialize(), // serializes the form's elements.
       success: function(data)
       {
           ga('send', 'pageview', $('#search').val());
           data = JSON.parse(data);
           if(data) {
               //var win = window.open('/int?s='+data.store_id, '_blank');
               //win.focus();
           }
           window.location.href = '/search?keywords='+$('#search').val();
       },
       async: false
    });
    return false;
});

var search_index = 0;
var search = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('store_name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: '/jsonstores?keywords=%QUERY'
});
search.initialize();
$(document).ready(function(){
    $('.typeahead').typeahead({
        hint: false,
        highlight: true,
        minLength: 0,
        autoselect: false
    }, {
    name: 'search',
    displayKey: 'store_name',
    source: search.ttAdapter(),
    templates: {
        suggestion: Handlebars.compile('<div class="typeahead-image pull-left"><img src="{{image}}"/></div><p><span style="text-align:left"><strong>{{store_name}}</strong><br/></span><span>{{store_discount}}</span></p><span class="clearfix"></span>')
    }
  });
  $('.typeahead').on('typeahead:selected', function (e, datum) {
        //var win = window.open('/int?s='+datum.store_id, '_blank');
        //win.focus();
        window.location="/coupons/"+datum.short_name;
     }).on('typeahead:autocompleted', function (e, datum) {
        //var win = window.open('/int?s='+datum.store_id, '_blank');
        //win.focus();
        window.location="/coupons/"+datum.short_name;
     });
});