import { p as promiseResolve, b as bootstrapLazy } from './index-278fa2be.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["test-component",[[1,"test-component"]]],["test2-component",[[1,"test2-component"]]]], options);
  });
};

export { defineCustomElements };
