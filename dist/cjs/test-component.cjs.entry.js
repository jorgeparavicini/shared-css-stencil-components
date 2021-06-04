'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6393c517.js');

const testComponentCss = ".test{color:red}";

const TestComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("p", { class: "test" }, "Test component");
  }
};
TestComponent.style = testComponentCss;

exports.test_component = TestComponent;
