var app = {

    supplies_id: null,
    tag: '',

    /*
     * Loads the left bar requirement list
     */
    loadRequirements: function()
    {

        $.getJSON(_basePath + '/supplies/' + this.supplies_id + '/requirements.json', function(data) {
            // Load the rows using a template
            var src = $("#requirements-template").html();
            var template = Handlebars.compile(src);
            for (var i = 0; i < data.length; i++) {
                var context = data[i];
                $('#requirements tbody').append(template(context));
            }
            // Enable click events on each requirement
            $('#requirements a').on('click', function(e) {
                e.preventDefault();
                app.loadProducts($(this).attr('data-requirement-id'))
            });
        });

    },

    /*
     * Loads products in the middle area
     */
    loadProducts: function(requirement_id)
    {

        $.getJSON(_basePath + '/supplies/' + this.supplies_id + '/requirements/' + requirement_id + '/products.json', function(data) {
            // Load the rows using a template
            var src = $("#products-template").html();
            var template = Handlebars.compile(src);
            $('.products').html('');
            for (var i = 0; i < data.length; i++) {
                var context = data[i];
                $('.products').append(template(context));
            }
            // Enable click events on each add to cart button
            $('.products button').on('click', function(e) {
                e.preventDefault();
                app.addToCart($(this));
            });
        });

    },

    /*
     * Adds items to your cart
     */
    addToCart: function(item)
    {

        // Do we already have it in our cart?
        if ($('#cart .row[data-product-id="' + item.attr('data-product-id') + '"]').length) {
            alert('You\'ve already added that!'); // uuuugly!
            return false;
        }

        // Save a copy to the database
        $.ajax({
            url: _basePath + '/supplies/' + this.supplies_id + '/cart',
            data: {
                product_id: item.attr('data-product-id'),
                requirement_id: item.attr('data-requirement-id')
            },
            dataType: 'json',
            context: item,
            type: 'POST',
            success: function(data) {

                // Load the new row using a template
                var src = $("#cart-template").html();
                var template = Handlebars.compile(src);
                var context = {
                    cart_id: data.id,
                    product_id: this.attr('data-product-id'),
                    requirement_id: this.attr('data-requirement-id'),
                    image: this.attr('data-image'),
                    title: this.attr('data-title'),
                    price: parseFloat(this.attr('data-price')),
                    url: this.attr('data-url'),
                    asin: this.attr('data-asin'),
                    qty: this.attr('data-qty')
                };
                if ($('#cart').html().indexOf('Nothing here yet') !== -1) {
                    $('#cart').html('');
                }
                // Add it to the top of the cart
                $('#cart').prepend(template(context));
                // Enable the checkout button
                $('#checkoutButton').show();
                // Enable an event handler on the checkout button
                $('#checkoutButton').off('click').on('click', function(e) {
                    e.preventDefault();
                    var url = 'http://www.amazon.com/gp/aws/cart/add.html?AssociateTag=' + app.tag;
                    var i = 0;
                    $('#cart .row').each(function() {
                        i++;
                        url += '&ASIN.' + i + '=' + $(this).attr('data-asin') + '&Quantity.' + i + '=1';
                    })
                    window.open(url);
                });

                // Update checkboxes
                app.checkQuantities(this.attr('data-requirement-id'));

                // Re-enable events
                $('#cart button').off('click').on('click', function(e) {
                    e.preventDefault();
                    app.removeFromCart($(this));
                });

            }
        });

    },

    /*
     * Remove an item from the cart
     */
    removeFromCart: function(item)
    {

        // Save a copy to the database
        $.ajax({
            url: _basePath + '/supplies/' + this.supplies_id + '/cart',
            context: item,
            data: { id: item.attr('data-id') },
            dataType: 'json',
            type: 'DELETE',
            success: function(data) {
                var requirement_id = $('#cart .row[data-id="' + data.id + '"]').attr('data-requirement-id');
                if (!requirement_id) {
                    return false; // something went wrong, don't proceed
                }
                $('#cart .row[data-id="' + data.id + '"]').remove();
                // Hide the checkout button if there are no products
                if ($('#cart .row').length == 0) {
                    $('#checkoutButton').hide();
                    $('#cart').html('<p>Nothing here yet</p>');
                }
                // Update check boxes
                app.checkQuantities(requirement_id);
            }
        });

    },

    /*
     * Check if we've added enough to our cart; if so, tick off the requirement
     */
    checkQuantities: function(requirement_id)
    {

        var qtyRequired = $('#requirements a[data-requirement-id="' + requirement_id + '"]').attr('data-qty-required');
        var qtyInCart = 0;
        $('#cart .row[data-requirement-id="' + requirement_id + '"]').each(function() {
            qtyInCart += parseInt($(this).attr('data-qty'));
        });
        if (qtyInCart >= qtyRequired) {
            $('#requirements tr[data-requirement-id="' + requirement_id + '"] input[type="checkbox"]').prop('checked', true);
        } else {
            $('#requirements tr[data-requirement-id="' + requirement_id + '"] input[type="checkbox"]').prop('checked', false);
        }

    },

    /*
     * Startup
     */
    init: function(unid, tag)
    {

        this.supplies_id = unid;
        this.tag = tag;
        this.loadRequirements();
        if ($('#cart').html().trim() == '') {
            $('#cart').html('<p>Nothing here yet</p>');
        } else {
            $('#cart button').on('click', function(e) {
                e.preventDefault();
                app.removeFromCart($(this));
            });
        }

    }

}

/*
 * Handlebars helpers
 * These are simple scripts that help with templating, like transforming some data
 */
Handlebars.registerHelper('toFixed', function(object) {
    return (typeof object == 'number' ? object.toFixed(2) : new Number(object).toFixed(2));
});
