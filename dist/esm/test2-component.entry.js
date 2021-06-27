import { r as registerInstance, h, g as getElement } from './index-60e18657.js';
import { c as componentConnected, a as componentDisconnected } from './shared-components-e505c3c7.js';


const Test2Component = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    componentConnected(this.element, this, this.styleConnected);
  }
  componentDisconnected() {
    componentDisconnected(this.element, this);
  }
  render() {
    return h("p", { class: "test" }, "Hello World");
  }
  get element() { return getElement(this); }
};
Test2Component.__cssFilename = "00239da2-e0bb-4aaf-931f-38299c89c13f.css"

export { Test2Component as test2_component };
