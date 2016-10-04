// Exports
/*
 * Add all your exported files here
 */
export * from './my-component';

/**
 * Configures the plugin.
 */
export function configure(
  frameworkConfig: { globalResources: (...resources: string[]) => any },
  callback?: (config: any) => void 
) {
  // configure...
  const config = {};
  if (callback instanceof Function) {
    callback(config);
  }

  // add some global resources...
  frameworkConfig.globalResources('./my-component');
}
