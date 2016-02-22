/**
 * Requirements
 * @author: John Ginsberg
 */
var requirements = (function() {

    var my = {}

    /*
     * Startup page
     */
    my.init = function()
    {

        $(document).ready(function() {
            $('#newButton').on('click', function(e) {
                e.preventDefault();
                $('#newList').modal('show');
            });
            $('.add').on('click', requirements.addRequirement);
            $('.edit').on('click', requirements.editRequirement);
            $('.del').on('click', requirements.deleteRequirement);
        });

    }

    /*
     * Add a requirement
     */
    my.addRequirement = function(e)
    {

        e.preventDefault();
        // Reset on add:
        $('#addEditLabel').html('Add Requirement');
        $('#addEdit input[name="qty"]').val('1');
        $('#addEdit input[name="name"]').val('');
        $('#addEdit input[name="name"]').on('keydown', function(e) {
            // Search for products
            if ($(this).val()) {
                if (typeof requirements.lastTimeout != 'undefined') {
                    clearTimeout(requirements.lastTimeout);
                }
                requirements.lastTimeout = setTimeout(function() {
                    requirements.searchFor($('#addEdit input[name="name"]').val());
                }, 500);
            }
        });
        $('#addEdit input[name="requirement_id"]').val('');
        $('#addEdit input[name="search"]').on('keydown', function(e) {
            var code = e.keyCode || e.which;
            if (code == 13) {
                e.preventDefault();
                // Search for products
                requirements.searchFor($(this).val());
            }
        });
        $('#addEdit form').off('submit').on('submit', function(e) {
            e.preventDefault();
            requirements.getRecommendedItems();
        });
        $('#addEdit .addAll').off('click').on('click', function(e) {
            e.preventDefault();
            requirements.addAll();
        });
        $('#recommended').html('<div id="instructions"><span class="glyphicon glyphicon-hand-left"></span> Drag items from the suggested products to recommend them for this requirement</div>');
        $('#results').html('<div id="loading"><span class="glyphicon glyphicon-hand-up"></span> Find other products by entering keywords in the box below</div>');
        $('.addAll').hide();
        // Show modal
        setTimeout(function() {
            $('#addEdit input[name="qty"]').focus();
        }, 600);
        $('#addEdit').modal('show');

    }

    /*
     * Edit an existing requirement
     */
    my.editRequirement = function(e)
    {

        e.preventDefault();
        var row = $(this).closest('tr');
        $('#addEditLabel').html('Edit Requirement');
        $('#addEdit input[name="qty"]').val($('.qty', row).html());
        $('#addEdit input[name="name"]').val($('.name', row).html());
        $('#addEdit input[name="requirement_id"]').val(row.attr('data-requirement-id'));
        $('#addEdit .addAll').off('click').on('click', function(e) {
            e.preventDefault();
            requirements.addAll();
        });
        $('#recommended').html('<div id="instructions"><span class="glyphicon glyphicon-hand-left"></span> Drag items from the suggested products to recommend them for this requirement</div>');
        $('#results').html('<div id="loading"><span class="glyphicon glyphicon-hand-up"></span> Find other products by entering keywords in the box below</div>');
        $('.addAll').hide();

        // Look up the products from the server
        $.getJSON(_basePath + '/supplies/' + _suppliesId + '/requirements/' + row.attr('data-requirement-id') + '/products.json', null, function(data) {
            if (data.length) {
                $('#instructions').hide();
            }
            for(var i in data) {
                $('<div data-asin="' + data[i].asin + '" data-title="' + data[i].title + '" data-description="' + data[i].description + '" data-price="' + data[i].price + '"\
                    data-image="' + data[i].image + '" class="item col-md-12 text-center">\
                    <div class="remove pull-right" title="Remove">&times;</div>\
                    <img src="' + data[i].image.replace('_SL160_', '_AA75_') + '"><br>\
                    <div class="title">' + data[i].title + '</div><br>\
                    <div class="incl">Includes <span class="qty-supplied">' + data[i].qty_in_product + '</span> in a pack</div>\
                </div>').appendTo($('#recommended'));
            }
            $('#recommended').scrollTop(0);
            // Enable drag and drop
            requirements.addDeleteEvents();
            requirements.addQuantityEditEvents();
        });

        $('#addEdit input[name="search"]').on('keydown', function(e) {
            var code = e.keyCode || e.which;
            if (code == 13) {
                e.preventDefault();
                // Search for products
                requirements.searchFor($(this).val());
            }
            requirements.addDragDropEvents();
        });
        $('#addEdit form').off('submit').on('submit', function(e) {
            e.preventDefault();
            requirements.getRecommendedItems();
        });

        // Show modal
        $('#addEdit').modal('show');

    }

    /*
     * Delete a requirement
     */
    my.deleteRequirement = function(e)
    {

        e.preventDefault();
        if (!confirm('Are you sure you want to remove this requirement?')) {
            return false;
        }
        var row = $(this).closest('tr');
        $.ajax({
            url: _basePath + '/supplies/manage/' + row.attr('data-supplies-id') + '/requirements/' + row.attr('data-requirement-id'),
            type: 'DELETE',
            context: row,
            success: function(data) {
                $(this).fadeOut('fast', 'swing', function() { $(this).remove(); });
            }
        });

    }

    /*
     * Searches for products on Amazon
     */
    my.searchFor = function(what)
    {

        if (what == my.lastSearch) {
            return; // Don't re-search
        }
        my.lastSearch = what;

        $('#results').html('<div id="loading">Please wait while we search Amazon.com for products...<br><br><img src="/img/loader-bar.gif"></div>');
        $('.addAll').hide();
        $.getJSON(_basePath + '/supplies/amazon/search/OfficeProducts/' + encodeURI(what), '', function(data) {
            $('#results').html('');
            for(var i in data) {
                $('<div class="col-md-4 result" data-asin="' + data[i].asin + '">\
                    <div class="select">\
                        <div class="image"><img src="' + data[i].image + '"></div>\
                        <div class="price"><span class="value">$' + data[i].price + '</span> (Current)</div>\
                        <div class="description">' + data[i].title + '</div>\
                    </div>\
                </div>').appendTo('#results');
            }
            if (data.length == 0) {
                $('#results').html('<div id="loading">No results found. Please try another search below.</div>');
            } else {
                requirements.addDragDropEvents();
                $('.addAll').show();
            }
        });

    }

    /*
     * Enables drag and drop functionality in the modal
     */
    my.addDragDropEvents = function()
    {

        $('#results .col-md-4').draggable({
            appendTo: "#addEdit",
            helper: function() {
                return $('<img class="drag-helper" data-asin="' + $(this).attr('data-asin') + '" data-title="' + $(this).find('.description').html() + '" data-description="" data-price="' + $(this).find('.price .value').html().replace('$', '') + '" \
                    src="' + $(this).find('.image img').attr('src').replace('_SL160_', '_AA75_') + '">')
            },
            cursorAt: {
                left: 5,
                top: 5
            },
            revert: function(valid) {
                if (!valid) {
                    $(this).css('display', '');
                } else {
                    $(this).css('display', 'none');
                }
                return false;
            }
        });
        $('#recommended').droppable({
            accept: '#results .col-md-4',
            drop: function(event, ui) {
                $('#instructions').hide();
                $('<div data-asin="' + $(ui.helper).attr('data-asin') + '" data-title="' + $(ui.helper).attr('data-title') + '" data-description="' + $(ui.helper).attr('data-description') + '" data-price="' + $(ui.helper).attr('data-price') + '"\
                    data-image="' + $(ui.helper).attr('src').replace('_AA75_', '_SL160_') + '" class="item col-md-12 text-center">\
                    <div class="remove pull-right" title="Remove">&times;</div>\
                    <img src="' + $(ui.helper).attr('src') + '"><br>\
                    <div class="title">' + $(ui.helper).attr('data-title') + '</div><br>\
                    <div class="incl">Includes <span class="qty-supplied">1</span> in a pack</div>\
                </div>').prependTo(this);
                $('#recommended').scrollTop(0);
                requirements.addDeleteEvents();
                requirements.addQuantityEditEvents();
            }
        });

    }

    /*
     * Enables deletion from recommended items list
     */
    my.addDeleteEvents = function()
    {

        $('#recommended .remove').off('click').on('click', function(e) {
            e.preventDefault();
            var item = $(this).closest('.item');
            var asin = item.attr('data-asin');
            item.fadeOut(200, function() {
                $(this).remove();
                if ($('#recommended .item').length == 0) {
                    $('#instructions').show();
                }
                // If the item is still available in the search results, show it again
                $('#results .col-md-4[data-asin="' + asin + '"]').fadeIn(400);
            });
        })

    }

    /*
     * Enable editing of quantities supplied by recommended items
     * since Amazon doesn't supply exact values across every product.
     */
    my.addQuantityEditEvents = function()
    {

        $('.qty-supplied').off('click').on('click', function(e) {
            e.preventDefault();
            if ($(this).find('input').length > 0) {
                return;
            }
            var orig = $(this);
            var val = $(this).html();
            var el = $('<input id="editQty" type="text" size="2" value="' + val + '">');
            $(el).on('blur', function(e) {
                orig.html($(this).val());
                $(this).remove();
            }).width($(this).width());
            $(this).html('');
            $(this).append(el);
            el.focus();
        });

    }

    /*
     * Add all items from the search results box to the recommended items list
     */
    my.addAll = function()
    {

        if ($('#results .result').length == 0) {
            return; // do nothing
        }

        $('#instructions').hide();
        $('#results .result').each(function() {
            $('<div data-asin="' + $(this).attr('data-asin') + '" data-title="' + $(this).find('.description').html() + '" data-description="' + $(this).find('.description').html() + '" \
                data-price="' + $(this).find('.price .value').html().replace('$', '') + '"\
                data-image="' + $(this).find('.image img').attr('src') + '" class="item col-md-12 text-center">\
                <div class="remove pull-right" title="Remove">&times;</div>\
                <img src="' + $(this).find('.image img').attr('src').replace('_SL160_', '_AA75_') + '"><br>\
                <div class="title">' + $(this).find('.description').html() + '</div><br>\
                <div class="incl">Includes <span class="qty-supplied">1</span> in a pack</div>\
            </div>').prependTo($('#recommended'));
            $(this).hide();
        });

        $('#recommended').scrollTop(0);
        requirements.addDeleteEvents();
        requirements.addQuantityEditEvents();

    }

    /*
     * Get a list of recommended items and post them to the database via Ajax
     */
    my.getRecommendedItems = function()
    {

        if (($('#addEdit input[name="name"]').val() == '') || ($('#addEdit input[name="qty"]').val() == '') || ($('#recommended .item').length == 0)) {
            alert('Please add a quantity and description, and at least 1 product');
            return;
        }

        var items = [];

        $('#recommended .item').each(function() {
            items.push({
                asin: $(this).attr('data-asin'),
                qty_in_product: $(this).find('.qty-supplied').html(),
                title: $(this).attr('data-title'),
                description: $(this).attr('data-description'),
                price: parseFloat($(this).attr('data-price')),
                image: $(this).attr('data-image')
            });
        });

        // Get remaining details
        var postData = {
            requirement_id: $('#addEdit input[name="requirement_id"]').val(),
            name: $('#addEdit input[name="name"]').val(),
            qty: $('#addEdit input[name="qty"]').val(),
            products: items
        }

        $.ajax({
            url: _basePath + '/supplies/manage/' + _suppliesId + '/requirements' + ($('#addEdit input[name="requirement_id"]').val() ? '/' + $('#addEdit input[name="requirement_id"]').val() : ''),
            data: postData,
            dataType: 'json',
            type: ($('#addEdit input[name="requirement_id"]').val() ? 'PUT' : 'POST'),
            success: function(data) {
                var row = $('table#requirements').find('tr[data-requirement-id="' + data.requirement_id + '"]');
                if (row.length) {
                    row.find('.qty').html(data.qty);
                    row.find('.name').html(data.name);
                    row.find('.products').html(data.product_count + (data.product_count == 1 ? ' product' : ' products'));
                } else {
                    $('table#requirements').append('<tr data-supplies-id="' + _suppliesId + '" data-requirement-id="' + data.requirement_id + '" data-search-terms="">\
                        <td><a href="" class="qty edit">' + data.qty + '</a></td>\
                        <td><a href="" class="name edit">' + data.name + '</a></td>\
                        <td><a href="" class="products edit">' + data.product_count + (data.product_count == 1 ? ' product' : ' products') + '</a></td>\
                        <td><a href="" class="del">&times;</a></td>');
                    $('.edit').on('click', requirements.editRequirement);
                    $('.del').on('click', requirements.deleteRequirement);
                }
                $('#addEdit').modal('hide');
            }
        });

    }

    my.init();

    return my;

}());
