import { r as registerInstance, h } from './index-278fa2be.js';

const TestComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  //private _rootNode: Node = null;
  render() {
    return (h("p", { id: "test", class: "test" }, "Test component"));
  }
};

export { TestComponent as test_component };
