import { Component, h } from '@stencil/core';

@Component({ tag: 'test-component', shadow: true })
export class TestComponent {
  //private _rootNode: Node = null;

  render() {
    return (
      <p id="test" class="test">
        Test component
      </p>
    );
  }
}
