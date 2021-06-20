'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-516cd6fe.js');

const TestComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  //private _rootNode: Node = null;
  render() {
    return (index.h("p", { id: "test", class: "test" }, "Test component"));
  }
};

exports.test_component = TestComponent;
