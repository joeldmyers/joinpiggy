var appVerChkInt = setInterval(function() {
    var hasVer = $('toolbar#browserappinstalled').attr('version');
    var app_uid = $('toolbar#browserappinstalled').attr('app_uid');
    if (hasVer) {
        $.post('/pingback', { ver: hasVer , app_uid:app_uid}, function() {});
        clearInterval(appVerChkInt);
        appVerChkInt = null;
    }
}, 1000);
