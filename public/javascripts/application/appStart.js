jQuery(document).ready(function () {
    "use strict";

    FastClick.attach(document.body);

    window.mainApplication.instance = new mainApplication.App(invertebrate.env.dev);

    _.each(window.mainApplication.mod("views"), function(v){
        v.onDomReady();
    });

    //this should happen at the end here to ensure everything is initialized before routing begins
    window.mainApplication.instance.router = new invertebrate.Router('PixelMonsters');
    window.mainApplication.instance.registerRoutes();
});



