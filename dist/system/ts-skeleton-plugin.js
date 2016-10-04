System.register(['./my-component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Configures the plugin.
     */
    function configure(frameworkConfig, callback) {
        // configure...
        var config = {};
        if (callback instanceof Function) {
            callback(config);
        }
        // add some global resources...
        frameworkConfig.globalResources('./my-component');
    }
    exports_1("configure", configure);
    var exportedNames_1 = {
        'configure': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (my_component_1_1) {
                exportStar_1(my_component_1_1);
            }],
        execute: function() {
        }
    }
});
