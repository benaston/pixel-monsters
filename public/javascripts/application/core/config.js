(function (app) {
    "use strict";

    function Config(env) {
        if (!(this instanceof app.Config)) {
            return new app.Config(env);
        }

        var that = this,
            devConfig = {
                mainApplicationUri: "/",
                templateServerUris: {
                    "1": "./contract/",
                    "2": "./contractor/",
                    "3": "./contract/",
                    "4": "./contractor/"
                }
            },
            prodConfig = {
                mainApplicationUri: "https://www.mainApplication.com/",
                templateServerUris: { Contractor: "https://contract.croni.cl/",
                                      Employer: "https://contractor.croni.cl/" }
            },
            sharedConfig = {
                templatesUriPart: "templates/",
                templatePostRenderScriptsUriPart: "template-post-render-scripts/",
                metadataUriPart: "metadata"
            };

        function init() {
            if (!env) {
                throw "env not supplied";
            }

            var config = _.extend(that, new invertebrate.Config(env));
            config.devConfig = devConfig;
            config.prodConfig = prodConfig;
            config.sharedConfig = sharedConfig;
            config.collateConfiguration();

            return config;
        }

        return init();
    }

    app.Config = Config;

}(mainApplication));