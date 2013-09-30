jQuery(document).ready(function () {
    "use strict";

    FastClick.attach(document.body);

    window.mainApplication.instance = new mainApplication.App(invertebrate.env.dev);

    _.each(window.mainApplication.mod("views"), function(v){
        v.onDomReady();
    });

    throw "canvas should be a bunch of cubes on a plane like http://cubiq.org/dropbox/3dcity/index2.html";
    //this should happen at the end here to ensure everything is initialized before routing begins
    window.mainApplication.instance.router = new invertebrate.Router('PixelMonsters');
    window.mainApplication.instance.registerRoutes();
});



