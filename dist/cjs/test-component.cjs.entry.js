'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cb688785.js');

const TestComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("p", { id: "test", class: "test" }, "Test component"));
  }
};

exports.test_component = TestComponent;
