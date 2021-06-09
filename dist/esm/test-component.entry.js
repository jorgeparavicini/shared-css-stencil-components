import { r as registerInstance, h } from './index-a6358751.js';

const testComponentCss = ".test{color:red}";

const TestComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("p", { class: "test" }, "Test component");
  }
};
TestComponent.style = testComponentCss;

export { TestComponent as test_component };
