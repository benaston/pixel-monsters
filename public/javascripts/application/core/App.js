(function (app) {
    "use strict";

    function App(env) {
        if (!(this instanceof app.App)) {
            return new app.App(env);
        }

        var that = this;

        this.registerRoutes = function () {

            that.router.registerRoute('/', function () {
                app.mod("controllers").homeController.index();
            });

           that.router.registerRoute('/monstereditor', function () {
                app.mod("controllers").monsterEditorController.index();
            });

            that.router.registerRoute('/pixels/update', function (dto) {
                app.mod("controllers").pixelsController.update(dto);
            }, { silent: true });

        };

        function init() {
            if (!env) {
                throw "env not supplied";
            }

            that.env = env;

            return _.extend(that, new invertebrate.App(app.mod("templates").TemplateServerSvc));
        }

        return init();
    }

    app.App = App;
}(mainApplication));