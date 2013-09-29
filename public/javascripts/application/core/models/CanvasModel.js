(function (app) {
    "use strict";

    function CanvasModel(initialNumberOfPixels) {

        if (!(this instanceof app.CanvasModel)) {
            return new app.CanvasModel(initialNumberOfPixels);
        }

        var that = this,
            _pixels = [],
            _brushColorEnum = app.mod("enum").BrushColor,
            _brushColor = _brushColorEnum.Red;

        this.updateEventUri = "update://CanvasModel/";

        this.setBrushColor = function (value) {
            _brushColor = value;
        }

        this.getPixels = function () {
            return _pixels;
        }

        this.redrawPixel = function (id) {
            _pixels[id].setColor(_brushColor);
        }

        function initializePixels(value) {
            for (var x = 0; x < value; x++) {
                _pixels.push(new app.PixelModel(x))
            }
        }

        function init() {
            if(!initialNumberOfPixels) {
                throw "initialNumberOfPixels not supplied.";
            }

            initializePixels(initialNumberOfPixels);

            return that;
        }

        return init();
    }

    app.CanvasModel = CanvasModel;
    invertebrate.Model.isExtendedBy(app.CanvasModel);

}(mainApplication));