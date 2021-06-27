import { Component, h, Element, Prop } from '@stencil/core';
import { componentConnected, componentDisconnected } from 'stencil-shared-css';
export class Test2Component {
  connectedCallback() {
    componentConnected(this.element, this, this.styleConnected);
  }
  componentDisconnected() {
    componentDisconnected(this.element, this);
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
  static get properties() { return {
    "styleConnected": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => void",
        "resolved": "() => void",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get elementRef() { return "element"; }
}
