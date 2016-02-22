$(function(){

    $('.testimonial-frame').hover(
        function(){
            $(this).children(".testimonial-hover").show();
        },
        function () {
            // Styles to hide the box
            $(this).children('.testimonial-hover').hide();
        }
    );


    $('.sign-up').on('click',function(){
        $('#signup-modal').modal({
            backdrop: 'static'
        }).modal('show');
    });

    $('#search-type li a').on('click',function(){
        var text = $(this).text();
        $('#search-type-button').html(text+" <span class='caret'></span>");

    });


    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    // the typeahead jQuery plugin expects suggestions to a
                    // JavaScript object, refer to typeahead docs for more info
                    matches.push({ value: str });
                }
            });

            cb(matches);
        };
    };

    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'states',
            displayKey: 'value',
            source: substringMatcher(states),
            templates: {
                empty: [
                    '<div class="empty-message">',
                    '<p>Unfortunatelly we coud not find items that match the current query. Please try again.</p>',
                    '</div>'
                ].join('\n'),
                footer : [
                    '<div class="more-results">',
                    '<a href="#">View more results...</a>',
                    '<div>'
                ].join('\n')
            }
        });



});
