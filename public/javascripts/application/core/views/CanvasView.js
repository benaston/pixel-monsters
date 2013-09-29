(function (app) {
    "use strict";

    function CanvasView(model) {

        if (!(this instanceof app.CanvasView)) {
            return new app.CanvasView(model);
        }

        var that = this,
            _el = "#canvas",
            pixelWidth = 20;

        this.$el = null;
        this.Model = null;

        function calculateCanvasWidth() {
            var pixelCount = that.Model.getPixels().length;
            that.$el.width((Math.sqrt(pixelCount) * pixelWidth) );
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
