'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e55785d4.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["test-component.cjs",[[0,"test-component"]]],["test2-component.cjs",[[0,"test2-component"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
