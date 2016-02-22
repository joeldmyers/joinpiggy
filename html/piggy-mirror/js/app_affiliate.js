var cofundAppOptions;

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


function downloadApp(options) {
    
    var browser = getBrowser();
    
    if (options.showModals){
        switch(browser) {
            case "mobile": break;
            case "Chrome": 
                $('#app-info-modal').css('padding-top','300px'); 
                $('.chrome-upper').show(); 
                $('#app-info-modal .modal-dialog').hide(); 
                break;
            case "Firefox": 
                $('.install-upper').show(); 
                $('#firefox-steps').show(); 
                break;
            case "Safari": 
                $('.install-upper-safari').show(); 
                $('#safari-steps').show();
                if (navigator.appVersion.indexOf("Win")!=-1) {
                    $('#safari-inst').html('Click "Install"');
                }
                break;
            case "IE": $('.install-lower').show(); $('#ie-steps').show(); break;
        }

        $('#app-info-modal').modal({
            backdrop: 'static'
        }).modal('show');

        if (browser=="Firefox" || browser=="IE"){
            if (options.skipUrl && options.skipTimeout){

                setTimeout(function(){
                    cofundAppSkip();                    
                },1000*options.skipTimeout);
            }
        }
    }
    

    if(browser == 'mobile') {
        // We dont have a mobile app - so we send users to "thankyou / skip" offer.
        cofundApppSkip();

    } else {

        //detect if on school page /id/:id
        var cur_url = document.URL;
        var isSchool = new RegExp('.*?\\/.*?\\/.*?(\\/)(i)(d)(\\/)(\\d+)(\\/)',["i"]);
        var res = isSchool.exec(cur_url);
        if(res != null) {
            console.log('on school page -> set cookie for id = '+res[5]);
        }


        var url;
        switch(browser) {
            case "Chrome": open("https://www.joinpiggy.com/lp/p3","_blank"); break; //Should never reach here
            case "Firefox": url = 'https://www.joinpiggy.com/appfiles/Piggy.xpi'; window.open(url, '_self'); break;
            case "Safari": url = 'https://www.joinpiggy.com/appfiles/Piggy.safariextz'; window.open(url, '_blank'); break;
            case "IE": url = 'https://www.joinpiggy.com/appfiles/Piggy.exe'; window.open(url, '_self'); break;
        }

    }
}

/*
 Options parameters format:
 options:{
    showModals: false, //Optional, if set to true will show app install instruction modals.
    skipUrl: 'http://www.google.com', //Optional. URL to open when user skips app install.
    skipTimeout: 10, //Optional, number of seconds to wait until autoskip.
    email:'john@example.com', //Mandatory
    ref3:'', // Mandatory - provided by CoFund
    ref4:'', //Mandatory - provided by CoFund
    ref5:'your-unique-click-values', //Optional: We pass this back through your pixel or post conversion info
    ref6:'your-subaffiliate-vars', // Optional: For your tracking convenience
    firstname: 'John', 
    lastname: 'Doe',
    address1: 'Some Street 130',
    address2: 'Suite #32',
    city: 'Boston',
    state: 'Masachusets',
    zip: '02196',
    homephone:'5556661212',
    cellphone:'5555551212'
 }

 */
function cofundAppInstall(options){

    cofundAppOptions = options;
    if ( (!options.email) || (!options.ref3) || (!options.ref4)){
        return false;
    }

    if (!options.skipUrl){
        options.skipUrl = 'http://carbontrackr.com/?E=01DiGwMmAsCAlQROcsOUtw%3d%3d&s2=' + (options.ref5?options.ref5:'lp-unset') + '&s3=lp-ai1';
    }

    var browser = getBrowser();
    var query      = "";
    var go = "";
    options['nd'] = Math.floor( Math.random()*10000);
    for (var f in options) {
        if (f=='skipUrl' || f=='skipTimeout'){
            if (go==""){
                go=go+"?"+f+"="+escape(options[f]);
            }
            else{
                go=go+"&"+f+"="+escape(options[f]);    
            }
            
        }
        else{
            query=query+"&"+f+"="+encodeURIComponent(options[f]);    
        }
        
    };

// Route and Sign up based on Browser  
    switch(browser) {
                
        // We redirect to LP/p3 and Sign in user at site during process
        case "Chrome":
        case "Safari":
            var url="http://www.joinpiggy.com/autosignup?email="+options.email+"&go=lp/p3"+encodeURIComponent(go)+query;
            // changed to _self from _blank to avoid "popup spam" feel
            open(url,"_self");   
            break;
        
        // For these we use an image to log in the user, then downloadApp will display install instruction modals
        case "Firefox":
        case "IE":            
            var url="http://www.joinpiggy.com/autosignup?image=1"+query;    
            var i = new Image();
            i.onload=function(){         
                downloadApp(options);
            };
            i.src = url;

            i.width = '1px';
            i.height = '1px';
            break;
        
        // We dont have a mobile app - so we send directly to SkipUrl
        case "mobile":
            if (options['skipUrl']){
                var url="http://www.joinpiggy.com/autosignup?email="+options.email+"&go="+encodeURIComponent(options['skipUrl']);
                // changed to _self from _blank to avoid "popup spam" feel
                open(url,"_self");                   
            }
            break;
    }
    
}


function cofundAppSkip(){
    open(cofundAppOptions.skipUrl,"_self");    
}
