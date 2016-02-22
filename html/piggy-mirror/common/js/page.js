$(document).ready(function() {
    $('#play-button').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    /*
    $.ajax({
        url: "/page_load_hit?plid=<?php echo $page_load_id; ?>"
    });
    */
});

function addFavorite(user_id, store_id, offer_id) {
    if(user_id > 0) {
        $.ajax({
            url: "/addfavorites?user_id="+user_id+"&store_id="+store_id+"&offer_id="+offer_id,
            type: 'GET',
            success: function(data) {
                if(data == "Must be logged in") {
                    $('#signup-modal').modal({
                        backdrop: 'static'
                    }).modal('show');
                }
            }
        });
    } else {
        $('#signup-modal').modal({
            backdrop: 'static'
        }).modal('show');
    }
}

function deleteFavorite(user_id, store_id, offer_id) {
    $.ajax({
        url: "/deletefavorites?user_id="+user_id+"&store_id="+store_id+"&offer_id="+offer_id,
        type: 'GET',
        success: function(data) {
            window.location.reload(false);
        }
    });
}

function offerLike(user_id, offer_id) {
    if(user_id > 0) {
        $.ajax({
            url: "/offerlike?user_id="+user_id+"&offer_id="+offer_id,
            type: 'GET',
            success: function(data) {
                //window.location.reload(false);
            }
        });
    } else {
        $('#signup-modal').modal({
            backdrop: 'static'
        }).modal('show');
    }
}

function offerDislike(user_id, offer_id) {
    if(user_id > 0) {
        $.ajax({
            url: "/offerdislike?user_id="+user_id+"&offer_id="+offer_id,
            type: 'GET',
            success: function(data) {
                //window.location.reload(false);
            }
        });
    } else {
        $('#signup-modal').modal({
            backdrop: 'static'
        }).modal('show');
    }
}

function setClicksJS(store_id, offer_id, user_id, site_id, advertiser_id, cashback_percent, transaction_id, session_id) {

    var url = "/setclicksjs?session_id="+session_id+"&transaction_id="+transaction_id+"&store_id="+store_id+"&offer_id="+offer_id+"&user_id="+user_id+"&site_id="+site_id+"&advertiser_id="+advertiser_id+"&cashback_percent="+cashback_percent;

    $.ajax({
        url: url,
        type: 'GET',
        success: function(data) {
            console.log(xmlhttp.responseText);
        }
    });
}

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

$("#signup-form1").submit(function() {
    var url = "/signupAjax"; // the script where you handle the form input.
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test($('.signup-form input[name=email]').val())) {

        $.ajax({
            type: "POST",
            url: url,
            data: $("#signup-form1").serialize(), // serializes the form's elements.
            success: function(data) {
                trackSignupPixels();
                //get user_id and password
                console.log(data);
                res = JSON.parse(data);
                var user_id = res.user_id;
                var user_pw = res.user_pw;
                if(user_id == false) {
                    $('.signup-form input[name=email]').css('border','1px solid red');
                    $('#signup-error').html('There was an error please try again.');
                } else if (user_id == 'e1') {
                    /*$('.signup-form input[name=email]').css('border','1px solid red');
                    $('#signup-error').html('An account already exists with that email address.');*/
                    $('#login-modal').modal({backdrop: 'static'}).modal('show');
                    $('#signup-modal').modal('hide');
                    $('#inputLoginEmail').val($('.modal .signup-form input[name=email]').val());
                    $('#login-modal h4').html('Looks like you already have an account. Please login.').css('font-size', '20px');
                } else {
                    ga('send', 'event', 'sign-up', 'modal', {'nonInteraction': 1});
                    if (window._cofund.siteType == 2) {
                        window.location.href = '/step2';
                    } else {
                        //show password form
                        $('#top-first').hide();
                        $('#top-second').show();
                        $('#signup-step1').hide();
                        $('#signup-step2 input[name=user_id]').val(user_id);
                        $('#signup-step2 input[name=user_pw]').val(user_pw);
                        $('#signup-step2').show();
                    }
                }
            }
        });

    } else {
        $('.signup-form input[name=email]').css('border','1px solid red');
        $('#signup-error').html('Invalid email format.');
    }
    return false; // avoid to execute the actual submit of the form.
});

$("#signup-form2").submit(function() {
    var url = "/passwordAjax"; // the script where you handle the form input.
    if($('.signup-form input[name=newpass2]').val().length >= 8) {

        if($('.signup-form input[name=newpass1]').val() == $('.signup-form input[name=newpass2]').val()) {

            $.ajax({
                type: "POST",
                url: url,
                data: $("#signup-form2").serialize(), // serializes the form's elements.
                success: function(data) {
                    if(data = 1) {
                        window.location.href = '/coupons';
                    } else {
                        //fail
                    }
                }
            });

        } else {
            $('.signup-form input[name=newpass1]').css('border','1px solid red');
            $('.signup-form input[name=newpass2]').css('border','1px solid red');
            $('#password-message').html('Passwords do not match!');
        }

    } else {
        $('.signup-form input[name=newpass1]').css('border','1px solid red');
        $('.signup-form input[name=newpass2]').css('border','1px solid red');
        $('#password-message').html('Password must be 8 characters long!');
    }
    return false; // avoid to execute the actual submit of the form.
});

function showRetrievePassword() {
    $('#loginDivId').hide();
    $('#retrievePasswordDivId').show();
    $('#forgotEmailInput').val($('#inputLoginEmail').val());
    $('#passwordSentDiv').hide();
}
function showLogin() {
    $('#loginDivId').show();
    $('#retrievePasswordDivId').hide();
    $('#passwordSentDiv').hide();
}

$("#login-form").submit(function() {
    if (window.location.href.indexOf("login") == -1) {
        var url = "/loginAjax";
        $.ajax({
            type: "POST",
            url: url,
            data: $("#login-form").serialize(), // serializes the form's elements.
            success: function(data)
            {
                if(data == 'passworderror') {
                    $('#login-message').html('Incorrect password!');
                } else if (data == 'nousererror') {
                    $('#login-message').html('No user exists with that email. Would you like to <a style="cursor:pointer" onclick="$(\'#signup-modal\').modal({backdrop: \'static\'}).modal(\'show\');$(\'#login-modal\').modal(\'hide\');$(\'.modal .signup-form input[name=email]\').val($(\'#inputLoginEmail\').val()); $(\'.modal .signup-form input[name=newpass1]\').val($(\'#inputPassword69\').val())">create one</a> with this information?');
                } else {
                    location.reload();
                }
            }
        });
        return false; // avoid to execute the actual submit of the form.
    }
});

$("#getpassword-form").submit(function() {
    var url = "/getpasswordAjax"; // the script where you handle the form input.
    $.ajax({
        type: "POST",
        url: url,
        data: $("#getpassword-form").serialize(), // serializes the form's elements.
        success: function(data)
        {
            if (data == '') {
                $('#passwordSentDiv').show();
                $('#retrievePasswordDivId').hide();
                $('#login-with-fb').hide();
                $('.modal-body').removeClass('dark');

                window.setInterval(function() {
                    showLogin();
                }, 10000);

            } else {
                $('#getpw-error').html("Email address doesn't exist in our database.");
                return false;
            }

        }
    });
    return false; // avoid to execute the actual submit of the form.
});

function closeModal() {
    if(window.location.href.indexOf("login") == -1) {
        $('#login-modal').modal('hide');
    } else {
        window.location.href = '/';
    }
}

$('#app-device').val(navigator.userAgent);

$("#app-coming-soon-form").submit(function() {
    var url = "/getappAjax"; // the script where you handle the form input.
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(regex.test($('#appEmailInput').val())) {

        $.ajax({
            type: "POST",
            url: url,
            data: $("#app-coming-soon-form").serialize(), // serializes the form's elements.
            success: function(data)
            {
                if(data > 0) {
                    $('#getUserEmailDiv').hide();
                    $('#newAppEmail').html($('#appEmailInput').val());
                    $('#thanksDiv').show();
                } else {
                    $('#app-signup-error').html('Submit failed. Please try again.' + data);
                }

            }
        });

    } else {
        $('#appEmailInput').css('border','1px solid red');
        $('#app-signup-error').html('Invalid email format.');
    }
    return false; // avoid to execute the actual submit of the form.
});

var browser = getBrowser();
$('#browser-type').html(browser);
switch(browser) {
    case "mobile": break;
    case "Chrome": $('#app-info-modal').css('padding-top','300px'); $('.chrome-upper').show(); $('#app-info-modal .modal-dialog').hide(); break;
    case "Firefox": $('.install-upper').show(); $('#firefox-steps').show(); break;
    case "Safari":
    $('.install-upper-safari').show();
    $('#safari-steps').show();
    if (navigator.appVersion.indexOf("Win")!=-1) {
        $('#safari-inst').html('Click "Install"');
    }
    break;
    case "IE": $('.install-lower').show(); $('#ie-steps').show(); break;
}

var step = 1;
$(document).ready ( function(){
    $('.school-modal-title').html(' '+$('#school-name').html());
    //Using nick adcopy    $('#school-modal-description').html($('#school-description').html());
});

$("#group-signup-form1").submit(function() {
    var url = "/signupAjax"; // the script where you handle the form input.
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test($('#add-sign-up form input[type="email"]').val())) {

        $.ajax({
            type: "POST",
            url: url,
            data: $("#group-signup-form1").serialize(), // serializes the form's elements.
            success: function(data)
            {
                //get user_id and password
                res = JSON.parse(data);
                var user_id = res.user_id;
                var user_pw = res.user_pw;
                if(user_id == false) {
                    $('#add-sign-up form input[type="email"]').css('border','1px solid red');
                    $('#group-signup-error').html('There was an error please try again.');
                } else if (user_id == 'e1') {
                    $('#add-sign-up form input[type="email"]').css('border','1px solid red');
                    $('#group-signup-error').html('An account already exists with that email address.');
                } else {
                    //show password form
                    $('.modal-title').html('Choose a password...');
                    $('#step1').hide();
                    $('#step2').show();
                    step = 2;
                    $('#group-signup-form2 input[name=user_id]').val(user_id);
                    $('#group-signup-form2 input[name=user_pw]').val(user_pw);
                }
            }
        });

    } else {
        $('#add-sign-up form input[type="email"]').css('border','1px solid red');
        $('#group-signup-error').html('Invalid email format.');
    }
    return false; // avoid to execute the actual submit of the form.
});

$("#group-signup-form2").submit(function() {
    var url = "/passwordAjax"; // the script where you handle the form input.
    if($('#step2 .signup-form input[name=newpass2]').val().length >= 8) {

        if($('#step2 .signup-form input[name=newpass1]').val() == $('#step2 .signup-form input[name=newpass2]').val()) {

            $.ajax({
                type: "POST",
                url: url,
                data: $("#group-signup-form2").serialize(), // serializes the form's elements.
                success: function(data)
                {
                    if(data = 1) {
                        $('.modal-title').html("Thanks for Joining! Would you like to install our App?");
                        $('#step2').hide();
                        $('#step3').show();
                        step = 3;
                    } else {
                        //fail
                    }
                }
            });

        } else {
            $('#step2 .signup-form input[name=newpass1]').css('border','1px solid red');
            $('#step2 .signup-form input[name=newpass2]').css('border','1px solid red');
            $('#password-message2').html('Passwords do not match!');
        }

    } else {
        $('#step2 .signup-form input[name=newpass1]').css('border','1px solid red');
        $('#step2 .signup-form input[name=newpass2]').css('border','1px solid red');
        $('#password-message2').html('Password must be 8 characters long!');
    }
    return false; // avoid to execute the actual submit of the form.
});

function exit() {
    if(step == 3) {
        location.reload();
    } else {
        $('#signup-group-modal').modal('hide');
    }
}

function switchGroupCookie() {
    var cur_url = document.URL;
    var isSchool = new RegExp('.*?\\/.*?\\/.*?(\\/)(i)(d)(\\/)(\\d+)(\\/)',["i"]);
    var res = isSchool.exec(cur_url);
    if($('input[name=primary]:checked').val() == 'yes') {
        setGroupCookie(res[5], $('h1:eq(0)').html()); //TODO: get group name from url
    }
    window.location.href = '/coupons';
}

$(function(){
    $('.sign-up').on('click',function(e){
        $('#signup-modal').modal({
            backdrop: 'static'
        }).modal('show');
        e.preventDefault();
        return false;
    });
})
$(function(){
    $('.sign-in').on('click',function(e){
        $('#login-modal').modal({
            backdrop: 'static'
        }).modal('show');
        e.preventDefault();
        return false;
    });
})

if (window._cofund.siteType == 2) {

    function setGroupCookie(group_id, group_name)
    {
        var expires_in = 10000;
        var date = new Date;
        date.setDate( date.getDate() + expires_in );
    
        // Clear cookies across all existing domains
        clearCookies('group_name');
        clearCookies('group');
    
        // Set it correctly once
        $.cookie('group', group_id, {expires: date, path: '/' });
        $.cookie('group_name', group_name, {expires: date, path: '/', domain: '.' + document.location.host });
    
        if (document.cookie.indexOf("user_id") >= 0) {
            $.post("/setgroupcookie", {id: $.cookie('user_id'),group: group_id});
        }
    
    }
    
    $(function(){
        $('.switch-groups').on('click',function(){
            $('#switch-groups-modal').modal({
                backdrop: 'static'
            }).modal('show');
        });
    })

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
                var url = window._cofund.appdl_firefox;
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
                var url = window._cofund.appdl_safari;
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
                var url = window._cofund.appdl_ie;
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

function clearCookies(name)
{

    expires = new Date('Thu, 01 Jan 1970 00:00:00 UTC');

    $.cookie(name, '', { expires: expires, path: '/' });
    $.cookie(name, '', { expires: expires, path: '/', domain: document.location.host });
    $.cookie(name, '', { expires: expires, path: '/', domain: '.' + document.location.host });

}

function setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires*1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;

    for(var propName in options) {
        updatedCookie += "; " + escape(propName);
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }
    document.cookie = updatedCookie;
}

function sendEmails() {
    var emails = document.getElementsByName('ref-emails')[0].value;
    if(document.getElementById("custom-message") != null) {
        var custom_message = document.getElementById("custom-message").value;
    } else {
        var custom_message = '';
    }
    if($('input:radio[name=use-group-hash]:checked').val() == 1) {
        var use_group_hash = 1;
    } else {
        var use_group_hash = 0;
    }
    var postData={
        ref_mails:emails,
        custom_message:custom_message,
        use_group_hash:use_group_hash
    };
    $.ajax({
        url: '/sendReferralEmails',
        data: postData,
        type: 'POST',
        success: function(data) {
            document.getElementById('message-sent').innerHTML = "<p style='color:#e24e4e;margin: 20px 0px;'><strong style='padding-left: 20px;'>Thanks for sharing!</strong></p>";
            document.getElementById('ref-emails').value = '';
        }
    });

}

if (window.location.hash != '') {
    $.get('/refer', { hash: window.location.hash });
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
});

if (window._cofund.siteId == 2) {

    $( "#request-info-btn" ).click(function() {
        $( "#request-info" ).slideToggle();
        $('html, body').animate({
            scrollTop: $("#request-info").offset().top
        }, 1000);
        return false;
    });

    $('#request-info-close-btn').click(function() {
        $('#request-info').slideToggle();
        return false;
    });

    function check() {
        var s = $('#description').val();
        if((s.indexOf("http") > -1) == true ) {
            alert('To avoid spam, we do not allow links in the description.');
            return false;
        } else {
            return true;
        }
    }

}