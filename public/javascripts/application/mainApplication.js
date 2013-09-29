"use strict";

//provides top-level "namespace" (property on window)
//to hang everything else off.
window.mainApplication = {

    mod: function () {
        var mods = {};

        return function (name) {
            if (mods[name]) {

                return mods[name];
            }

            return mods[name] = {};
        };
    }()

};
