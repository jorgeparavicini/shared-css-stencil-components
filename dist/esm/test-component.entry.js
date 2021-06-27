import { r as registerInstance, h } from './index-60e18657.js';

const TestComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("p", { id: "test", class: "test" }, "Test component"));
  }
};

export { TestComponent as test_component };
