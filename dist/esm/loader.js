import { p as promiseResolve, b as bootstrapLazy } from './index-60e18657.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["bootstrap-test",[[1,"bootstrap-test",{"count":[2],"startTime":[2,"start-time"]}]]],["test-component",[[1,"test-component"]]],["test2-component",[[1,"test2-component",{"styleConnected":[16]}]]]], options);
  });
};

export { defineCustomElements };
