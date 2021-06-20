import { p as promiseResolve, b as bootstrapLazy } from './index-278fa2be.js';

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
  return bootstrapLazy([["test-component",[[1,"test-component"]]],["test2-component",[[1,"test2-component"]]]], options);
});
