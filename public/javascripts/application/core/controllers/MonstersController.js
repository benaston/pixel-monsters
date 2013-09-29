(function (app) {
    "use strict";

    function MonstersController(uiRootModel) {

        if (!(this instanceof app.MonstersController)) {
            return new app.MonstersController(uiRootModel);
        }

        var that = this,
            _uiRootModel = null,
            _uiModeEnum = mainApplication.mod("enum").UIMode;


        this.index = function(){
            try {
                throw "get redirection after purchase panel/destroy working";
                _uiRootModel.setUIMode(_uiModeEnum.GreenfieldSearch);
                _uiRootModel.setModal(null);
            } catch(err) {
                console.log("error: HomeController.index. " + err);
            }
        };

        function init() {
            if(!uiRootModel) { throw "uiRootModel not supplied."; }

            _uiRootModel = uiRootModel;

            return that;
        }

        return init();
    }

    app.MonstersController = MonstersController;

}(mainApplication));
