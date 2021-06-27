'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cb688785.js');
const sharedComponents = require('./shared-components-72e72d36.js');

const test2ComponentCss = ":host{display:block}.test{color:red}";

const Test2Component = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  connectedCallback() {
    sharedComponents.componentConnected(this.element, this, this.styleConnected);
  }
  componentDisconnected() {
    sharedComponents.componentDisconnected(this.element, this);
  }
  render() {
    return index.h("p", { class: "test" }, "Hello World");
  }
  get element() { return index.getElement(this); }
};
Test2Component.style = test2ComponentCss;

exports.test2_component = Test2Component;
