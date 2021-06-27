import { Component, h } from '@stencil/core';
export class TestComponent {
  render() {
    return (h("p", { id: "test", class: "test" }, "Test component"));
  }
  static get is() { return "test-component"; }
  static get encapsulation() { return "shadow"; }
}
