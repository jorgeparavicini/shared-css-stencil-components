import { Component, h } from '@stencil/core';
export class TestComponent {
  render() {
    return h("p", { class: "test" }, "Test component");
  }
  static get is() { return "test-component"; }
  static get originalStyleUrls() { return {
    "$": ["test-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["test-component.css"]
  }; }
}
