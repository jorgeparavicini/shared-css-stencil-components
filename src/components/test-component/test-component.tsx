import { Component, h } from '@stencil/core';

@Component({ tag: 'test-component', shadow: true })
export class TestComponent {

  render() {
    return (
      <p id="test" class="test">
        Test component
      </p>
    );
  }
}
