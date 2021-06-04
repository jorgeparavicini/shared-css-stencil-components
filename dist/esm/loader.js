import { p as promiseResolve, b as bootstrapLazy } from './index-34b782ec.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["test-component",[[0,"test-component"]]],["test2-component",[[0,"test2-component"]]]], options);
  });
};

export { defineCustomElements };
