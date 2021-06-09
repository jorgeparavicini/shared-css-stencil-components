import { p as promiseResolve, b as bootstrapLazy } from './index-a6358751.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["test-component",[[0,"test-component"]]],["test2-component",[[0,"test2-component"]]]], options);
});
