import { Component, h, Element } from '@stencil/core';
import { componentConnected, componentDisconnected } from 'stencil-shared-css';
export class Test2Component {
  connectedCallback() {
    componentConnected(this.element, this);
  }
  componentDisconnected() {
    componentDisconnected(this.element);
  }
  render() {
    return h("p", { class: "test" }, "Hello World");
  }
  static get is() { return "test2-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["test2-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["test2-component.css"]
  }; }
  static get elementRef() { return "element"; }
}
