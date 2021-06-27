import { Component, h, Element, Prop } from '@stencil/core';
import { componentConnected, componentDisconnected } from 'stencil-shared-css';

@Component({
  tag: 'test2-component',
  styleUrl: 'test2-component.css',
  shadow: true,
})
export class Test2Component {
  @Element()
  private element: HTMLElement;

  @Prop() styleConnected?: () => void;

  connectedCallback() {
    componentConnected(this.element, this, this.styleConnected);
  }

  componentDisconnected() {
    componentDisconnected(this.element, this);
  }

  render() {
    return <p class="test">Hello World</p>;
  }
}
