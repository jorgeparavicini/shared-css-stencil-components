'use strict';

const index = require('./index-cb688785.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-components.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["bootstrap-test.cjs",[[1,"bootstrap-test",{"count":[2],"startTime":[2,"start-time"]}]]],["test-component.cjs",[[1,"test-component"]]],["test2-component.cjs",[[1,"test2-component",{"styleConnected":[16]}]]]], options);
});
