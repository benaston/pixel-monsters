(function (app) {
    'use strict';

    function PixelView(model) {

        if (!(this instanceof app.PixelView)) {
            return new app.PixelView(model);
        }

        var that = this,
            _el = "<div class='pixel cube'>" +
                  "<figure class='top'></figure>" +
                  "<figure class='left'></figure>" +
                  "<figure class='front'></figure>" +
                  "<figure class='right'></figure>" +
                  "<figure class='bottom'></figure>" +
                  "<figure class='back'></figure></div>" +
                  "";
//                '<a class='pixel' ></a>';

        this.$el = $(_el);
        this.Model = null;

        this.render = function (e, options) {
            options = options || { done: that.postRender };

            that.$el.attr('data-color', that.Model.getColor());
            that.$el.attr('href', '/pixels/update?id=' + that.Model.getId());

            return that;
         };

        this.postRender = function () {
        };

        this.bindEvents = function () {
        };

        function init() {
            if (!model) {
                throw 'model not supplied';
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            that.bindEvents();

            return that;
        }

        return init();
    }

    app.PixelView = PixelView;
    invertebrate.View.isExtendedBy(app.PixelView);

}(mainApplication));
