import { h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const testComponentCss = ".test{color:red}";

const TestComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return h("p", { class: "test" }, "Test component");
  }
  static get style() { return testComponentCss; }
};

const test2ComponentCss = ":host{display:block}";

const Test2Component$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", null, h("test-component", null), h("test-component", null), h("test-component", null), h("test-component", null), h("test-component", null), h("test-component", null), h("test-component", null)));
  }
  static get style() { return test2ComponentCss; }
};

const TestComponent = /*@__PURE__*/proxyCustomElement(TestComponent$1, [0,"test-component"]);
const Test2Component = /*@__PURE__*/proxyCustomElement(Test2Component$1, [0,"test2-component"]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      TestComponent,
  Test2Component
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { Test2Component, TestComponent, defineCustomElements };
