import { Component, h } from '@stencil/core';

@Component({
  tag: 'test2-component',
  styleUrl: 'test2-component.css',
  shadow: true,
})
export class Test2Component {
  render() {
    return (
      <div>
        <test-component></test-component>
      </div>
    );
  }
}
