import { Component, h, Element, Prop } from '@stencil/core';
import { componentConnected, componentDisconnected } from 'stencil-shared-css';

let counter: number = 0;

@Component({
  tag: 'bootstrap-test',
  styleUrl: 'bootstrap-test.css',
  shadow: true,
})
export class BootstrapTest {
  @Element()
  private element: HTMLElement;

  @Prop() count: number;

  @Prop() startTime: number;

  connectedCallback() {
    componentConnected(this.element, this, () => this.connected());
  }

  componentDisconnected() {
    componentDisconnected(this.element, this);
  }

  render() {
    return (
      <div>
        <button class="btn">Im a button</button>
      </div>
    );
  }

  private connected() {
    counter++;
    if (counter === this.count) {
      console.log("Time it took to render all components: " + (performance.now() - this.startTime));
      console.log("Time for angular application: " + this.startTime)
    }
  }
}
