export * from './my-component';
/**
 * Configures the plugin.
 */
export declare function configure(frameworkConfig: {
    globalResources: (...resources: string[]) => any;
}, callback?: (config: any) => void): void;
