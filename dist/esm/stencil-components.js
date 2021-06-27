import { p as promiseResolve, b as bootstrapLazy } from './index-60e18657.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["bootstrap-test",[[1,"bootstrap-test",{"count":[2],"startTime":[2,"start-time"]}]]],["test-component",[[1,"test-component"]]],["test2-component",[[1,"test2-component",{"styleConnected":[16]}]]]], options);
});
