import { Component, h, Element, Prop } from '@stencil/core';
import { componentConnected, componentDisconnected } from 'stencil-shared-css';
let counter = 0;
export class BootstrapTest {
  connectedCallback() {
    componentConnected(this.element, this, () => this.connected());
  }
  componentDisconnected() {
    componentDisconnected(this.element, this);
  }
  render() {
    return (h("div", null,
      h("button", { class: "btn" }, "Im a button")));
  }
  connected() {
    counter++;
    if (counter === this.count) {
      console.log("Time it took to render all components: " + (performance.now() - this.startTime));
      console.log("Time for angular application: " + this.startTime);
    }
  }
  static get is() { return "bootstrap-test"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["bootstrap-test.css"]
  }; }
  static get styleUrls() { return {
    "$": ["bootstrap-test.css"]
  }; }
  static get properties() { return {
    "count": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "count",
      "reflect": false
    },
    "startTime": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "start-time",
      "reflect": false
    }
  }; }
  static get elementRef() { return "element"; }
}
