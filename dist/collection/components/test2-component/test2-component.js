import { Component, h } from '@stencil/core';
export class Test2Component {
  render() {
    return (h("div", null,
      h("test-component", null),
      h("test-component", null),
      h("test-component", null),
      h("test-component", null),
      h("test-component", null),
      h("test-component", null),
      h("test-component", null)));
  }
  static get is() { return "test2-component"; }
  static get originalStyleUrls() { return {
    "$": ["test2-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["test2-component.css"]
  }; }
}
