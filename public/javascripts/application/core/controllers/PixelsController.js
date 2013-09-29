(function (app) {
    "use strict";

    function PixelsController(canvasModel) {

        if (!(this instanceof app.PixelsController)) {
            return new app.PixelsController(canvasModel);
        }

        var that = this,
            _canvasModel = null;


        this.update = function (dto) {
            try {

                _canvasModel.redrawPixel(dto.id);

            } catch (err) {
                console.log("error: PixelsController.index. " + err);
            }
        };

        function init() {
            if (!canvasModel) {
                throw "canvas not supplied."
            }

            _canvasModel = canvasModel;

            return that;
        }

        return init();
    }

    app.PixelsController = PixelsController;

}(mainApplication));
