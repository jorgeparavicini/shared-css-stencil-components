import { r as registerInstance, h, g as getElement } from './index-60e18657.js';
import { c as componentConnected, a as componentDisconnected } from './shared-components-e505c3c7.js';


let counter = 0;
const BootstrapTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    componentConnected(this.element, this, () => this.connected());
  }
  componentDisconnected() {
    componentDisconnected(this.element, this);
  }
  render() {
    return (h("div", null, h("button", { class: "btn" }, "Im a button")));
  }
  connected() {
    counter++;
    if (counter === this.count) {
      console.log("Time it took to render all components: " + (performance.now() - this.startTime));
      console.log("Time for angular application: " + this.startTime);
    }
  }
  get element() { return getElement(this); }
};
BootstrapTest.__cssFilename = "3aa10cce-eb4c-4451-b0d8-65aa00ef586c.css"

export { BootstrapTest as bootstrap_test };
