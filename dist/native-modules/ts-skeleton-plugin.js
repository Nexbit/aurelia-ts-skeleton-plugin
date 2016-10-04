// Exports
/*
 * Add all your exported files here
 */
export * from './my-component';
/**
 * Configures the plugin.
 */
export function configure(frameworkConfig, callback) {
    // configure...
    var config = {};
    if (callback instanceof Function) {
        callback(config);
    }
    // add some global resources...
    frameworkConfig.globalResources('./my-component');
}
