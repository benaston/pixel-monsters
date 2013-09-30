(function (app) {
    "use strict";

    function CanvasView(model, options) {

        if (!(this instanceof app.CanvasView)) {
            return new app.CanvasView(model, options);
        }

        var that = this,
            _el = "#canvas",
            _pixelWidth = null;

        this.$el = null;
        this.Model = null;

        function calculateCanvasWidth() {
            var pixelCount = that.Model.getPixels().length;
            that.$el.width((Math.sqrt(pixelCount) * _pixelWidth) );
        }

        this.render = function (e, options) {
            options = options || { done: that.postRender };

            calculateCanvasWidth();

            that.$el.empty();

            _.each(that.Model.getPixels(), function(p){
              that.$el.append((new app.PixelView(p)).render().$el);
            });
         };

        this.postRender = function () {
        };

        this.bindEvents = function () {
        };

        this.onDomReady = function(){
            that.$el = $(_el);
            that.render();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            var defaultOptions = {
                selector: "#canvas",
                pixelWidth: 10
            }
            options = _.extend({}, defaultOptions, options);

            _el = options.selector;
            _pixelWidth = options.pixelWidth;

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            that.bindEvents();

            return that;
        }

        return init();
    };

    app.CanvasView = CanvasView;
    invertebrate.View.isExtendedBy(app.CanvasView);

}(mainApplication));
