define(["require", "exports", './my-component'], function (require, exports, my_component_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    // Exports
    /*
     * Add all your exported files here
     */
    __export(my_component_1);
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
    exports.configure = configure;
});
