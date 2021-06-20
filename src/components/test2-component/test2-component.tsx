import { Component, h, Element } from '@stencil/core';
import { componentConnected, componentDisconnected } from 'stencil-shared-css';

@Component({
  tag: 'test2-component',
  styleUrl: 'test2-component.css',
  shadow: true,
})
export class Test2Component {
  @Element()
  private element: HTMLElement;

  connectedCallback() {
    componentConnected(this.element, this);
  }

  componentDisconnected() {
    componentDisconnected(this.element);
  }

  render() {
    return <p class="test">Hello World</p>;
  }
}
