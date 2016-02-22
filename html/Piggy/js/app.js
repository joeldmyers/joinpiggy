function getBrowser() {
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE';
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/)
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);

    //ipad/mobile check
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return 'mobile';
    } else {
        str = M.join(' ');
        str = str.split(' ')[0];
        return str;
    }

}

function downloadApp() {

    $('#signup-group-modal').modal('hide');
    $('#signup-modal').modal('hide');
    $('#login-modal').modal('hide');
    $('#app-coming-soon-modal').modal('hide');

    if(getBrowser() == 'mobile') {

        $('#app-coming-soon-modal').modal({
            backdrop: 'static'
        }).modal('show');

        //TODO: download mobile app

    } else {

        //detect if on school page /id/:id
        var cur_url = document.URL;
        var isSchool = new RegExp('.*?\\/.*?\\/.*?(\\/)(i)(d)(\\/)(\\d+)(\\/)',["i"]);
        var res = isSchool.exec(cur_url);
        if(res != null) {
            console.log('on school page -> set cookie for id = '+res[5]);
        }

        $('#app-info-modal').modal({
            backdrop: 'static'
        }).modal('show');

        var date = new Date();
        date.setDate(date.getDate());
        date.setMinutes(date.getMinutes() - 60);

        switch(getBrowser()) {
            case "Chrome":
                chrome.webstore.install($('link[rel="chrome-webstore-item"]').attr('href'), function() {
                    if ($.cookie('open_url')) {
                        var url = $.cookie('open_url');
                        $.removeCookie('open_url', { expires: date, path: '/', domain: '.' + document.location.host });
                        document.location = url;
                    }
                }, function() {
                    if ($.cookie('open_url')) {
                        var url = $.cookie('open_url');
                        $.removeCookie('open_url', { expires: date, path: '/', domain: '.' + document.location.host });
                        document.location = url;
                    }
                });
                setTimeout(function() {
                    $('#app-info-modal').modal('hide');
                }, 5000);
                break;
            case "Firefox":
                var url = 'http://d127ctesy9lxrv.cloudfront.net/appfiles/Piggy.xpi';
                if ($.cookie('open_url')) {
                    window.open(url, '_self');
                    var open_url = $.cookie('open_url');
                    $.removeCookie('open_url', { expires: date, path: '/', domain: '.' + document.location.host });
                    setTimeout(function() {
                        document.location = open_url;
                    }, 3500);
                } else {
                    document.location = url;
                }
                break;
            case "Safari":
                var url = 'http://d127ctesy9lxrv.cloudfront.net/appfiles/Piggy.safariextz';
                if ($.cookie('open_url')) {
                    window.open(url, '_self');
                    var open_url = $.cookie('open_url');
                    $.removeCookie('open_url', { expires: date, path: '/', domain: '.' + document.location.host });
                    setTimeout(function() {
                        document.location = open_url;
                    }, 3500);
                } else {
                    document.location = url;
                }
                break;
            case "IE":
                var url = 'http://d127ctesy9lxrv.cloudfront.net/appfiles/Piggy.exe';
                if ($.cookie('open_url')) {
                    window.open(url, '_self');
                    var open_url = $.cookie('open_url');
                    $.removeCookie('open_url', { expires: date, path: '/', domain: '.' + document.location.host });
                    setTimeout(function() {
                        document.location = open_url;
                    }, 3500);
                } else {
                    document.location = url;
                }
                break;
        }

    }
}