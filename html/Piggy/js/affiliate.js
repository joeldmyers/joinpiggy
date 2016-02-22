/* global $, getBrowser, downloadApp, clearCookies */
var Affiliate = function(options) {

    this._cid = null;
    this._events = ['continue', 'close', 'app'];
    this._triggerOn = [];
    this._defaultOptions = {
        // An element with a value="" attribute containing the email address used for the onload trigger
        emailEl: null,
        // The destination interstitial page
        intUrl: '',
        // An optional function called when a campaign has loaded
        onCampaignLoaded: null,
        // An optional function called when no campaign has been loaded
        onCampaignNotFound: null,
        // An optional function called once the pixel has been fired
        onPixelFired: null
    };
    this._options = $.extend({}, this._defaultOptions, options);
    this._isAppThankYou = document.location.pathname == '/thankyou';
    this._emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    // Trigger onload handler
    this._init();

    // Make it available globally
    window._affiliate = this;

};

/*
 * Returns true if a campaign is loaded and ready to engage
 */
Affiliate.prototype.isCampaignLoaded = function()
{

    return this._cid != null;

};

/*
 * Start up, and either show the pixel or schedule the next event
 */
Affiliate.prototype._init = function()
{

    var self = this;
    var email = '';

    if (self._options.emailEl) {
        if (!(self._options.emailEl instanceof jQuery)) {
            self._options.emailEl = $(self._options.emailEl);
        }
        if (self._options.emailEl.length) {
            email = self._options.emailEl.val();
        }
    }

    $.getJSON('/frame/affiliate/onload', (email ? { e: email } : null), function(data) {

        // Save the campaign id for later
        if (data.hasOwnProperty('id')) {
            self._cid = data.id;
        }

        // Place the onload pixel if required
        if ((!self._isAppThankYou) && (data.hasOwnProperty('pixel'))) {
            self._placePixel(data.pixel);
            // Trigger callback, possibly preventing next step
            if (self._options.onPixelFired) {
                self._options.onPixelFired({
                    cid: self._cid,
                    triggerOn: 'load'
                });
            }
        }

        if (self._cid) {
            // Attach the triggers only to the target elements
            if (data.hasOwnProperty('triggerOn')) {
                self._triggerOn = data.triggerOn;
                if (!$.isArray(self._triggerOn)) {
                    self._triggerOn = [self._triggerOn];
                }
            }
        }

        self._attachEventHandlers();

        // Run tests on target elements if required
        if ((data.hasOwnProperty('tests')) && (data.tests)) {
            self._runTests(data.tests);
        }

        // Trigger a notification to callback functions if required
        if (self._cid) {
            if (self._options.onCampaignLoaded) {
                self._options.onCampaignLoaded({
                    cid: self._cid,
                    triggerOn: self._triggerOn // an array
                });
            }
        } else {
            // Look for a callback
            if (self._options.onCampaignNotFound) {
                self._options.onCampaignNotFound();
            }
        }

    });

};

/**
 * Attach the next event handler
 */
Affiliate.prototype._attachEventHandlers = function()
{

    var self = this;

    for (var i = 0; i < self._events.length; i++) {

        var trig = self._events[i];

        // App triggers don't work by attachment anymore
        if ((trig == 'app') && (self._isAppThankYou)) {
            self._triggerAppInstalled();
            continue;
        }

        // Attach handler
        $('.affiliate_' + trig)
            .off('click').on('click', { trig: trig, self: self }, self._attachNextEvent);

    }

};

/**
 * Attach an event to the specified trigger element
 */
Affiliate.prototype._attachNextEvent = function(e)
{

    var self = e.data.self;

    // Stop the default action
    e.preventDefault();
    // Get the attached trigger
    var trig = e.data.trig;
    // Save up the element that triggered the event
    var el = $(this);
    // Look up an email address element if available
    var emailEl = $(this).attr('data-email-field');

    // Validate email on continue
    if ((trig == 'continue') && (!self._emailRegex.test($(emailEl).val()))) {
        alert('Please enter a valid email address.');
        return;
    }

    // Check for a pre-trigger action
    if (el.attr('data-affiliate-pretrigger')) {
        var preTrigger = el.attr('data-affiliate-pretrigger').replace(/[^a-zA-Z0-9 ]/g, '');
        if (typeof(window[preTrigger]) == typeof(Function)) {
            window[preTrigger]({
                cid: self._cid,
                triggerOn: trig // a string
            });
        }
    } else {
        switch(trig) {
            case 'continue':
                self.continuePreTrigger();
                break;
            case 'close':
                self.closePreTrigger();
                break;
            case 'app':
                self.appPreTrigger();
                break;
        }
    }

    // Trigger the callback
    self._trigger(trig, el);
    
};

/*
 * Trigger the specified callback
 */
Affiliate.prototype._trigger = function(trig, el)
{

    var self = this;
    var email = $(el.attr('data-email-field')).val();
    var firePixel, url, getData;

    if ((self._cid) && (self._triggerOn.indexOf(trig) != -1)) {
        firePixel = true;
        url = '/frame/affiliate/ontrigger';
        getData = { id: self._cid, trigger: trig, e: email };
    } else {
        firePixel = false;
        url = '/frame/affiliate/log' + trig;
        getData = { e: email };
    }

    // Send a message to the server
    $.getJSON(url, getData, function(data) {

        // Wait for trigger to complete
        var timer = 1000;

        // Place the pixel if we have one
        if ((firePixel) && (data.hasOwnProperty('pixel'))) {
            self._placePixel(data.pixel);
            // Give the pixel a bit longer to complete (if present)
            timer = 1500;
        }

        // What should we do next?
        if (el.attr('data-affiliate-next-url')) {
            // Redirect to the specified url
            setTimeout(function() {
                // Trigger callback, possibly preventing next step
                if ((firePixel) && (self._options.onPixelFired)) {
                    self._options.onPixelFired({
                        cid: self._cid,
                        triggerOn: trig // a string
                    });
                }
                document.location = el.attr('data-affiliate-next-url');
            }, timer);
        } else
        if (el.attr('data-affiliate-callback')) {
            // Call the specified closure
            var callback = el.attr('data-affiliate-callback').replace(/[^a-zA-Z0-9 ]/g, '');
            if (typeof(window[callback]) == typeof(Function)) {
                setTimeout(function() {
                    // Trigger callback, possibly preventing next step
                    if ((firePixel) && (self._options.onPixelFired)) {
                        self._options.onPixelFired({
                            cid: self._cid,
                            triggerOn: trig // a string
                        });
                    }
                    window[callback](data);
                }, timer);
            }
        } else {
            // Fire default trigger handlers
            setTimeout(function() {
                // Trigger callback, possibly preventing next step
                if ((firePixel) && (self._options.onPixelFired)) {
                    self._options.onPixelFired({
                        cid: self._cid,
                        triggerOn: trig // a string
                    });
                }
                switch(trig) {
                    case 'continue':
                        self.continuePostTrigger(email);
                        break;
                    case 'close':
                        self.closePostTrigger();
                        break;
                    case 'app':
                        self.appPostTrigger();
                        break;
                }
            }, timer);
        }

    });

};

/*
 * Trigger an app install callback for campaigns that require it
 */
Affiliate.prototype._triggerAppInstalled = function()
{

    var self = this;

    var appInstalled = setInterval(function() {
        var hasVer = $('toolbar#browserappinstalled').attr('version');
        if (hasVer) {
            var el = $('<input type="hidden" id="aff_app_installed" value="' + escape(self._options.emailEl.val()) + '" data-email-field="#aff_app_installed"></span>').appendTo('body');
            self._trigger('app', el);
            clearInterval(appInstalled);
            appInstalled = null;
        }
    }, 1000);

};

/*
 * Place the pixel at the end of the page
 */
Affiliate.prototype._placePixel = function(pixel)
{

    $(pixel).appendTo($('body'));

};

/*
 * If testmode is enabled, run some tests on the page
 */
Affiliate.prototype._runTests = function(testDetails)
{

    var errors = [];

    // What do we need to test?
    if ((testDetails.hasOwnProperty('testEmail')) && (testDetails.testEmail == true)) {
        if (this._options.emailEl == null) {
            errors.push('Email is required and no email field is configured.');
        } else {
            var emailField = this._options.emailEl;
            if (emailField.length == 0) {
                errors.push('Email is required and no field could be detected.');
            }
        }
    }

    if ((testDetails.hasOwnProperty('testTriggers')) && (testDetails.testTriggers == true)) {

        for (var i = 0; i < this._triggerOn.length; i++) {

            if (this._isAppThankYou) {
                if (this._triggerOn[i] == 'app') {
                    if (!$('toolbar#browserappinstalled').length) {
                        errors.push('The toolbar element could not be detected on the page.');
                    } else
                    if (!$('toolbar#browserappinstalled').attr('version')) {
                        errors.push('The toolbar version could not be detected on the page. Reload this page once the app is installed.');
                    }
                }
                // Ignore all other tests on this page
                continue;
            }

            // Don't look for an affiliate_impression class
            if (this._triggerOn[i] == 'impression') {
                continue;
            }
            // Ignore the app install trigger on all other pages
            if (this._triggerOn[i] == 'app') {
                continue;
            }

            // Check that the trigger field exists
            if ($('.affiliate_' + this._triggerOn[i]).length == 0) {
                errors.push('A field with class \'affiliate_' + this._triggerOn[i] + '\' could not be detected on the page.');
            } else {
                // Check that we can take action
                if ((!$('.affiliate_' + this._triggerOn[i]).attr('data-affiliate-next-url')) &&
                    (!$('.affiliate_' + this._triggerOn[i]).attr('data-affiliate-callback')) &&
                    (!$('.affiliate_' + this._triggerOn[i]).attr('data-affiliate-pretrigger'))) {
                        errors.push('A field with class \'affiliate_' + this._triggerOn[i] + '\' is found, but is missing a data-affiliate-next-url or data-affiliate-callback attribute. The default behavior will be triggered.');
                    }
                var pretrigger = ($('.affiliate_' + this._triggerOn[i]).attr('data-affiliate-pretrigger') ? $('.affiliate_' + this._triggerOn[i]).attr('data-affiliate-pretrigger').replace(/[^a-zA-Z0-9 ]/g, '') : null);
                if ((pretrigger) && (typeof(window[pretrigger]) != typeof(Function))) {
                    errors.push('A field with class \'affiliate_' + this._triggerOn[i] + '\' is found with a valid data-affiliate-pretrigger attribute, but the function it points to cannot be called.');
                }
                var callback = ($('.affiliate_' + this._triggerOn[i]).attr('data-affiliate-callback') ? $('.affiliate_' + this._triggerOn[i]).attr('data-affiliate-callback').replace(/[^a-zA-Z0-9 ]/g, '') : null);
                if ((callback) && (!pretrigger) && (typeof(window[callback]) != typeof(Function))) {
                    errors.push('A field with class \'affiliate_' + this._triggerOn[i] + '\' is found with a valid data-affiliate-callback attribute, but the function it points to cannot be called.');
                }
                // Check that the email field can be read for triggers
                if ((testDetails.hasOwnProperty('testEmail')) && (testDetails.testEmail == true)) {
                    if (!$('.affiliate_' + this._triggerOn[i]).attr('data-email-field')) {
                        errors.push('A field with class \'affiliate_' + this._triggerOn[i] + '\' is found, but is missing a data-email-field attribute.');
                    } else {
                        var emailField = $('.affiliate_' + this._triggerOn[i]).attr('data-email-field');
                        if ($(emailField).length == 0) {
                            errors.push('A field with class \'affiliate_' + this._triggerOn[i] + '\' is found with a data-email-field attribute, but the attribute points to a non-existent field on the page.');
                        }
                    }
                }
            }

        }

    }

    if (errors.length) {
        this._showTestResults('Test Results', '<ol><li>' + errors.join('</li><li>') + '</li></ol>');
    } else {
        console.log('No errors! :)');
    }

};

/*
 * Show test results in a modal
 */
Affiliate.prototype._showTestResults = function(title, message)
{

    $('\
    <div id="notifyModal" class="modal fade">\
        <div class="modal-dialog">\
            <div class="modal-content">\
                <!-- dialog body -->\
                <div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                    <h4 class="modal-title">' + title + '</h4>\
                </div>\
                <div class="modal-body">\
                ' + message + '\
                </div>\
                <!-- dialog buttons -->\
                <div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">OK</button></div>\
            </div>\
        </div>\
    </div>').appendTo('body');

    // Remove it from the DOM on hide
    $('#notifyModal').on('hide.bs.modal', function (e) {
        $('#notifyModal').remove();
    });

    // Show it
    $('#notifyModal').modal('show');

};

/**
 * Get a URL parameter by name and return its value
 */
Affiliate.prototype.getParameterByName = function(name)
{

    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(document.location.search);

    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

};

/**
 * Default pre-trigger for close buttons
 */
Affiliate.prototype.closePreTrigger = function()
{

    var pop = this.getParameterByName('pop');
    if ((getBrowser() == "Chrome") && (pop.indexOf('x') > -1)) {
        this.appInstall();
    }

};

/**
 * Default post-trigger for close buttons
 */
Affiliate.prototype.closePostTrigger = function()
{

    var pop = this.getParameterByName('pop');
    if (pop.indexOf('c') > -1) {
        if (getBrowser() != "Chrome") {
            this.appInstall();
        }
    } else {
        window.location.href = this._options.intUrl;
    }

};

/**
 * Default pre-trigger for continue buttons
 */
Affiliate.prototype.continuePreTrigger = function()
{

    var pop = this.getParameterByName('pop');
    if ((getBrowser() == "Chrome") && (pop.indexOf('c') > -1)) {
        this.appInstall();
    }

};

/**
 * Default post-trigger for continue buttons
 */
Affiliate.prototype.continuePostTrigger = function(email)
{

    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (regex.test(email)) {
        var pop = this.getParameterByName('pop');
        if (pop.indexOf('c') > -1) {
            if (getBrowser() != "Chrome") {
                this.appInstall();
            }
        } else {
            window.location.href = this._options.intUrl;
        }
    } else {
        alert('Please enter a valid email address.')
    }

};

/**
 * Default pre-trigger for app buttons
 */
Affiliate.prototype.appPreTrigger = function()
{

    this.appInstall(true); // always fire

};

/**
 * Default post-trigger for app buttons
 */
Affiliate.prototype.appPostTrigger = function()
{

    // Do nothing

};

/**
 * App install handler
 */
Affiliate.prototype.appInstall = function(alwaysFire) {

    var browser = getBrowser();
    var app = this.getParameterByName('app');

    var date = new Date();
    date.setDate(date.getDate());
    date.setMinutes(date.getMinutes() + 60);

    clearCookies('open_url');

    switch(browser) {
        case 'Chrome': 
            if ((alwaysFire) || (app.indexOf("c") > -1)) {
                // Set a cookie for the app /thankyou page
                $.cookie('open_url', this._options.intUrl, { expires: date, path: '/', domain: '.' + document.location.host });
                console.log('Cookie set to ', this._options.intUrl);
                downloadApp();
            } else {
                window.location.href = this._options.intUrl;
            }
            break;

        case 'IE':
            if ((alwaysFire) || (app.indexOf("i") > -1)) {
                // Set a cookie for the app /thankyou page
                $.cookie('open_url', this._options.intUrl, { expires: date, path: '/', domain: '.' + document.location.host });
                downloadApp();
            } else {
                window.location.href = this._options.intUrl;
            }
            break;

        case 'Firefox':
            if ((alwaysFire) || (app.indexOf("f") > -1)) {
                // Set a cookie for the app /thankyou page
                $.cookie('open_url', this._options.intUrl, { expires: date, path: '/', domain: '.' + document.location.host });
                downloadApp();
            } else {
                window.location.href = this._options.intUrl;
            }
            break;

        case 'Safari':
            if ((alwaysFire) || (app.indexOf("s") > -1)) {
                // Set a cookie for the app /thankyou page
                $.cookie('open_url', this._options.intUrl, { expires: date, path: '/', domain: '.' + document.location.host });
                downloadApp();
            } else {
                window.location.href = this._options.intUrl;
            }
            break;

        default:
            window.location.href = this._options.intUrl;
            break;
    }
};

/*
Example implementation:

<script>
new Affiliate({
    emailEl: $('#email'),
    intUrl: '/int?s=843',
    onCampaignLoaded: function(campaign) {
        ...
    },
    onCampaignNotFound: function() {
        ...
    }
});
</script>

Then set out elements as follows
<button class="affiliate_continue" data-email-field="#email" data-affiliate-next-url="/path/to/next"></button>
*/
