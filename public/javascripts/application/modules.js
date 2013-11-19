//order of declaration matters here.
(function (mod) {
    "use strict";

    try {
        mod.UIMode = {
            Fight: "0",
            MonsterEditor: "1"
        };

        mod.BrushColor = {
            White: "0",
            Red: "1",
            Green: "2",
            Blue: "3",
            Black: "4",
            Yellow: "5"
        };

    } catch (e) {
        throw "problem registering enum module. " + e;
    }

}(mainApplication.mod("enum")));


(function (mod) {
    "use strict";

    try {
        mod.config = new mainApplication.Config(invertebrate.env.dev);
    }
    catch (e) {
        throw "problem registering config module. " + e;
    }

}(mainApplication.mod("config")));

(function (mod) {
    "use strict";

    try {
    }
    catch (e) {
        throw "problem registering services module. " + e;
    }

}(mainApplication.mod("services")));

(function (mod) {
    "use strict";

    try {
    }
    catch (e) {
        throw "problem registering caches module. " + e;
    }

}(mainApplication.mod("caches")));

(function (mod) {

    try {
    }
    catch (e) {
        throw "problem registering repositories module. " + e;
    }

}(mainApplication.mod("repositories")));

(function (mod) {
    "use strict";

    try {
        mod.TemplateServerSvc = new invertebrate.TemplateServerSvc(mainApplication.mod("config").config,
            function () {
                return '/templates';
            });
    }
    catch (e) {
        throw "problem registering templates module. " + e;
    }

}(mainApplication.mod("templates")));

(function (mod) {
    "use strict";

    try {
        mod.uiRootModel = new mainApplication.UIRootModel();
        mod.canvasModel = new mainApplication.CanvasModel(100);
    }
    catch (e) {
        throw "problem registering models module. " + e;
    }

}(mainApplication.mod("models")));

(function (mod) {
    "use strict";

    try {

    }
    catch (e) {
        throw "problem registering factories module. " + e;
    }

}(mainApplication.mod("factories")));

(function (mod) {
    "use strict";

    try {
        mod.uiRootView = new mainApplication.UIRootView(mainApplication.mod("models").uiRootModel);
        mod.canvasView = new mainApplication.CanvasView(mainApplication.mod("models").canvasModel);
        mod.canvasPreview = new mainApplication.CanvasView(mainApplication.mod("models").canvasModel, {selector: "#preview-canvas", pixelWidth: "1"});
    }
    catch (e) {
        throw "problem registering views module. " + e;
    }

}(mainApplication.mod("views")));

(function (mod) {
    "use strict";

    try {
        mod.homeController = new mainApplication.HomeController(mainApplication.mod("models").uiRootModel);
        mod.monsterEditorController = new mainApplication.MonsterEditorController(mainApplication.mod("models").uiRootModel);
        mod.pixelsController = new mainApplication.PixelsController(mainApplication.mod("models").canvasModel);
    }
    catch (e) {
        throw "problem registering controllers module. " + e;
    }

}(mainApplication.mod("controllers")));

