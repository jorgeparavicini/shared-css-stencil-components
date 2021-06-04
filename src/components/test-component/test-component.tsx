import { Component, h } from '@stencil/core';

@Component({ tag: 'test-component', styleUrl: 'test-component.css', shadow: false })
export class TestComponent {
  render() {
    return <p class="test">Test component</p>;
  }
}
