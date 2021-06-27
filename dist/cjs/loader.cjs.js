'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cb688785.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["bootstrap-test.cjs",[[1,"bootstrap-test",{"count":[2],"startTime":[2,"start-time"]}]]],["test-component.cjs",[[1,"test-component"]]],["test2-component.cjs",[[1,"test2-component",{"styleConnected":[16]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
