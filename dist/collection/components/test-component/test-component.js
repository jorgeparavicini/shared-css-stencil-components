import { Component, h } from '@stencil/core';
export class TestComponent {
  //private _rootNode: Node = null;
  render() {
    return (h("p", { id: "test", class: "test" }, "Test component"));
  }
  static get is() { return "test-component"; }
  static get encapsulation() { return "shadow"; }
}
