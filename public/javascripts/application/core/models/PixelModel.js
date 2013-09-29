(function (app) {
    "use strict";

        function PixelModel(id) {

        if (!(this instanceof app.PixelModel)) {
            return new app.PixelModel();
        }

        var that = this,
            _brushColorEnum = app.mod("enum").BrushColor,
            _color = _brushColorEnum.White,
            _id = null;

        this.updateEventUri = "update://PixelModel/";

        this.getColor = function () {
            return _color;
        }

        this.setColor = function (value) {
            _color = value;

            $.publish(that.updateEventUri);
        }

        this.getId = function(){
            return  _id;
        }

        function init() {
            if(id === undefined || id === null){
                throw "id not supplied."
            }

            _id = id;
            that.updateEventUri += _id;

            return that;
        }



        return init();
    }

    app.PixelModel = PixelModel;
    invertebrate.Model.isExtendedBy(app.PixelModel);

}(mainApplication));