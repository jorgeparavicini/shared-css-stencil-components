'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-516cd6fe.js');

const crossTagReferenceCounts = {};
const TestComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  connectedCallback() {
    const root = this.element.getRootNode();
    const referenceCounts = crossTagReferenceCounts[this.element.tagName] || new WeakMap();
    const info = referenceCounts.get(root) || {};
    const referenceCount = (info.referenceCount || 0) + 1;
    info.referenceCount = referenceCount;
    referenceCounts.set(root, referenceCount);
    crossTagReferenceCounts[this.element.tagName] = referenceCounts;
    if (referenceCount === 1) {
      const style = document.createElement('style');
      //let cssAsString = this.constructor['styles'];
      let cssAsString = '.test {color: red;}';
      console.log(cssAsString);
      const versionedComponentName = this.element.nodeName.toLowerCase();
      const genericComponentName = this.element.tagName;
      if (versionedComponentName !== genericComponentName) {
        cssAsString = cssAsString.split(genericComponentName).join(versionedComponentName);
      }
      style.textContent = cssAsString;
      style.dataset.name = this.element.tagName.toLowerCase();
      const parent = root instanceof ShadowRoot ? root : document.head;
      parent.appendChild(style);
      console.log(info);
      info.style = style;
    }
    referenceCounts.set(root, info);
    crossTagReferenceCounts[this.element.tagName] = referenceCounts;
  }
  render() {
    return (index.h("p", { id: "test", class: "test" }, "Test component"));
  }
  get element() { return index.getElement(this); }
};

exports.test_component = TestComponent;
