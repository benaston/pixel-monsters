(function (app) {
    "use strict";

    function MonsterEditorController(uiRootModel) {

        if (!(this instanceof app.MonsterEditorController)) {
            return new app.HomeController(uiRootModel);
        }

        var that = this,
            _uiRootModel = null,
            _uiModeEnum = mainApplication.mod("enum").UIMode;


        this.index = function(){
            try {
                _uiRootModel.setUIMode(_uiModeEnum.MonsterEditor);
                _uiRootModel.setModal(null);
            } catch(err) {
                console.log("error: MonsterEditorController.index. " + err);
            }
        };

        function init() {
            if(!uiRootModel) { throw "uiRootModel not supplied."; }

            _uiRootModel = uiRootModel;

            return that;
        }

        return init();
    }

    app.MonsterEditorController = MonsterEditorController;

}(mainApplication));
