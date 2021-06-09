import { r as registerInstance, h } from './index-a6358751.js';

const test2ComponentCss = ":host{display:block}";

const Test2Component = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("test-component", null), h("test-component", null), h("test-component", null), h("test-component", null), h("test-component", null), h("test-component", null), h("test-component", null)));
  }
};
Test2Component.style = test2ComponentCss;

export { Test2Component as test2_component };
