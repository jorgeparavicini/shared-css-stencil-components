'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-516cd6fe.js');

const test2ComponentCss = ":host{display:block}";

const Test2Component = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("test-component", null)));
  }
};
Test2Component.style = test2ComponentCss;

exports.test2_component = Test2Component;
